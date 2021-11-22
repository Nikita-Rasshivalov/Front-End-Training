const calc = document.querySelector('.calc');
const result =  document.querySelector('.result');
const back = document.querySelector('.back').innerText;
const JsonSender = document.querySelector('.JsonSender');

let JSonArray = [];

// calculator functions processing
calc.addEventListener('click',(event)=>{

    if(!event.target.classList.contains('item__btn')) return

    const value = event.target.innerText; 
    try {
        switch(value){
            case 'AC':
                result.innerText = '';
                break;
            case '=':
                if(result.innerText.search(/[^0-9*/+-.()]/mi) != -1) return
                JSonArray.push(result.innerText);
                result.innerText = eval(result.innerText).toFixed(1);
                break;
            case back:
                result.innerText = result.innerText.substring(0,result.innerText.length-1)
                break;
            case JsonSender:
                sendJson(JSonArray);
                break;
            default:
                result.innerText += value;
        }
      } catch(err) {
            result.innerText = '';
      }
});


//Json sender
JsonSender.addEventListener('click',(event)=>{
    const jsn = JsonSender.innerText ;
    if(!event.target.classList.contains('JsonSender')) return
    const value = event.target.innerText; 
    try {
        switch(value){
            case jsn:
                sendJson(JSonArray);
                break;
            default:
                console.log("Json not sended")  
        }
      } catch(err) {
            console.log(err)
      }
});

// Send json
let sendJson = (arr)=>{
    let jsonArray = JSON.parse(JSON.stringify(arr));
    let xhr = new XMLHttpRequest();
    let url = "url";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    let data = JSON.stringify({expression:jsonArray });
    xhr.send(data);
}
