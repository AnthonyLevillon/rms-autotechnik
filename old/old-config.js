var script = document.createElement('script');
script.onload = function () {
  loadRmsOlsxWidget();
};
script.src = window.RMS_PLUGIN_URL + 'js/2.fea4e980.chunk.js';
document.body.appendChild(script);

var script = document.createElement('script');
script.onload = function () {
  loadRmsOlsxWidget();
};
script.src = window.RMS_PLUGIN_URL + 'js/main.3207bfbe.chunk.js';
document.body.appendChild(script);

var script = document.createElement('script');
script.onload = function () {
  loadRmsOlsxWidget();
};
script.src = window.RMS_PLUGIN_URL + 'js/runtime-main.9b8ae0dc.js';
document.body.appendChild(script);
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', window.RMS_PLUGIN_URL + 'css/2.37db07da.chunk.css');
document.head.appendChild(link);var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', window.RMS_PLUGIN_URL + 'css/main.16fe708d.chunk.css');
document.head.appendChild(link);
var fileLoaded = 0;
function loadRmsOlsxWidget(){
fileLoaded += 1;
if(fileLoaded === 3){
  if (typeof window.RmsOlsxWidget !== 'undefined') {
    window.RmsOlsxWidget.mount(document.getElementById('rms-olsx-widget'));
  } else {
    throw new Error('RMS OLSX widget not loaded');
  }
}
}