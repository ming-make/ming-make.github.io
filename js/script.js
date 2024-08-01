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

// function function_bibtex() {
//     var x = document.getElementById("bibtex");
//     if (window.getComputedStyle(x).display === "none") {
//         x.style.display = "flex";
//         x.style.setProperty('flex-direction', 'column');
//         x.style.setProperty('justify-content', 'center');
//         x.style.setProperty('align-items', 'center');
//     } else {
//         x.style.display = "none";
//     }
// }