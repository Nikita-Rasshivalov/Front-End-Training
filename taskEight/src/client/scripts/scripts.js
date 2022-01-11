//class of event
class Event {
    constructor(eventDate, eventTime, eventName, importance, discription) {
        this.eventDate = eventDate,
            this.eventTime = eventTime,
            this.eventName = eventName,
            this.importance = importance,
            this.discription = discription
    }
}
//variables
const requestUrl_fieldOne =  "data/rasshivalov_data1.json";
const requestUrl_fieldTwo = "data/rasshivalov_data2.json";
const requestUrl_fieldThree = "data/rasshivalov_data3.json";

const fieldOne = document.querySelector(".fieldOne");
const fieldTwo = document.querySelector(".fieldTwo");
const fieldThree = document.querySelector(".fieldThree");
const fieldFour = document.querySelector(".fieldFour");

const statusFieldOne = document.querySelector(".statusFieldOne");
const statusFieldTwo = document.querySelector(".statusFieldTwo");
const statusFieldThree = document.querySelector(".statusFieldThree");
const uploadFile = document.querySelector('.uploadSelect');

const inputDate = document.querySelector("input[name=eventDate]");
const inputTime = document.querySelector("input[name=eventTime]");
const inputName = document.querySelector("input[name=eventName]");
const inputImportance = document.querySelector("select[name=importance]");
const inputDiscription = document.querySelector("input[name=discription]");

window.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    printFieldOne(1000);
    printFieldTwo(2000);
    printFieldThree(3000);
});

/**
 * Send request.
 * @param {method} method
 * @param {url} url
 * @param {body} body
 */
async function sendRequest(method, url, body = null) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    let response;
    if (method === "PUT") {
        response = await fetch("http://localhost:5600/api", {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        })
    } else {
        response = await fetch(url);
    }
    const data = await response.json();
    if (response.ok) return ({ status: response.status,statusText:response.statusText, url: response.url, body: data});

}

/**
 * Out information.
 * @param {field} field
 * @param {statusField} statusField
 * @param {data} data
 */
function outInfo(field, statusField, data,counter = null) {
    let body = data.body;
    field.innerHTML = `
    event date: ${body.eventDate};  
    event time: ${body.eventTime} min; 
    event name: ${body.eventName}; 
    importance: ${body.importance};  
    discription: ${body.discription};
    updating: ${counter/1000} seconds;`
    statusField.innerHTML = `status: ${data.status} ${data.statusText}; url:${data.url}; counter:${counter/1000} seconds`;
}
/**
 * Display information for field one
 * @param {from} time
 */
function printFieldOne(from) {
    let current = from;
    setTimeout(function go() {
        sendRequest('GET', requestUrl_fieldOne)
            .then(
                data => {
                    outInfo(fieldOne, statusFieldOne, data,current);
                    setTimeout(go, current);
                })
            .catch(err => console.log(err));
        current += 2000;
    }, 3000);
}
/**
 * Display information for field two
 * @param {from} time
 */
function printFieldTwo(from) {
    let current = from;
    setTimeout(function go() {
        sendRequest('GET', requestUrl_fieldTwo)
            .then(
                data => {
                    outInfo(fieldTwo, statusFieldTwo, data,current);
                    setTimeout(go, current);
                })
            .catch(err => console.log(err));
        current += 2000;
    }, 4000);
}

/**
 * Display information for field three
 * @param {from} time
 */
function printFieldThree(from) {
    let current = from;
    setTimeout(function go() {
        sendRequest('GET', requestUrl_fieldThree)
            .then(
                data => {
                    outInfo(fieldThree, statusFieldThree, data,current);
                    setTimeout(go, current);
                })
            .catch(err => console.log(err));
        current += 2000;
    }, 5000);
}

/**
 * Display information
 * @param {data} data
 */
function outInputInfo(data) {
    inputDate.value = data.eventDate;
    inputTime.value = data.eventTime;
    inputName.value = data.eventName;
    inputImportance.value = data.importance;
    inputDiscription.value = data.discription;
}

uploadFile.addEventListener('change', () => {
    switch (uploadFile.value) {
        case "rasshivalov_data1.json":
            sendRequest('GET', requestUrl_fieldOne)
                .then(
                    data => {
                        outInputInfo(data.body);
                    })
                .catch(err => console.log(err));
            break;
        case "rasshivalov_data2.json":
            sendRequest('GET', requestUrl_fieldTwo)
                .then(
                    data => {
                        outInputInfo(data.body);
                    })
                .catch(err => console.log(err));
            break;
        case "rasshivalov_data3.json":
            sendRequest('GET', requestUrl_fieldThree)
                .then(
                    data => {
                        outInputInfo(data.body);
                    })
                .catch(err => console.log(err));
            break;
        default:
            console.log("selection error");
            break;
    }
});
//send request to server
let form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let fd = new FormData(form);
    let obj = {};
    obj.objFile = document.querySelector(".uploadSelect").value
    fd.forEach((value, key) => {
        obj[key] = value;
    });
    sendRequest('PUT', requestUrl_fieldOne, obj)
        .then(data => console.log(data))
        .catch(err => console.log(err))
});