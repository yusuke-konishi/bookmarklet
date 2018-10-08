javascript: (() => {
    /* alert and exit if this program is executed out of "*.salesforce.com/console" */
    if (!/\.salesforce\.com\/console/.test(location.href)) {
        alert(`This program must be executed in "*.salesforce.com/console".\n\ncurrent url: ${location.href}`);
        return;
    }
    console.log(`current url: ${location.href}`);

    /* define function to load external JavaScript file and set callback for onload */
    function loadJs(jsUrl, callback) {
        let script = document.createElement('script');
        script.src = jsUrl;
        script.type = 'text/javascript';
        document.head.appendChild(script);

        script.onload = () => {
            callback();
        };
    };

    let primaryTabObjectId;
    let primaryTabId;

    /* load Salesforce Console Integration Toolkit */
    /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_connecting.htm */
    loadJs('/support/console/43.0/integration.js', () => {
        /* get primary tab object id by getFocusedPrimaryTabObjectId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabobjectid.htm */
        sforce.console.getFocusedPrimaryTabObjectId((result) => {
            primaryTabObjectId = result.id;
        });
        console.log(`primary tab object id: ${primaryTabObjectId}`);

        /* alert and exit if the primary tab object id is not 500* (Case object id) */
        /* https://help.salesforce.com/articleView?id=000005995&language=en_us&type=1 */
        if (!/^500/.test(primaryTabObjectId)) {
            alert(`This program can be executed when the primary tab is showing Case object (Case object id is 500*).\n\nprimary tab object id: ${primaryTabObjectId}`);
            return;
        }

        /* get primary tab id by getFocusedPrimaryTabId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabid.htm */
        sforce.console.getFocusedPrimaryTabId((result) => {
            primaryTabId = result.id;
        });
        console.log(`primary tab id: ${primaryTabId}`);
    });
})();