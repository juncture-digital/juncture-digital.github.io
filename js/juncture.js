var baseUrl = (window.location.port === '4100') ? 'http://localhost:3000' : ['4200'].includes(window.location.port) ? `http://localhost:${window.location.port}` : 'https://www.juncture-digital.io';
document.write(`<link rel="stylesheet" href="${baseUrl}/css/juncture.css">`);
const ghbase = document.currentScript.dataset.ghbase || '{{site.github.owner_name}}/{{site.github.repository_name}}/{{site.github.source.branch}}/{{page.path}}';
const selector = document.currentScript.dataset.selector;
console.log(`ghbase=${ghbase} selector=#${selector}`)
let added = false;
const addScript = () => {
  if (!added) { 
    const scriptEl = Object.assign(document.createElement('script'), { id: 'junctureScript', src: `${baseUrl}/js/index.js`, type: 'module' } );
    if (ghbase) scriptEl.dataset.ghbase = ghbase;
    if (selector) scriptEl.dataset.selector = selector;
    document.body.appendChild(scriptEl);
    added = true;
  }
}
if (document.readyState !== 'loading') addScript();
else document.addEventListener('readystatechange', () => { addScript() });