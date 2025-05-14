var baseUrl = (window.location.port === '4100') ? 'http://localhost:3000' : 'https://www.juncture-digital.io';
document.write('<link rel="stylesheet" href="https://www.juncture-digital.io/css/index.css">');
const addScript = () => {
    if (document.readyState === 'interactive') { 
        document.body.style.opacity = 0;
        const scriptEl = Object.assign(document.createElement('script'), { id: 'junctureScript', src: `${baseUrl}/js/index.js`, type: 'module' } );
        scriptEl.dataset.ghbase = document.getElementById('loader').dataset.ghbase;
        document.body.appendChild(scriptEl);
    }
}
if (document.readyState === 'interactive') addScript();
else document.addEventListener('readystatechange', () => { addScript() });
