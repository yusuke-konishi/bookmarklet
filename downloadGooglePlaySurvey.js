javascript: (() => {
    /* exit if this program is executed out of play.google.com/store/apps/details */
    const url = location.href;
    const matchObject = url.match(/play\.google\.com\/store\/apps\/details\?id=(.+?)(&|$)/);
    console.log(matchObject);

    if (!matchObject) {
        alert(`This program must be executed in play.google.com/store/apps/details.\n\ncurrent url: ${url}`);
        throw new Error('Your operation was canceled.');
    }
    console.log(`current url: ${url}`);

    /* get app id information */
    const appId = matchObject[1];
    console.log(`app id: ${appId}`);
})();
