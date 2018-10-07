// javascript: (() => {
(() => {
  // alert and exit if this program is executed out of ".salesforce.com/console"
  if (!/\.salesforce\.com\/console/.test(location.href)) {
    alert(`This program must be executed in ".salesforce.com/console".`);
    return;
  }
  console.log(`current url: ${location.href}`);

  // get sid (session id) from cookie
  var sid = document.cookie.match(/(^|;\s*)sid=(.+?)(;|$)/)[2];
  console.log(`session id: ${sid}`);

  // define function to load external JavaScript file and set callback
  function loadJs(jsUrl, callback) {
    var script = document.createElement('script');
    script.src = jsUrl;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    script.onload = () => {
      callback();
    };
  }

  var caseRecordId;
  var primaryTabId;

  // load Salesforce Console Integration Toolkit
  // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_connecting.htm
  loadJs('/support/console/43.0/integration.js', () => {
    console.log(`integration.js is loaded`);

    // get object (case) record id of the primary tab by getFocusedPrimaryTabObjectId()
    // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabobjectid.htm
    sforce.console.getFocusedPrimaryTabObjectId((result) => {
      caseRecordId = result.id;
    });
    console.log('case record id: ' + caseRecordId);

    // get primary tab id by getFocusedPrimaryTabId()
    // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabid.htm
    sforce.console.getFocusedPrimaryTabId((result) => {
      primaryTabId = result.id;
    });
    console.log('primary tab id: ' + primaryTabId);

    // refresh primary tab by refreshPrimaryTabById()
    // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_refreshprimarytabbyid.htm
    sforce.console.refreshPrimaryTabById(primaryTabId, true);
  });
})();