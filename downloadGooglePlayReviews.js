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

    /* get review details split by semi-colon */
    let reviewLines = 'Username;Star;Date;Helpful;Review\n';
    let username;
    let star;
    let date;
    let helpful;
    let review;

    for (i = 0; i < reviewList.length; i++) {
        username = reviewList[i].querySelector('span[class="X43Kjb"]').innerText.trim();

        star = reviewList[i].querySelector('div[class="pf5lIe"] > div').getAttribute('aria-label').trim();
        star = star.match(/(\d)\/5/)[1];

        date = reviewList[i].querySelector('span[class="p2TkOb"]').innerText.trim();

        helpful = reviewList[i].querySelector('div[class="jUL89d y92BAb"]').innerText.trim();

        review = reviewList[i].querySelector('span[jsname="fbQN7e"]').innerText.trim();
        if (review === '') {
            review = reviewList[i].querySelector('span[jsname="bN97Pc"]').innerText.trim();
        }

        reviewLines += `${username};${star};${date};${helpful};${review}\n`;
    }
    console.log(reviewLines);

    /* open download dialog with review lines */
    const filename = `GooglePlayReviews.txt`;

    let anchor = document.createElement('a');
    anchor.href = `data:text/plain,${encodeURIComponent(reviewLines)}`;
    anchor.download = filename;

    anchor.click();
})();
