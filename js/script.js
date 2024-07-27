function function_abstract() {
    var x = document.getElementById("abstract");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";
        x.style.setProperty('justify-content', 'center');
        x.style.setProperty('align-items', 'center');
    } else {
        x.style.display = "none";
    }
}