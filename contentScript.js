var f = document.createElement('iframe');
f.src = chrome.extension.getURL('popup.html');
f.setAttribute('id', 'iframe');
f.style = 'position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;';
document.body.appendChild(f);
window.addEventListener('message', function(event) { 
  if (event.data === 'pass') {
    var frame = document.getElementById('iframe');
    frame.parentNode.removeChild(frame);
  }
}); 
