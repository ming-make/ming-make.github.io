function includeHTMLContent(sourceFile, sourceDivId, targetDivId) {
    fetch(sourceFile)
        .then(response => response.text())
        .then(data => {
            // Create a temporary DOM element to parse the fetched HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Extract the content of the sourceDiv
            const sourceContent = tempDiv.querySelector(`#${sourceDivId}`).innerHTML;

            // Insert the content into targetDiv
            document.querySelector(`#${targetDivId}`).innerHTML = sourceContent;
        })
        .catch(error => console.error('Error fetching the source HTML:', error));
}

function bibtexCopy(BibtexPre) {
    var content = document.getElementById(BibtexPre).innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => { console.log('Text copied to clipboard...') })
        .catch(err => {
            console.log('Something went wrong', err);
        })
}