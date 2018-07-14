/*
var form = document.createElement('form');
form.setAttribute('action', '?');
form.setAttribute('method', 'POST');

var input = document.createElement('input');
input.setAttribute('type', 'submit');
input.setAttribute('value', 'Submit');

var br = document.createElement('br');

var captcha = document.createElement('div');
captcha.setAttribute('class', 'g-recaptcha');
captcha.setAttribute('data-sitekey', '6LcoMGQUAAAAACPnczV6qJUNH--uka7D3z80_Y5R');

form.appendChild(captcha);
form.appendChild(br);
form.appendChild(input);

script = document.createElement('script');
script.async = true;
script.defer = true;
script.src="https://www.google.com/recaptcha/api.js";

document.getElementsByTagName('head')[0].appendChild(script);
document.body.appendChild(form);
*/

var f = document.createElement('iframe');
f.src = chrome.extension.getURL('popup.html');
f.style = 'position:absolute; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;';

document.body.appendChild(f);
