javascript: (() => {
    /* exit if this program is executed out of "*.lightning.force.com" */
    const matchObject = location.href.match(/(.*\.lightning\.force\.com\/).*?(\w{18})\/view/);
    console.log(matchObject);

    if (!matchObject) {
        alert(`This program must be executed in "*.lightning.force.com".\n\ncurrent url: ${location.href}`);
        throw new Error('Your operation was canceled.');
    }
    console.log(`current url: ${location.href}`);

    /* move to classic url with record id */
    const classicUrl = `${matchObject[1]}${matchObject[2]}?isdtp=vw`;
    console.log(`classic url: ${classicUrl}`);
    
    location.href = classicUrl;
})();
