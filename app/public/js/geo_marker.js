const markers = [
    { marker: document.getElementById("marker1"), info: document.getElementById("marker1-info") },
    { marker: document.getElementById("marker2"), info: document.getElementById("marker2-info") },
    { marker: document.getElementById("marker3"), info: document.getElementById("marker3-info") },
    { marker: document.getElementById("marker4"), info: document.getElementById("marker4-info") },
    { marker: document.getElementById("marker5"), info: document.getElementById("marker5-info") }
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
