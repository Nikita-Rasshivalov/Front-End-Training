const calc = document.querySelector('.calc');
const result =  document.querySelector('.result');
const dotBtn = document.querySelector('.dot');
const back = document.querySelector('.back').innerText;
const JsonSender = document.querySelector('.JsonSender');
//Array for sending json
let JSonArray = [];

if (document.querySelector('input[name=calcType]')) {
    document.querySelectorAll('input[name=calcType]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        let item = event.target.value;
        let intNum  =  'Integer';
        dotBtn.style.pointerEvents = (item === intNum) ? 'none':'auto'
      });
    });
  }

// calculator functions processing
calc.addEventListener('click',(event)=>{
    let DoubleNum  =  'Double';
    //Get radio values
    let radioBtns = document.querySelector("input[name=calcType]:checked");
    let radioBtnsValue = radioBtns ? radioBtns.value : "";

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
                if( result.innerText != ''){
                    result.innerText = (radioBtnsValue == DoubleNum) ? math.evaluate(result.innerText) : Math.floor(math.evaluate(result.innerText));
                }
                break;
            case back:
                result.innerText = result.innerText.substring(0,result.innerText.length-1)
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
