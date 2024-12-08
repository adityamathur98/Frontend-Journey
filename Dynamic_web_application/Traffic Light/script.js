let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");

function changeBg(sectioId) {
  if (sectioId === "stopButton") {
    document.getElementById(sectioId).style.backgroundColor = "#cf1124";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#cf1124";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";
  } else if (sectioId === "readyButton") {
    document.getElementById(sectioId).style.backgroundColor = "#f7c948";
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";
    readyLightEl.style.backgroundColor = "#f7c948";
    stopLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";
  } else {
    document.getElementById(sectioId).style.backgroundColor = "#199473";
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#199473";
    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "#4b5069";
  }
}
