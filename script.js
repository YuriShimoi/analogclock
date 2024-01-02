const SEGMENT_RELATION = ['top', 'top-left', 'top-right', 'middle', 'bottom-left', 'bottom-right', 'bottom'];
const SEGMENTS = {
    '0': [1, 1, 1, 0, 1, 1, 1],
    '1': [0, 0, 1, 0, 0, 1, 0],
    '2': [1, 0, 1, 1, 1, 0, 1],
    '3': [1, 0, 1, 1, 0, 1, 1],
    '4': [0, 1, 1, 1, 0, 1, 0],
    '5': [1, 1, 0, 1, 0, 1, 1],
    '6': [1, 1, 0, 1, 1, 1, 1],
    '7': [1, 0, 1, 0, 0, 1, 0],
    '8': [1, 1, 1, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1]
};

function setDisplay(el, num) {
    for(let st in SEGMENTS[num]) {
        let state = SEGMENTS[num][st];
        if(state) {
            el.querySelectorAll(`.segment[${SEGMENT_RELATION[st]}]`)[0].setAttribute("on", true);
        }
        else {
            el.querySelectorAll(`.segment[${SEGMENT_RELATION[st]}]`)[0].removeAttribute("on");
        }
    }
}

function updateDisplay() {
    let seconds = new Date().getSeconds();
    if(seconds < 10) {
        setDisplay(document.getElementById("seconds1"), 0);
        setDisplay(document.getElementById("seconds2"), seconds);
    }
    else {
        setDisplay(document.getElementById("seconds1"), Number(seconds.toString()[0]));
        setDisplay(document.getElementById("seconds2"), Number(seconds.toString()[1]));
    }
    let minutes = new Date().getMinutes();
    if(minutes < 10) {
        setDisplay(document.getElementById("minutes1"), 0);
        setDisplay(document.getElementById("minutes2"), minutes);
    }
    else {
        setDisplay(document.getElementById("minutes1"), Number(minutes.toString()[0]));
        setDisplay(document.getElementById("minutes2"), Number(minutes.toString()[1]));
    }
    let hours = new Date().getHours();
    if(hours < 10) {
        setDisplay(document.getElementById("hours1"), 0);
        setDisplay(document.getElementById("hours2"), hours);
    }
    else {
        setDisplay(document.getElementById("hours1"), Number(hours.toString()[0]));
        setDisplay(document.getElementById("hours2"), Number(hours.toString()[1]));
    }
}

updateDisplay();
setInterval(updateDisplay, 1000);