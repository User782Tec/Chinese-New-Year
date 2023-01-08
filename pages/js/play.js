var audio = document.getElementById("audio");
var chart = document.getElementById("chart")
var audioElement = document.getElementById("adelt");
var startButton = document.getElementById("start");
const fileReader = new FileReader();
var resultChart;

startButton.addEventListener("click",start);
fileReader.addEventListener("loadend",chartsLoaded);

function start() {
    loadCharts();
    loadAudio();
}

function loadCharts() {
    console.log("Loading charts...");
    fileReader.readAsText(chart.files[0]);
}

function chartsLoaded() {
    resultChart = fileReader.result;
    resultChart = JSON.parse(resultChart);
    console.log("Charts loaded!");
}

function loadAudio() {
    console.log("Loading audio...");
    audioElement.src = URL.createObjectURL(audio.files[0]);
    console.log("Audio loaded!");
}