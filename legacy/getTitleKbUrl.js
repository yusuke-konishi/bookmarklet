javascript: (() => {
    const titleKbUrl = document.title + '\n'
        + `https://portal.nutanix.com/kb/` + window.getSelection().toString().slice(-4);
    prompt(titleKbUrl, titleKbUrl);
})();