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

    /* get review list */
    const reviewList = document.querySelectorAll('div[jsname="fk8dgd"] > div');

    /* get review details for 11 samples */
    for (i = 0; i < 11; i++) {
        console.log(`--- user ${i} ---`);

        const userName = reviewList[i].querySelector('span[class="X43Kjb"]').innerText.trim();
        console.log(`user name: ${userName}`);

        let star = reviewList[i].querySelector('div[class="pf5lIe"] > div').getAttribute('aria-label').trim();
        star = star.match(/(\d)\/5/)[1];
        console.log(`star: ${star}`);

        const date = reviewList[i].querySelector('span[class="p2TkOb"]').innerText.trim();
        console.log(`date: ${date}`);

        const helpful = reviewList[i].querySelector('div[class="jUL89d y92BAb"]').innerText.trim();
        console.log(`helpful: ${helpful}`);

        let review = reviewList[i].querySelector('span[jsname="fbQN7e"]').innerText.trim();
        if (review === '') {
            review = reviewList[i].querySelector('span[jsname="bN97Pc"]').innerText.trim();
        }
        console.log(`review: ${review}`);
    }
})();
