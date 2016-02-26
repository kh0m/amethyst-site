cmi =
  core:
    student_id: "asdf"
    student_name: "asdf"
    lesson_location: ""
    credit: "credit"
    lesson_status: "passed"
    entry: "ab-initio"
    score: "90"
    total_time: "0000:00:00.00"
    lesson_mode: "normal"
    exit: ""
    session_time: "0000:00:00.00"
    score:
      raw: "100"
      min: "0"
      max: "100"
  suspend_data: "1"

window.API =
  LMSInitialize: (parameter) ->
    try
      console.log('LMSInitialize')
      true
    catch err
      alert(err.message)
      false
  LMSSetValue: (parameter, value) ->
    try
      console.log("SetValue: #{parameter}, #{value}")
      true
    catch err
      alert(err.message)
      false
  LMSGetValue: (parameter) ->
    try
      console.log("GetValue: #{parameter}")
      parameter
    catch err
      alert(err.message)
      parameter
  LMSCommit: (parameter) ->
    try
      console.log("Commit: #{parameter}")
      true
    catch err
      alert(err.message)
      false
  LMSFinish: (parameter) ->
    try
      console.log('LMSFinish')
      true
    catch err
      alert(err.message)
      false
  LMSGetLastError: ->
    try
      "0"
    catch err
      alert(err.message)
