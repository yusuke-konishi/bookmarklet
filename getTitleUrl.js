javascript: (() => {
    const titleUrl = document.title + '\n' + location.href;

    /* put target text into clipboard via temporary textarea */
    let tempTextarea = document.createElement('textarea');
    tempTextarea.textContent = titleUrl;

    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand('copy');
    bodyElement.removeChild(tempTextarea);

    alert(`The following text is now in clipboard:\n`
          + `---\n`
          + `${titleUrl}\n`
          + `---`);
})();
