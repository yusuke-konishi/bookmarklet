javascript: (() => {
    /* alert and exit if this program is executed out of ".salesforce.com/console" */
    if (!/\.salesforce\.com\/console/.test(location.href)) {
        alert(`This program must be executed in ".salesforce.com/console".\n\ncurrent url: ${location.href}`);
        return;
    }
    console.log(`current url: ${location.href}`);

    /* create <script> element and load Salesforce Console Integration Toolkit */
    /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_connecting.htm */
    let script = document.createElement('script');
    script.src = '/support/console/43.0/integration.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    /* callback function executed when the <script> element is loaded */
    script.onload = () => {
        let primaryTabId;

        /* get primary tab id by getFocusedPrimaryTabId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabid.htm */
        sforce.console.getFocusedPrimaryTabId((result) => {
            primaryTabId = result.id;
        });
        console.log(`primary tab id: ${primaryTabId}`);

        /* refresh primary tab by refreshPrimaryTabById() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_refreshprimarytabbyid.htm */
        sforce.console.refreshPrimaryTabById(primaryTabId, true);
    };
})();