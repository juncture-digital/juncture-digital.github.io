const me = document.currentScript
const parentNode = me?.parentNode
console.log(parentNode)
var baseUrl = (window.location.port === '4100') ? 'http://localhost:3000' : ['4200'].includes(window.location.port) ? `http://localhost:${window.location.port}` : 'https://www.juncture-digital.io';
document.write(`<link rel="stylesheet" href="${baseUrl}/css/juncture.css">`);
const ghbase = document.currentScript.dataset.ghbase;
let selector = document.currentScript.dataset.selector;

if (!selector) { // infer selector if not provided
  if (parentNode?.id) selector = `#${parentNode.id}`;
  else if (parentNode?.className) {
    const classes = parentNode.className.trim().split(/\s+/).join('.');
    console.log(classes)
    selector += `.${classes}`;
  }
}
let added = false;
const addScript = () => {
  if (!added) { 
    const scriptEl = Object.assign(document.createElement('script'), { id: 'junctureScript', src: `${baseUrl}/js/index.js`, type: 'module' } );
    if (ghbase) scriptEl.dataset.ghbase = ghbase;
    if (selector) scriptEl.dataset.selector = selector;
    // document.body.appendChild(scriptEl);
    parentNode.insertBefore(scriptEl, me);
    /*
    let scriptTag = `<script id="junctureScript" src="${baseUrl}/js/index.js" type="module"`
    if (ghbase) scriptTag += ` data-ghbase="${ghbase}"`
    if (selector) scriptTag += ` data-selector="${selector}"`
    scriptTag += '></script>'
    document.write(scriptTag)
    added = true;
    */
  }
}
if (document.readyState !== 'loading') addScript();
else document.addEventListener('readystatechange', () => { addScript() });