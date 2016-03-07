
var pinso = pinso || {}
pinso.data = pinso.data || {}

pinso.data.adapter = function($, User){

  return {

    _logHistory : [],

    initialize: function(callback) {
      this.read(callback);
      $(window).one('unload', $.proxy(this.exit, this));
    },

    read: function(callback){
      if (this.LMSMethods.INITIALIZE('') == 'true'){
        user_status = new User({
          "student_name" : this.getProperty(this.LMSProperties.STUDENT_NAME),
          "student_id" : this.getProperty(this.LMSProperties.STUDENT_ID),
          "location" : this.getProperty(this.LMSProperties.LOCATION),
          "suspend_data" : this.getProperty(this.LMSProperties.SUSPEND_DATA).split(','),
          "score_raw" : this.getProperty(this.LMSProperties.SCORE_RAW),
          "credit" : this.getProperty(this.LMSProperties.CREDIT),
          "total_time" : this.getProperty(this.LMSProperties.TOTAL_TIME)
        });
        if (this.getProperty(this.LMSProperties.STATUS) == this.LMSStrings.NOT_ATTEMPTED || this.getProperty(this.LMSProperties.STATUS) == this.LMSStrings.UNKNOWN){
          user_status.set("status", this.LMSStrings.INCOMPLETE);
        }
        callback(user_status);
      }
    },

    write: function(model){
      required_score = window.pinso.elearning.assessmentRequiredScore();
      score = model.get('score_raw') || this.getProperty(this.LMSProperties.SCORE_RAW);
      percent_complete = model.get('progress');
      suspend_data = model.get('suspend_data');
      total_questions = window.pinso.elearning.assessmentTotalQuestions();
      location = model.get('location');

      score.isPassing = score >= required_score;
      content_completed = percent_complete == 1;

      status = this.LMSStrings.INCOMPLETE;
      if (content_completed){
        if (required_score){
          if (score && score.isPassing){
            status = this.LMSStrings.COMPLETED;
          }
        }
        else{
          status = this.LMSStrings.COMPLETED;
        }
      }

      this.setProperty(this.LMSProperties.SCORE_RAW, score);
      this.setProperty(this.LMSProperties.STATUS, status);
      this.setProperty(this.LMSProperties.SUSPEND_DATA, suspend_data.toString());
      this.setProperty(this.LMSProperties.LOCATION, location);
    },

    setProperty: function(prop, val){
      this.LMSMethods.SET(prop, val);
    },


    getProperty: function(prop){
      var value = null;
      $.getJSON( "/users/current.json", function( data ) {
        value = data[prop];
        return value;
      });
      alert("getProperty: " + value);
    },

    log: function(){
    	this._logHistory.push(arguments);
    	if (window.console)
    		console.log( Array.prototype.slice.call(arguments) );
    },

    terminate: function(){
      this.write();
      success = false;
      if (this.getProperty(this.LMSProperties.STATUS) !== this.LMSStrings.COMPLETED && this.getProperty(this.LMSProperties.STATUS) !== this.LMSStrings.PASSED){
        success = this.setProperty(this.LMSProperties.EXIT, this.LMSStrings.EXIT_SUSPEND);
      }
      else{
        success = this.setProperty(this.LMSProperties.EXIT, this.LMSStrings.EXIT_LOGOUT);
      }
      success = (this.LMSMethods.TERMINATE('') == 'true');

      return success;
    },

    exit: function(){
      success = this.terminate();
      return success;
    },


    LMSProperties: {
      STUDENT_NAME: "email",
      STUDENT_ID: "cmi.core.student_id",
      LOCATION: "cmi.core.lesson_location",
      STATUS: "cmi.core.lesson_status",
      SUCCESS: null,
      SUSPEND_DATA: "cmi.suspend_data",
      SCORE_RAW: "cmi.core.score.raw",
      SCORE_MIN: "cmi.core.score.min",
      SCORE_MAX: "cmi.core.score.max",
      SCORE_SCALED: null,
      CREDIT: "cmi.core.credit",
      TOTAL_TIME: "cmi.core.total_time",
      EXIT: "cmi.core.exit"
    },

    LMSMethods: {
      INITIALIZE: function(parameter){
        alert("LMSInitialize");
        return "true";
      },
      SET: function(parameter, value){
        alert("LMSSetValue: " + parameter + ":" + value);
        return "true";
      },
      GET: function(parameter){
        alert("LMSGetValue: " + parameter);
        return "value";
      },
      COMMIT: function(parameter){
        alert("LMSCommit");
        return "true";
      },
      TERMINATE: function(parameter){
        alert("LMSFinish");
        return "true";
      },
      GET_LAST_ERROR: function(){
        alert("LMSGetLastError");
        return 0;
      }
    },

    LMSStrings: {
      COMPLETED: "completed",
      INCOMPLETE: "incomplete",
      PASSED: "passed",
      NOT_ATTEMPTED: "not attempted",
      UNKNOWN: "unknown",
      EXIT_SUSPEND: "suspend",
      EXIT_LOGOUT: "logout"
    },

    datamodel: {
      cmi: {
        suspend_data: "",
        core: {
          student_name: "ken",
          student_id: "",
          lesson_location: "",
          lesson_status: "",
          credit: "",
          total_time: "",
          exit: "",
          score: {
            raw: "",
            min: "",
            max: ""
          }
        }
      }
    }


  }
}
