(function() {
  var depth = (function() {
    var path = window.location.pathname;
    var parts = path.split('/').filter(Boolean);
    var htmlIndex = -1;
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].indexOf('.html') !== -1) { htmlIndex = i; break; }
    }
    if (htmlIndex === -1) return 0;
    var base = path.indexOf('/editorial/') !== -1 ? 'editorial' : parts[0];
    var baseIndex = parts.indexOf(base);
    return htmlIndex - baseIndex - 1;
  })();

  var prefix = '';
  for (var i = 0; i < depth; i++) prefix += '../';
  if (!prefix) prefix = './';

  var homeUrl = prefix.replace(/content\/.*/, '');
  if (homeUrl === './') homeUrl = '/';
  else if (depth > 0) {
    var count = depth;
    homeUrl = '';
    for (var j = 0; j <= count; j++) homeUrl += '../';
  }

  var nav = document.createElement('nav');
  nav.setAttribute('id', 'site-nav');
  nav.innerHTML =
    '<div style="max-width:780px;margin:0 auto;padding:12px 24px;display:flex;align-items:center;justify-content:space-between">' +
      '<a href="' + homeUrl + 'index.html" style="font-family:\'Source Serif 4\',Pretendard,sans-serif;font-size:0.95rem;font-weight:700;color:inherit;text-decoration:none;letter-spacing:-0.5px">' +
        'Editorial' +
      '</a>' +
      '<a href="' + homeUrl + 'index.html" style="font-family:\'Source Serif 4\',Pretendard,sans-serif;font-size:0.8rem;color:#8a8680;text-decoration:none">' +
        '\u2190 \ubaa9\ub85d\uc73c\ub85c' +
      '</a>' +
    '</div>';

  nav.style.cssText = 'border-bottom:1px solid #d5d0c8;background:#faf8f4;position:sticky;top:0;z-index:100';

  var body = document.body;
  if (body.firstChild) {
    body.insertBefore(nav, body.firstChild);
  } else {
    body.appendChild(nav);
  }
})();
