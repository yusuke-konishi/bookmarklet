javascript: (() => {
    /* exit if this program is executed out of play.google.com/store/apps/details */
    const matchObject = location.href.match(/play\.google\.com\/store\/apps\/details/);
    console.log(matchObject);

    if (!matchObject) {
        alert(`This program must be executed in play.google.com/store/apps/details.\n\ncurrent url: ${location.href}`);
        throw new Error('Your operation was canceled.');
    }
    console.log(`current url: ${location.href}`);
})();
