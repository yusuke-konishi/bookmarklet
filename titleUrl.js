javascript: (() => {
  let titleUrl = document.title;
  titleUrl += '\n';
  titleUrl += location.href;
  prompt(titleUrl, titleUrl);
})();