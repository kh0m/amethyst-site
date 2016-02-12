var pinso = pinso || {};
pinso.data = pinso.data || {};
        
pinso.data.adapter = function($, User) {

    return {
        
        _version: '4.0',
        _aicc_url : null,
        _aicc_sid : null,
        _logHistory : [],
        _lms_properties: {
            STUDENT_NAME : "student_name",
            STUDENT_ID : "student_id",
            LOCATION : "lesson_location",
            STATUS : "lesson_status",
            SUCCESS : null,
            SUSPEND_DATA : "suspend_data",
            SCORE_RAW : "score",
            SCORE_MIN : null,
            SCORE_MAX : null,
            SCORE_SCALED : null,
            CREDIT : "credit",
            TOTAL_TIME : "time",
            EXIT : null
        },
        _lms_strings: {
            COMPLETED : "complete",
            INCOMPLETE : "incomplete",
            PASSED : null,
            NOT_ATTEMPTED : null,
            UNKNOWN : null,
            EXIT_SUSPEND : null,
            EXIT_LOGOUT : null
        },
        initialize: function (callback) {
        
            if (location.href.indexOf('?') !== -1) {
                
                var index = location.href.indexOf('?')+1,
                    query_str = location.href.substring(index),
                    query_array = (query_str.length===0 || query_str.indexOf('&') === -1) ? [] : query_str.split('&');

                for (var i in query_array) {
                
                    if ((typeof query_array[i] === "string") && query_array[i].substring(0,4).toLowerCase() === 'aicc') {
                
                        var _q = (query_array[i].length<1 || query_array[i].indexOf('=') === -1) ? [] : query_array[i].split('=');
                        if (_q[0].toLowerCase()==='aicc_sid') {
                           this._aicc_sid = _q[1];
                        }
                        if (_q[0].toLowerCase()==='aicc_url') {
                            var url;
                            if (_q.length > 2) {
                                url = _q[1]+'='+_q[2];
                            } else {
                                url = _q[1];
                            }
                            this._aicc_url = decodeURIComponent(url.replace(/\+/g, " "));
                        }
                    
                    }
                }

                $(window).one('unload', $.proxy(this.exit, this));
                this.getAICC(callback);
                
            } else {
                callback(new User());
            }
            
        },
        read: function (r, callback) {
            
            this.log(r);
            
            var obj = this.aiccToObject(r),
                user_status = new User({
                        "student_name" : obj[this._lms_properties.STUDENT_NAME],
                        "student_id" : obj[this._lms_properties.STUDENT_ID],
                        "location" : obj[this._lms_properties.LOCATION],
                        "score_raw" : obj[this._lms_properties.SCORE_RAW],
                        "credit" : obj[this._lms_properties.CREDIT],
                        "total_time" : obj[this._lms_properties.TOTAL_TIME],
                        "suspend_data" : obj[this._lms_properties.SUSPEND_DATA]
                    });

            if (obj[this._lms_properties.STATUS] === 'complete' || obj[this._lms_properties.STATUS] === 'c') {
                user_status.set('status', 'complete');
            } else {
                user_status.set('status', 'incomplete');
            }
            
            callback(user_status);
            
        },
        write: function (model) {
            
            if (this._aicc_url && model) {
                
                var required_score = window.pinso.elearning.assessmentRequiredScore(),
                    score = model.get('score_raw') || '',
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
                
                var self = this,
                    delimiter = '\r\n',
                    string = delimiter+'[core]' + delimiter +
                                 'lesson_location=' + location + delimiter +
                                 'score=' + score + delimiter +
                                 'lesson_status=' + status + delimiter +
                                 '[core_lesson]' + delimiter +
                                 'suspend_data=' + suspend_data.toString(),
                    encoded_str = encodeURIComponent(string);
                this.log(encoded_str);
                $.post(this._aicc_url, { 
                        command: 'PutParam',
                        version: '4.0',
                        session_id: this._aicc_sid,
                        AICC_Data: encoded_str
                    },
                function (r) {
                    self.log('PutParam Success');
                }).error(
                function (a, b, c) {
                    self.showError(c);
                });

            }
                
        },
        getAICC: function (callback) {
            var self = this;
            $.get(this._aicc_url, { 
                        command: 'GetParam',
                        version: '4.0',
                        session_id: this._aicc_sid 
                    },
                function (r) {
                    self.read(r, callback);
                }).error(
                function (a, b, c) {
                    self.showError(c);
                });
            
        },
        showError: function (err) {
            this.log(err);
        }, 
        aiccToObject :function (str) {
            var obj = {},
                core_array = str.split('[core_lesson]'),
                objs = core_array[0].replace(/(\r\n|\n|\r)/gm,";").split(';'),
                core_lesson_str = core_array[1];
                
            if (core_lesson_str && core_lesson_str.length) {
            
                var core_lesson_array = core_lesson_str.split('[core_vendor]'),
                    suspend_str = core_lesson_array[0].replace(/(\r\n|\n|\r)/gm,""),
                    suspend_array = suspend_str.split('=');
           
                if (suspend_array[1] && suspend_array[1].length) {     
                    obj['suspend_data'] = suspend_array[1].split(',');
                }
            
            }
            
            for (var i=0; i < objs.length; i++) {
                objs[i] = objs[i].split('=');
                if (objs[i].length < 2) {
                    objs.splice(i, 1);
                } else {
                    obj[objs[i][0]] = objs[i][1];
                }
            }
            return obj;
        },
        log : function() {
			this._logHistory.push(arguments);
			if (window.console) {
				console.log( Array.prototype.slice.call(arguments) );
			}
		},
        terminate: function () {
            var self = this;
            $.get(this._aicc_url, { 
                        command: 'ExitAU',
                        version: '4.0',
                        session_id: this._aicc_sid 
                    },
                function (r) {
                    return true;
                }).error(
                function (a, b, c){
                    self.showError(c);
                });
            //return success;
        },
        exit: function () {
            var success = this.terminate();
            return success;
        },
      
    };

};
