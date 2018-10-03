javascript: (() => {
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

  // load Salesforce Console Integration Toolkit
  // https://developer.salesforce.com/docs/atlas.en-us.214.0.api_console.meta/api_console/sforce_api_console_connecting.htm
  loadJs('/support/console/43.0/integration.js', () => {
    console.log(`integration.js is loaded`);
  });
})();