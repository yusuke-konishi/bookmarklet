javascript: (() => {
  let titleUrl = document.getElementsByTagName('title')[0].textContent;
  titleUrl += '\n';
  titleUrl += location.href;
  prompt(titleUrl, titleUrl);
})();