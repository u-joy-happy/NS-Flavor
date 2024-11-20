const markers = [
    { marker: document.getElementById("marker1"), info: document.getElementById("marker1-info") },
    { marker: document.getElementById("marker2"), info: document.getElementById("marker2-info") },
    { marker: document.getElementById("marker3"), info: document.getElementById("marker3-info") },
    { marker: document.getElementById("marker4"), info: document.getElementById("marker4-info") },
    { marker: document.getElementById("marker5"), info: document.getElementById("marker5-info") },
    { marker: document.getElementById("marker6"), info: document.getElementById("marker6-info") },
    { marker: document.getElementById("marker7"), info: document.getElementById("marker7-info") },
    { marker: document.getElementById("marker8"), info: document.getElementById("marker8-info") },
    { marker: document.getElementById("marker9"), info: document.getElementById("marker9-info") },
    { marker: document.getElementById("marker10"), info: document.getElementById("marker10-info") },
    { marker: document.getElementById("marker11"), info: document.getElementById("marker11-info") },
    { marker: document.getElementById("marker12"), info: document.getElementById("marker12-info") },
    { marker: document.getElementById("marker13"), info: document.getElementById("marker13-info") },
    { marker: document.getElementById("marker14"), info: document.getElementById("marker14-info") },
    { marker: document.getElementById("marker15"), info: document.getElementById("marker15-info") },
];

function hideAllInfos() {
    markers.forEach(({ info }) => {
        info.style.display = "none";
    });
}

markers.forEach(({ marker, info }) => {
    marker.addEventListener("click", (event) => {
        hideAllInfos();
        info.style.display = "block";
        event.stopPropagation();
    });
});

body.addEventListener("click", () => {
    hideAllInfos();
});
