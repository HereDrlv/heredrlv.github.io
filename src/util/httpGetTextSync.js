const XHR = new XMLHttpRequest();
function httpGetTextSync(url) {
    XHR.open("GET",url, false);
    XHR.send();
    return XHR.responseText;
}
export default httpGetTextSync;