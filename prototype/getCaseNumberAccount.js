javascript: (() => {
    /* alert and exit if this program is executed out of "*.salesforce.com/console" */
    if (!/\.salesforce\.com\/console/.test(location.href)) {
        alert(`This program can be executed only in "*.salesforce.com/console".\n\ncurrent url: ${location.href}`);
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

    /* load Salesforce Console Integration Toolkit */
    /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_connecting.htm */
    loadJs('/support/console/43.0/integration.js', () => {
        let primaryTabObjectId;

        /* get primary tab object id by getFocusedPrimaryTabObjectId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabobjectid.htm */
        sforce.console.getFocusedPrimaryTabObjectId((result) => {
            primaryTabObjectId = result.id;
        });
        console.log(`primary tab object id: ${primaryTabObjectId}`);

        /* alert and exit if the primary tab object id is not 500* (Case object id) */
        /* https://help.salesforce.com/articleView?id=000005995&language=en_us&type=1 */
        if (!/^500/.test(primaryTabObjectId)) {
            alert(`This program can be executed only when the primary tab is showing Case object (Case object id is 500*).\n\nprimary tab object id: ${primaryTabObjectId}`);
            return;
        }

        /* load Salesforce AJAX Toolkit */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.ajax.meta/ajax/sforce_api_ajax_connecting.htm */
        loadJs('/soap/ajax/43.0/connection.js', () => {
            /* get sid (session id) from cookie */
            sforce.connection.sessionId = document.cookie.match(/(^|;\s*)sid=(.+?)(;|$)/)[2];

            /* get Case Number, Account Name from primary tab */
            const queryString = `SELECT CaseNumber, Account.Name FROM Case WHERE Id = '${primaryTabObjectId}'`;
            const queryResult = sforce.connection.query(queryString);
            const records = queryResult.getArray('records');
            const caseNumberAccount = `${records[0].CaseNumber}_${records[0].Account.Name}.txt`;

            prompt(caseNumberAccount, caseNumberAccount);
        });
    });
})();