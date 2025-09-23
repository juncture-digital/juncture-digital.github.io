const me = document.currentScript
const parentNode = me?.parentNode
var baseUrl = (window.location.port === '4100') ? 'http://localhost:3000' : ['4200'].includes(window.location.port) ? `http://localhost:${window.location.port}` : 'https://www.juncture-digital.io';
const ghbase = document.currentScript.dataset.ghbase;
let selector = document.currentScript.dataset.selector;
if (!selector) { // infer selector if not provided
  if (parentNode?.id) selector = `#${parentNode.id}`;
  else if (parentNode?.className) selector = `.${parentNode.className.trim().split(/\s+/).join('.')}`;
}
let added = false;
const addTags = () => {
  if (!added) { 
    const styleEl = Object.assign(document.createElement('link'), { href: `${baseUrl}/css/juncture.css`, rel: 'stylesheet' } );
    const scriptEl = Object.assign(document.createElement('script'), { id: 'junctureScript', src: `${baseUrl}/js/index.js`, type: 'module' } );
    if (ghbase) scriptEl.dataset.ghbase = ghbase;
    if (selector) scriptEl.dataset.selector = selector;
    
    parentNode.insertBefore(styleEl, me.nextSibling);
    parentNode.insertBefore(scriptEl, styleEl);

    added = true
  }
}
if (document.readyState !== 'loading') addTags();
else document.addEventListener('readystatechange', () => { addTags() });