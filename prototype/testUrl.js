javascript: (() => {
    /* alert and exit if this program is executed out of "*.salesforce.com/console" */
    if (!/\.salesforce\.com\/console/.test(location.href)) {
        alert(`This program can be executed only in "*.salesforce.com/console".\n\ncurrent url: ${location.href}`);
        return;
    }

    console.log(`current url: ${location.href}`);
})();