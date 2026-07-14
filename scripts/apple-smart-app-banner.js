const SMART_APP_BANNER =
  '<meta name="apple-itunes-app" content="app-id=1492536111">';

hexo.extend.filter.register('after_render:html', (html, data) => {
  if (!data.path?.startsWith('JR-shikoku-Apps-Common/')) return html;

  return html.replace('</head>', `  ${SMART_APP_BANNER}\n</head>`);
});
