var baseUrl = (window.location.port === '4100') ? 'http://localhost:3000' : ['4200'].includes(window.location.port) ? `http://localhost:${window.location.port}` : 'https://www.juncture-digital.io';
document.write(`<link rel="stylesheet" href="${baseUrl}/css/juncture.css">`);
const ghbase = document.currentScript.dataset.ghbase;
let selector = document.currentScript.dataset.selector;

if (!selector) { // infer selector if not provided
  let parentElement = document.currentScript?.parentElement
  console.log(parentElement)
  if (parentElement?.id) selector = `#${parentElement.id}`;
  else if (parentElement?.className) {
    const classes = parentElement.className.trim().split(/\s+/).join('.');
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
    document.write(scriptEl)
    added = true;
  }
}
if (document.readyState !== 'loading') addScript();
else document.addEventListener('readystatechange', () => { addScript() });