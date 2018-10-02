javascript: (() => {
  // alert and exit if this program is executed out of ".salesforce.com/console"
  if (!/\.salesforce\.com\/console/.test(location.href)) {
    alert(`This program must be executed in ".salesforce.com/console".`);
    return;
  }
  console.log(`current url: ${location.href}`);

  // get sid (session id) from cookie
  var sid = document.cookie.match(/(^|;\s*)sid=(.+?)(;|$)/)[2];
  console.log(`sid: ${sid}`);
})();