var audio = document.getElementById("player");

audio.addEventListener("timeupdate", function() {
    var timeleft = document.getElementById('timeleft'),
        duration = parseInt( audio.duration ),
        currentTime = parseInt( audio.currentTime ),
        timeLeft = duration - currentTime,
        s, m;
    
    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;
    
    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;
    
    timeleft.innerHTML = m+":"+s;
    
}, false);

audio.addEventListener("timeupdate", function() {
    var timeline = document.getElementById('duration');
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    if (s < 10) {
        timeline.innerHTML = m + ':0' + s;
    }
    else {
        timeline.innerHTML = m + ':' + s;
    }
}, false);