const url = 'http://localhost:3000/api/';

function sendRequest(endPoint, method, data) {
    let request = new XMLHttpRequest();
    request.open(method, url+endPoint);  
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');  
    request.send(data ? JSON.stringify(data) : null);
    return request;
}
