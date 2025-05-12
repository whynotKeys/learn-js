const ua = document.querySelector('#user-agent');
const lang = document.querySelector('#language');
const platform = document.querySelector('#platform');
const isOnline = document.querySelector('#online-status');

if(ua) {
   ua.textContent = window.navigator.userAgent;
}
if(lang) {
  lang.textContent = navigator.language;
}
if(platform) {
  platform.textContent = (navigator as any).userAgentData.platform;
}
if(isOnline) {
  isOnline.textContent = navigator.onLine ? '온라인' : '오프라인';
}

console.log(navigator);