export default function makeAjaxRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.error('Error: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}