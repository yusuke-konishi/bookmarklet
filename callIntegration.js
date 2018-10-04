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
  };

  // define function to get object (case) record id of the primary tab by getFocusedPrimaryTabObjectId()
  // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabobjectid.htm
  function callGetFocusedPrimaryTabObjectId() {
    sforce.console.getFocusedPrimaryTabObjectId(showObjectId);
  }
  var showObjectId = function showObjectId(result) {
    var caseRecordId = result.id;
    console.log('case record id: ' + caseRecordId);
  };

  // define function to get id of the primary tab by getFocusedPrimaryTabId()
  // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_getfocusedprimarytabid.htm
  function callGetFocusedPrimaryTabId() {
    sforce.console.getFocusedPrimaryTabId(showTabId);
  }
  var showTabId = function showTabId(result) {
    var tabId = result.id
    console.log('tab id: ' + tabId);
  };

  // load Salesforce Console Integration Toolkit
  // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_connecting.htm
  loadJs('/support/console/43.0/integration.js', () => {
    console.log(`integration.js is loaded`);
    callGetFocusedPrimaryTabObjectId();
    callGetFocusedPrimaryTabId();
  });
})();