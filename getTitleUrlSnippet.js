javascript: (() => {
    const titleUrlSnippet = document.title + '\n'
        + location.href + '\n'
        + '```\n'
        + window.getSelection().toString() + '\n'
        + '```\n';
    prompt(titleUrlSnippet, titleUrlSnippet);
})();