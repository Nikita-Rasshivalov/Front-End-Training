//class of event
class Student {
    constructor(id, name, surname, age, speciality) {
        this.id = id,
            this.name = name,
            this.surname = surname,
            this.age = age,
            this.speciality = speciality
    }
}

//variables
const requestUrl = "http://localhost:3000/students";
const requestUrlChange = "http://localhost:3000/students/";
const id = document.querySelector("input[name=id]");
const firstName = document.querySelector("input[name=firstName]");
const secondName = document.querySelector("input[name=secondName]");
const age = document.querySelector("input[name=age]");
const speciality = document.querySelector("input[name=speciality]");
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")


window.addEventListener("DOMContentLoaded", () => {
    getStudents();
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
    switch (method) {
        case 'GET':
            response = await fetch(url);
            break;
        case 'DELETE':
            response = await fetch(url, {method:method});
            break;
        case 'PUT':
            response = await fetch(url, {
                method: method,
                body: JSON.stringify(body),
                headers: headers
            });
            break;
        case 'POST':
            response = await fetch(url, {
                method: method,
                body: JSON.stringify(body),
                headers: headers
            });
            break;
        default:
            break;
    }
    const data = await response.json();
    if (response.ok) return ({ status: response.status, statusText: response.statusText, url: response.url, body: data });

}
//Get Students
function getStudents() {
    sendRequest('GET', requestUrl)
        .then(
            data => {
                let currentCounter = 0;
                outInfo(data, currentCounter);
            })
        .catch(err => console.log(err));
}


/**
 * Out information.
 * @param {data} data
 * @param {currentCounter} currentCounter
 */

function outInfo(data, currentCounter) {
    let body = data.body;
    let clicked = false;
    if (!clicked) {
        outCurrentStud(body[currentCounter])
    }
    //get prev
    prevBtn.addEventListener('click', (event) => {
        event.preventDefault();
        currentCounter = (currentCounter === 0) ? body.length - 1 : currentCounter - 1;
        let currentStudent = body[currentCounter];
        outCurrentStud(currentStudent);
        clicked = true;
    });
    //get next
    nextBtn.addEventListener('click', (event) => {
        event.preventDefault();
        currentCounter = (currentCounter === body.length - 1) ? 0 : currentCounter + 1;
        let currentStudent = body[currentCounter];
        outCurrentStud(currentStudent);
        clicked = true;
    });
}

/**
 * Out information for current student
 * @param {currentStudent} currentStudent
 */
function outCurrentStud(currentStudent) {
    id.value = currentStudent.id;
    firstName.value = currentStudent.firstName;
    secondName.value = currentStudent.secondName;
    age.value = currentStudent.age;
    speciality.value = currentStudent.speciality;
}

//edit student
let form = document.querySelector("form");
document.querySelector(".editBtn").addEventListener('click', (event) => {
    event.preventDefault();
    let fd = new FormData(form);
    let obj = {};
    fd.forEach((value, key) => {
        obj[key] = value;
    });
    sendRequest('PUT', requestUrlChange + id.value, obj)
        .then(data => alert("Object with id:" + data.body.id + " has been updated"))
        .catch(err => alert("Incorrect id"))
});

//insert data
document.querySelector(".insBtn").addEventListener('click', (event) => {
    event.preventDefault();
    let fd = new FormData(form);
    let obj = {};
    fd.forEach((value, key) => {
        obj[key] = value;
    });
    obj.id = uuidv4();
    sendRequest('POST', requestUrl, obj)
        .then(data => alert("Object with id:" + data.body.id + " has been added"))
        .catch(err => alert("Incorrect id"))
});


//delete data
document.querySelector(".delBtn").addEventListener('click', (event) => {
    event.preventDefault();
    sendRequest('DELETE', requestUrlChange + id.value)
        .then(data => alert("Object with id:" + id.value + " has been deleted"))
        .catch(err => alert(err))
});

//create uuid for id
function uuidv4() {
    return ([1e7] + -1e3 + -4e3).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(15)
    );
}