javascript: (() => {
  // test if this bookmarklet is being run in "*.salesforce.com/console"
  if (!/\.salesforce\.com\/console/.test(location.href)) {
    alert(`This bookmarklet must be run in "*.salesforce.com/console".`);
  } else {
    console.log(`This bookmarklet is being run in "*.salesforce.com/console".`);
  }
})();