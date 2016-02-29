

// exit button
function GetAddExitButtonSetting(callback) {
    $.getJSON('assets/course/data/course.json', function (data) {
        var x = data.config.addExitButton;
        callback(x);
    });
}

function SetAddExitButton() {
    GetAddExitButtonSetting(function(setting) {
        if (setting) {
            $('#content-container').prepend('<a class="right text-center" id="btn-exit" title="Close Window"><i class="fa fa-times fa-2x"></i></a>');
            $('#btn-exit').click(function(){window.close();});
        }
    });
}



// remote video
function GetVideoPath(ctrl, video) {
    var path = './' + video;
    $(ctrl).attr('data-src', path);
}