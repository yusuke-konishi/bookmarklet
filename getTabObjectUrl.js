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
        let primaryTabId;
        let subtabId;
        let primaryTabObjectId;
        let subtabObjectId;
        let pageInfo;

        /* get primary tab id by getFocusedPrimaryTabId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabid.htm */
        sforce.console.getFocusedPrimaryTabId((result) => {
            primaryTabId = result.id;
        });
        console.log(`primary tab id: ${primaryTabId}`);

        /* get subtab id by getFocusedSubtabId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedsubtabid.htm */
        sforce.console.getFocusedSubtabId((result) => {
            subtabId = result.id;
        });
        console.log(`subtab id: ${subtabId}`);

        /* get primary tab object id by getFocusedPrimaryTabObjectId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabobjectid.htm */
        sforce.console.getFocusedPrimaryTabObjectId((result) => {
            primaryTabObjectId = result.id;
        });
        console.log(`primary tab object id: ${primaryTabObjectId}`);

        /* get subtab object id by getFocusedSubtabObjectId() */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedsubtabobjectid.htm */
        sforce.console.getFocusedSubtabObjectId((result) => {
            subtabObjectId = result.id;
        });
        console.log(`subtab object id: ${subtabObjectId}`);

        /* get page information from focused tab */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getpageinfo.htm */
        sforce.console.getPageInfo(subtabId, (result) => {
            pageInfo = result.pageInfo;
        });
        console.log(`page info: ${pageInfo}`);
        const jsonPageInfo = JSON.parse(pageInfo);

        /* prompt url if focused tab object does not have displayName */
        if (jsonPageInfo.displayName === undefined) {
            const objectUrl = jsonPageInfo.url;

            prompt(objectUrl, objectUrl);
            return;
        }

        /* prompt object name and url if focused tab does not show case */
        if (jsonPageInfo.displayName !== 'Case') {
            const objectNameUrl = `${jsonPageInfo.objectName}\n${jsonPageInfo.url}`;

            prompt(objectNameUrl, objectNameUrl);
            return;
        }

        /* load Salesforce AJAX Toolkit */
        /* https://developer.salesforce.com/docs/atlas.en-us.214.0.ajax.meta/ajax/sforce_api_ajax_connecting.htm */
        loadJs('/soap/ajax/43.0/connection.js', () => {
            /* get sid (session id) from cookie */
            sforce.connection.sessionId = document.cookie.match(/(^|;\s*)sid=(.+?)(;|$)/)[2];

            /* get Case Number, Subject, Case URL from focused tab */
            const queryString = `SELECT CaseNumber, Subject FROM Case WHERE Id = '${subtabObjectId}'`;
            const queryResult = sforce.connection.query(queryString);
            const records = queryResult.getArray('records');
            const caseNumberSubjectUrl = `${records[0].CaseNumber}: ${records[0].Subject}\n${jsonPageInfo.url}`;

            prompt(caseNumberSubjectUrl, caseNumberSubjectUrl);
        });
    });
})();