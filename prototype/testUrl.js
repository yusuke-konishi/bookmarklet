javascript: (() => {
  // alert and exit if this program is executed out of ".salesforce.com/console"
  if (!/\.salesforce\.com\/console/.test(location.href)) {
    alert(`This program must be executed in ".salesforce.com/console".`);
    return;
  }

  console.log(`This program is being executed in ".salesforce.com/console".`);
})();