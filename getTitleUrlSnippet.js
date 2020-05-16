javascript: (() => {
    const titleUrlSnippet = document.title + '\n'
        + location.href + '\n'
        + '---\n'
        + window.getSelection().toString() + '\n'
        + '---\n';

    /* put target text into clipboard via temporary textarea */
    let tempTextarea = document.createElement('textarea');
    tempTextarea.textContent = titleUrlSnippet;

    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand('copy');
    bodyElement.removeChild(tempTextarea);

    alert(`The following text is now in clipboard:\n`
            + `======\n`
            + `${titleUrlSnippet}\n`
            + `======`);    
})();
