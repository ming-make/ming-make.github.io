function function_abstract(AbstractElementId) {
    var x = document.getElementById(AbstractElementId);
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";
        x.style.setProperty('justify-content', 'center');
        x.style.setProperty('align-items', 'center');
    } else {
        x.style.display = "none";
    }
}

function function_bibtex(BibtexElementId) {
    var x = document.getElementById(BibtexElementId);
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
        x.style.setProperty('flex-direction', 'column');
        x.style.setProperty('justify-content', 'center');
        x.style.setProperty('align-items', 'center');
    } else {
        x.style.display = "none";
    }
}

function scrollToSection(id) {
    var targetElement = document.getElementById(id);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
