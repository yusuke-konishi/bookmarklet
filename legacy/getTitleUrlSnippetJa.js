javascript: (() => {
    const titleUrlSnippet = '<ご参考情報>\n'
        + document.title + '\n'
        + location.href + '\n'
        + '\n'
        + '<抜粋>\n'
        + '```\n'
        + window.getSelection().toString() + '\n'
        + '```\n';
    prompt(titleUrlSnippet, titleUrlSnippet);
})();