//Constants
const calc = document.querySelector(".calc");
const result = document.querySelector(".result");
const dotBtn = document.querySelector(".dot");
const back = document.querySelector(".back").innerText;
const jsonSender = document.querySelector(".JsonSender");
const priority = document.querySelector("#priority");
//Flag for checkbox
let flag = true;
//Array for sending json
let JSonArray = [];
//Check radio btn
if (document.querySelector("input[name=calcType]")) {
	document.querySelectorAll("input[name=calcType]").forEach((elem) => {
		elem.addEventListener("change", (event) => {
			let item = event.target.value;
			let intNum = "Integer";
			dotBtn.style.pointerEvents = item === intNum ? "none" : "auto";
			result.innerText = "";
		});
	});
}
//Check checkbox
priority.addEventListener("change", () => {
	if (!this.checked) flag = false;
	result.innerText = "";
});

// calculator functions processing
calc.addEventListener("click", (event) => {
	let DoubleNum = "Double";
	//Get radio values
	let radioBtns = document.querySelector("input[name=calcType]:checked");
	let radioBtnsValue = radioBtns ? radioBtns.value : "";

	if (!event.target.classList.contains("item__btn")) return;

	const value = event.target.innerText;
	try {
		switch (value) {
			case "AC":
				result.innerText = "";
				break;
			case "=":
				if (result.innerText.search(/[^0-9*/+-.()]/im) != -1) return;
				JSonArray.push(result.innerText);
				if (result.innerText != "")
					if (flag == true) {
						result.innerText =
							radioBtnsValue == DoubleNum	? eval(result.innerText) : Math.floor(eval(result.innerText));
					} else {
						result.innerText = WithoutPriority(result.innerText);
					}
				break;
			case back:
				// backspace
				result.innerText = result.innerText.substring(0, result.innerText.length - 1);
				break;
			default:			
				result.innerText += value;
				// prohibition of entering the same characters
				result.innerText = result.innerText.replace(/([*/+-.])\1/g,"");
		}
	} catch (err) {
		result.innerText = "";
	}
});

// Calc without priority
let WithoutPriority = (result) => {
	result = result.replace(/[{()}]/g, "");
	let reForNumbers = /\d+/g;
	let reForSumbols = /[*/+-]/gi;
	let numbers = result.match(reForNumbers);
	let symbols = result.match(reForSumbols);
	result = numbers[0];
	for (let i = 0; i < symbols.length; i++) {
		result = eval(result + symbols[i] + numbers[i + 1]);
	}
	return result;
};

//Json sender btn
jsonSender.addEventListener("click", (event) => {
	const jsn = jsonSender.innerText;
	if (!event.target.classList.contains("JsonSender")) return;
	const value = event.target.innerText;
	try {
		switch (value) {
			case jsn:
				sendJson(JSonArray);
				break;
			default:
				console.log("Json not sended");
		}
	} catch (err) {
		console.log(err);
	}
});

// Send request
let sendJson = (arr) => {
	let jsonArray = JSON.parse(JSON.stringify(arr));
	let xhr = new XMLHttpRequest();
	let url = "https://jsonplaceholder.typicode.com//";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	let data = JSON.stringify({ expressions: jsonArray });
	//console.log(data)
	xhr.send(data);
};
