javascript: (() => {
    /* exit if this program is executed out of "*.lightning.force.com/lightning" */
    if (!/\.lightning\.force\.com\/lightning/.test(location.href)) {
        alert(`This program must be executed in "*.lightning.force.com/lightning".\n\ncurrent url: ${location.href}`);
        return;
    }
    console.log(`current url: ${location.href}`);

    /* generate classic url with record id */
    const matchObject = location.href.match(/(.*lightning\.force\.com\/).*?(\w{18})\/view/);
    console.log(matchObject);

    const classicUrl = `${matchObject[1]}${matchObject[2]}?isdtp=vw`;
    console.log(`classic url: ${classicUrl}`);
    
    /* move to classic url */
    location.href = classicUrl;
})();
