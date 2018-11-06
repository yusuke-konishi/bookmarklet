javascript: (() => {
    let anchor = document.createElement('a');
    anchor.href = `mailto:to1@sample.com, to2@sample.com`
        + `?subject=件名`
        + `&body=本文`
        + `&cc=cc1@sample.com, cc2@sample.com`
        + `&bcc=bcc1@sample.com, bcc2@sample.com`;

    anchor.click();
})();