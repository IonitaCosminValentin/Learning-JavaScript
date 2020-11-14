let oneSecond = 1000;

time();
function time() {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }


    let clock = document.getElementById('clock')
    let realTime = document.createTextNode(hours + " : " + minutes + " : " + seconds);
    clock.appendChild(realTime)
};


function awesome() {

  alert("wip");
}

function updateTime() {
    clock.removeChild(clock.childNodes[0]);
    time();
};

setInterval(updateTime, oneSecond);
