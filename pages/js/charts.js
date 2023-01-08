var audioUploader = document.getElementById("audio");
var audioElement = new Audio();
var playButton = document.getElementById("play-button");
var menu = document.getElementById("menu");
var isPlaying = false;
var root = document.querySelector(":root");

var chart = '{';

playButton.addEventListener("click",play);
window.addEventListener("touchstart",record);
audioElement.addEventListener("ended",stop);

function play() {
    var file = URL.createObjectURL(audioUploader.files[0]);
    audioElement.src = file;
    audioElement.play();
    menu.style.display = "none";
    isPlaying = true;
}

function record(e) {
    if (isPlaying) {
        for (var i = 0; i < e.touches.length; i++) {
            chart += `"tag": ["${audioElement.currentTime}","${e.touches[i].pageX}","${e.touches[i].pageY}"],`;
            re(e[i]);
        }
    }
}

function re(a) {
    console.log(a);
    var element = document.createElement("div");
    element.className = "flower";
    element.setAttribute("style",`left: ${a.pageX};right: ${a.pageY})`);
    root.appendChild();
    window.setTimeout(() => {
        root.removeChild(element);
    });
}

function stop() {
    isPlaying = false;
    chart += "}";
    chart = chart.replaceAll(",}","}");
    var link = document.createElement("a");
    link.href = `data:application/json,${chart}`;
    link.download = "chart.json";
    link.style = "display: none;";
    menu.appendChild(link);
    link.click();
    menu.removeChild(link);
}