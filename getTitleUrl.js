javascript: (() => {
    const titleUrl = document.title + '\n' + location.href;
    prompt(titleUrl, titleUrl);
})();