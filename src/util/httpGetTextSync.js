const XHR = new XMLHttpRequest();
const BASE = '/docs';
function httpGetTextSync(url) {
    XHR.open(`GET`,`${BASE}/${url}`, false);
    XHR.send();
    return XHR.responseText;
}
export default httpGetTextSync;