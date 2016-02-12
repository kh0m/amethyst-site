var pinso = pinso || {};
pinso.data = pinso.data || {};

pinso.data.scorm_versions = {
        "SCORM12": "1.2",
        "SCORM2004" : "2004"
    };
    
pinso.data.protocol = pinso.data.scorm_versions.SCORM12;

pinso.data.adapter = function($, User) {

    return {
        
        _handle: null,
        _isFound: false,
        _version: pinso.data.protocol,
        _logHistory : [],
        _lms_properties: null,
        _lms_methods: null,
        _lms_strings: null,
        initialize: function (callback) {
            this._handle = this.getHandle();
            if (this._handle) {
                this.read(callback);
                $(window).one('unload', $.proxy(this.exit, this));
            } else {
                callback(new User());
            }
        },
        read: function (callback) {
            
            if (this._handle) {
            
                this._lms_properties = this.getLMSProperties(this._version);
                this._lms_methods = this.getLMSMethods(this._version);
                this._lms_strings = this.getLMSStrings(this._version);
            
                var success = (this._handle[this._lms_methods.INITIALIZE]('') === 'true'); 
            
                if (success) {
            
                    this._lms_properties = this.getLMSProperties(this._version);
                    this._lms_methods = this.getLMSMethods(this._version);
                    this._lms_strings = this.getLMSStrings(this._version);

                    var user_status = new User({
                            "student_name" : this.getProperty(this._lms_properties.STUDENT_NAME),
                            "student_id" : this.getProperty(this._lms_properties.STUDENT_ID),
                            "location" : this.getProperty(this._lms_properties.LOCATION),
                            "suspend_data" : this.getProperty(this._lms_properties.SUSPEND_DATA).split(','),
                            "score_raw" : this.getProperty(this._lms_properties.SCORE_RAW),
                            "credit" : this.getProperty(this._lms_properties.CREDIT),
                            "total_time" : this.getProperty(this._lms_properties.TOTAL_TIME)
                        });
                
                     if (this.getProperty(this._lms_properties.STATUS) === this._lms_strings.NOT_ATTEMPTED || this.getProperty(this._lms_properties.STATUS) === this._lms_strings.UNKNOWN) {
                        user_status.set("status", this._lms_strings.INCOMPLETE);
                    }
        
                    callback(user_status);
            
                }
            }
        },
        write: function (model) {
        
            if (this._handle && model) {
            
                var required_score = window.pinso.elearning.assessmentRequiredScore(),
                    score = model.get('score_raw') || this.getProperty(this._lms_properties.SCORE_RAW),
                    percentComplete = model.get('progress'),
                    suspend_data = model.get('suspend_data'),
                    total_questions = window.pinso.elearning.assessmentTotalQuestions(),
                    location = model.get('location'),
                    status = null;

                if (required_score && score && score >= required_score && percentComplete === 1) {
                    status = this._lms_strings.COMPLETED;
                } else if (!required_score && percentComplete === 1) {
                    status = this._lms_strings.COMPLETED;
                } else {
                    status = this._lms_strings.INCOMPLETE;
                }
                
                if (score >= required_score && !this.getProperty(this._lms_properties.SCORE_RAW)) {
                    this.setProperty(this._lms_properties.SCORE_RAW, score);
                }
                
                this.setProperty(this._lms_properties.STATUS, status);
                this.setProperty(this._lms_properties.SUSPEND_DATA, suspend_data.toString());
                this.setProperty(this._lms_properties.LOCATION, location);

                if (this._version === pinso.data.scorm_versions.SCORM2004 && (this.getProperty(this._lms_properties.STATUS) === this._lms_strings.COMPLETED)) {
                    this.setProperty(this._lms_properties.SUCCESS, this._lms_strings.PASSED);
                }
                if (this._version === pinso.data.scorm_versions.SCORM2004 && this.getProperty(this._lms_properties.SCORE_RAW)) {
                    this.setProperty(this._lms_properties.SCORE_SCALED, window.pinso.elearning.assessmentScore()/100);
                }
            }
            
        },
        getHandle: function () {
            if(!this._handle && !this._isFound) {
                this._handle = this.getAPI();
            }
            return this._handle;
        },
        findAPI: function (win) {
            var scorm = null,
                findAttempts = 0,
                findAttemptLimit = 500;
            
            while ((!win.API && !win.API_1484_11) &&
               (win.parent) &&
               (win.parent !== win) &&
               (findAttempts <= findAttemptLimit)) {
                    findAttempts++;
                    win = win.parent;
            }
            
            switch (this._version) {
                case pinso.data.scorm_versions.SCORM2004:
                    if (win.API_1484_11) {
                        scorm = win.API_1484_11;
                    } else {
                        this.log('SCORM version 2004 was specified by user, but API_1484_11 cannot be found.');
                    }
                    break;
                case pinso.data.scorm_versions.SCORM12:
                    if (win.API) {
                        scorm = win.API;
                    } else {
                        this.log("SCORM version 1.2 was specified by user, but API cannot be found.");
                    }
                    break;
            }
            
            if (scorm) {
                this.log("API: " + scorm);
            } else {
                this.log("Error finding API. \nFind attempts: " +findAttempts +". \nFind attempt limit: " +findAttemptLimit);
            }
            
            return scorm;
        },
        getAPI: function () {
            var scorm = null;
            if (window.parent && window.parent !== window ) {
                scorm = this.findAPI(window.parent);
            }
            if (!scorm && window.top.opener) {
                scorm = this.findAPI(window.top.opener);
            }
            if (!scorm && window.top.opener && window.top.opener.document) {
                scorm = this.findAPI(window.top.opener.document);
            }
            if (scorm) {
                this._isFound = true;
            } else {
                this.log("Get API failed: Can't find the API!");
            }
            return scorm;
        },
        setProperty: function ( prop, val ) {
            if (this._handle) {
                this._handle[this._lms_methods.SET](prop, val);
            }
        },		
        getProperty: function ( prop ) {
            var value = null;
            if (this._handle) {
                value = this._handle[this._lms_methods.GET](prop); 
            }
            return value;
        }, 
        getLastError: function () {
            var code = 0;
            if (this._handle) {
                code = parseInt(this._handle[this._lms_methods.GET_LAST_ERROR](), 10);
            } else {
                this.log("SCORM getCode failed: API is null.");
            }
            return code;
        },
        log : function() {
			this._logHistory.push(arguments);
			if (window.console) {
				console.log( Array.prototype.slice.call(arguments) );
			}
		},
        terminate: function () {
            this.write();
            var success = false;
            if (this._handle) {
                 if(this.getProperty(this._lms_properties.STATUS) !== this._lms_strings.COMPLETED && this.getProperty(this._lms_properties.STATUS) !== this._lms_strings.PASSED) {
                    success = this.setProperty(this._lms_properties.EXIT, this._lms_strings.EXIT_SUSPEND);
                } else {
                    success = this.setProperty(this._lms_properties.EXIT, this._lms_strings.EXIT_LOGOUT);
                }
                success = (this._handle[this._lms_methods.TERMINATE]('') === 'true');
            }
            return success;
        },
        exit: function () {
            var success = this.terminate();
            return success;
        },
        getLMSProperties: function (version) {
            var obj = {};
            switch (version) {
                case pinso.data.scorm_versions.SCORM12:
                    obj.STUDENT_NAME = "cmi.core.student_name";
                    obj.STUDENT_ID = "cmi.core.student_id";
                    obj.LOCATION = "cmi.core.lesson_location";
                    obj.STATUS = "cmi.core.lesson_status";
                    obj.SUCCESS = null;
                    obj.SUSPEND_DATA = "cmi.suspend_data";
                    obj.SCORE_RAW = "cmi.core.score.raw";
                    obj.SCORE_MIN = "cmi.core.score.min";
                    obj.SCORE_MAX = "cmi.core.score.max",
                    obj.SCORE_SCALED =null;
                    obj.CREDIT = "cmi.core.credit";
                    obj.TOTAL_TIME = "cmi.core.total_time";
                    obj.EXIT = "cmi.core.exit";
                    break;
                case pinso.data.scorm_versions.SCORM2004:
                    obj.STUDENT_NAME = "cmi.learner_name";
                    obj.STUDENT_ID = "cmi.learner_id";
                    obj.LOCATION = "cmi.location";
                    obj.STATUS = "cmi.completion_status";
                    obj.SUCCESS = "cmi.success_status";
                    obj.SUSPEND_DATA = "cmi.suspend_data";
                    obj.SCORE_RAW = "cmi.score.raw";
                    obj.SCORE_MIN = "cmi.score.min";
                    obj.SCORE_MAX = "cmi.score.max",
                    obj.SCORE_SCALED = "cmi.score.scaled";
                    obj.CREDIT = "cmi.credit";
                    obj.TOTAL_TIME = "cmi.total_time";
                    obj.EXIT = "cmi.exit";
            }
            return obj;
        },
        getLMSMethods: function (version) {
            var obj = {};
            switch (version) {
                case pinso.data.scorm_versions.SCORM12:
                    obj.INITIALIZE = "LMSInitialize";
                    obj.SET = "LMSSetValue";
                    obj.GET = "LMSGetValue";
                    obj.COMMIT = "LMSCommit";
                    obj.TERMINATE = "LMSFinish";
                    obj.GET_LAST_ERROR = "LMSGetLastError";
                    break;
                case pinso.data.scorm_versions.SCORM2004:
                    obj.INITIALIZE = "Initialize";
                    obj.SET = "SetValue";
                    obj.GET = "GetValue";
                    obj.COMMIT = "Commit";
                    obj.TERMINATE = "Terminate";
                    obj.GET_LAST_ERROR = "GetLastError";
            }
            return obj;
        },
        getLMSStrings: function (version) {
            var obj = {};
            switch (version) {
                case pinso.data.scorm_versions.SCORM12:
                    obj.COMPLETED = "completed";
                    obj.INCOMPLETE = "incomplete";
                    obj.PASSED = "passed";
                    obj.NOT_ATTEMPTED = "not attempted";
                    obj.UNKNOWN = "unknown";
                    obj.EXIT_SUSPEND = "suspend";
                    obj.EXIT_LOGOUT = "logout";
                    break;
                case pinso.data.scorm_versions.SCORM2004:
                    obj.COMPLETED = "completed";
                    obj.INCOMPLETE = "incomplete";
                    obj.PASSED = "passed";
                    obj.NOT_ATTEMPTED = "not attempted";
                    obj.UNKNOWN = "unknown";
                    obj.EXIT_SUSPEND = "suspend";
                    obj.EXIT_LOGOUT = "normal";
            } 
            return obj;   
        }
        
    };

};
