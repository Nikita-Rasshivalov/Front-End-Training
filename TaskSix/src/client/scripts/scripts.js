//#region fill the page with data
/**
 * variables for radios and checkboxs
 */
let pizzaBaseNames = [PuffBase.name, ThickBase.name, СalzoneBase.name, ThinBase.name]
let productNames = [Meat.name, Chease.name, Sausage.name, Olives.name]
let saucesNames = [Barbeku.name, SweetAndSour.name, Garlic.name, Teriyaki.name]
let spicesNames = [Rosemary.name, Basilic.name, Oregano.name]
let pizzaBaseContainer = document.querySelector('.pizzaBase-container');

pizzaBaseNames.forEach(elem => {
    let radioBtn = document.createElement('input');
    radioBtn.type = "radio";
    radioBtn.name = "pizzaBase";
    radioBtn.value = elem;
    radioBtn.id = elem;

    let label = document.createElement('label');
    label.htmlFor = elem;
    label.appendChild(document.createTextNode(elem));

    let container = document.createElement('div');
    container.className = "container-item";
    container.appendChild(radioBtn);
    container.appendChild(label);
    pizzaBaseContainer.appendChild(container);
});

let prosuctsContainer = document.querySelector('.products-container');
productNames.forEach(elem => {
    let box = document.createElement('input');
    box.type = "checkBox";
    box.name = "products";
    box.value = elem;
    box.id = elem;

    let label = document.createElement('label');
    label.htmlFor = elem;
    label.appendChild(document.createTextNode(elem));

    let container = document.createElement('div');
    container.className = "container-item";
    container.appendChild(box);
    container.appendChild(label);
    prosuctsContainer.appendChild(container);
});

let saucesContainer = document.querySelector('.sauces-container');

saucesNames.forEach(elem => {
    let box = document.createElement('input');
    box.type = "checkBox";
    box.name = "sauces";
    box.value = elem;
    box.id = elem;

    let label = document.createElement('label');
    label.htmlFor = elem;
    label.appendChild(document.createTextNode(elem));

    let container = document.createElement('div');
    container.className = "container-item";
    container.appendChild(box);
    container.appendChild(label);
    saucesContainer.appendChild(container);
});

let spicesContainer = document.querySelector('.spices-container');
spicesNames.forEach(elem => {
    let box = document.createElement('input');
    box.type = "checkBox";
    box.name = "spices";
    box.value = elem;
    box.id = elem;

    let label = document.createElement('label');
    label.htmlFor = elem;
    label.appendChild(document.createTextNode(elem));

    let container = document.createElement('div');
    container.className = "container-item";
    container.appendChild(box);
    container.appendChild(label);
    spicesContainer.appendChild(container);
});
//#endregion

//#region set ingredients

// variables 
let pizzaBase;
let products = [];
let sauces = [];
let spices = [];

//set pizza base
if (document.querySelector(".pizzaBase-container")) {
    document.querySelectorAll("input[name=pizzaBase]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            pizzaBase = setPizzaBase(item);
        });
    });
}

/**
 * Set pizza base.
 * @param {item} baseName
 * @returns {object} base
 */
function setPizzaBase(item) {
    switch (item) {
        case "PuffBase":
            return new PuffBase();
        case "ThickBase":
            return new ThickBase();
        case "СalzoneBase":
            return new СalzoneBase();
        case "ThinBase":
            return new ThinBase();
        default:
            alert("Please choose a correct base");
    }
}

/**
 * Remove ingredients.
 * @param {arr} array
 * @param {item} item
 */
function clearIngredient(arr, item) {
    let currentIndex;
    arr.forEach(function (entry, index) {
        if (entry.name === item) currentIndex = index;
    });
    arr.splice(currentIndex, 1);
}

/**
 * Add products
 * @param {item} productName

 */
function addProducts(item) {
    switch (item) {
        case "Meat":
            products.push(new Meat());
            break;
        case "Chease":
            products.push(new Chease());
            break;
        case "Sausage":
            products.push(new Sausage());
            break;
        case "Olives":
            products.push(new Olives());
            break;
        default:
            alert("Please choose a correct ingredient");
    }
}

/**
 * Remove products
 * @param {item} productName
 */
function RemoveProducts(item) {
    switch (item) {
        case "Meat":
            clearIngredient(products, item);
            break;
        case "Chease":
            clearIngredient(products, item);
            break;
        case "Sausage":
            clearIngredient(products, item);
            break;
        case "Olives":
            clearIngredient(products, item);
            break;
        default:
            alert("Please choose a correct ingredient");
    }
}

//manage products
if (document.querySelector(".products-container")) {
    document.querySelectorAll("input[name=products]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            if (elem.checked) {
                addProducts(item);
            } else {
                RemoveProducts(item)
            }
        });
    });
}

//add sauces
function addSauces(item) {
    switch (item) {
        case "Barbeku":
            sauces.push(new Barbeku());
            break;
        case "SweetAndSour":
            sauces.push(new SweetAndSour());
            break;
        case "Garlic":
            sauces.push(new Garlic());
            break;
        case "Teriyaki":
            sauces.push(new Teriyaki());
            break;
        default:
            alert("Please choose a correct ingredient");
    }
}
//Remove products
function RemoveSauces(item) {
    switch (item) {
        case "Barbeku":
            clearIngredient(sauces, item);
            break;
        case "SweetAndSour":
            clearIngredient(sauces, item);
            break;
        case "Garlic":
            clearIngredient(sauces, item);
            break;
        case "Teriyaki":
            clearIngredient(sauces, item);
            break;
        default:
            alert("Please choose a correct ingredient");
    }
}

//manage sauces
if (document.querySelector(".sauces-container")) {
    document.querySelectorAll("input[name=sauces]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            if (elem.checked) {
                addSauces(item);
            } else {
                RemoveSauces(item);
            }
        });
    });
}

//add species
function addSpecies(item) {
    switch (item) {
        case "Oregano":
            spices.push(new Oregano());
            break;
        case "Basilic":
            spices.push(new Basilic());
            break;
        case "Rosemary":
            spices.push(new Rosemary());
            break;
        default:
            alert("Please choose a correct ingredient");
    }
}
//Remove species
function RemoveSpecies(item) {
    switch (item) {
        case "Oregano":
            clearIngredient(spices, item);
            break;
        case "Basilic":
            clearIngredient(spices, item);
            break;
        case "Rosemary":
            clearIngredient(spices, item);
            break;
        default:
            alert("Please choose a correct ingredient");
    }
}

//manage species
if (document.querySelector(".spices-container")) {
    document.querySelectorAll("input[name=spices]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            if (elem.checked) {
                addSpecies(item);
            } else {
                RemoveSpecies(item);
            }
        });
    });
}
//#endregion

//#region calculation 
//variables

const resultSum = document.querySelector(".result-sum");
const resultCal = document.querySelector(".result-cal");
const K1 = 80;
const K2 = 120;


/**
 * get price.
 * @param {arr} array
 * @returns {sumPrice}
 */
function getPrice(arr) {
    let sumPrice = 0;
    arr.forEach(elem => {
        sumPrice += elem.price
    })
    return sumPrice;
}

/**
 * get calories.
 * @param {arr} array
 * @returns {sumPrice}
 */
function getCalories(arr) {
    let sumCal = 0;
    arr.forEach(elem => {
        sumCal += elem.calories
    })
    return sumCal;
}

//set calories and price to page
document.querySelectorAll('input[name=pizzaBase],input[name=sauces],input[name=products],input[name=spices]').forEach(elem => {
    elem.addEventListener('change', event => {

        let spicesPrice = getPrice(spices);
        let productsPrice = getPrice(products);
        let saucesPrice = getPrice(sauces);
        let basePrice = pizzaBase ? pizzaBase.price : 0;
        let generalPrice = spicesPrice + productsPrice + saucesPrice + basePrice;

        // fulfillment of point 4 of the task
        //console.log(generalPrice);
        if (generalPrice < K1) {
            generalPrice = generalPrice + (generalPrice * 0.2)
        }
        else if (generalPrice >= K1 && generalPrice <= K2) {
            generalPrice = generalPrice + (generalPrice * 0.15)
        } else {
            generalPrice = generalPrice + (generalPrice * 0.1)
        }

        resultSum.innerHTML = generalPrice + " rub";

        let spicesCal = getCalories(spices);
        let productsCal = getCalories(products);
        let saucesCal = getCalories(sauces);
        let baseCal = pizzaBase ? pizzaBase.calories : 0;
        let generalCal = spicesCal + productsCal + saucesCal + baseCal;
        resultCal.innerHTML = generalCal + " kcal";
    });
});
//#endregion

//#region send JSON
document.querySelector(".pizzaSender").addEventListener('click', event => {
    if (!pizzaBase) return
    let pizza = new Pizza(pizzaBase, products, sauces, spices);
    jsonSender(pizza);
});

/**
 * Send json
 * @param {pizza} pizza
 */
//objects of XMLHttpRequest work asynchronously
function  jsonSender(pizza) {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:5600/api";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    let pizzaJson = {
        generalPrice:resultSum.innerHTML,
        generalCalories:resultCal.innerHTML,
        pizzaBase: {
            baseName: pizza.pizzaBase.baseName,
            calories: pizza.pizzaBase.calories,
            price: pizza.pizzaBase.price
        }
    }
    pizzaJson.products = []
    pizza.products.forEach(elem=>{
        let product = {
            name:elem.name,
            price:elem.price,
            calories:elem.calories
        }
        pizzaJson.products.push(product);
    });
    pizzaJson.sauces = []
    pizza.sauces.forEach(elem=>{
        let sauce = {
            name:elem.name,
            price:elem.price,
            calories:elem.calories
        }
        pizzaJson.sauces.push(sauce);
    });
    pizzaJson.spices = []
    pizza.spices.forEach(elem=>{
        let spice = {
            name:elem.name,
            price:elem.price,
            calories:elem.calories
        }
        pizzaJson.spices.push(spice);
    });
    let data = JSON.stringify(pizzaJson);
    console.log(data);
    xhr.send(data);
    alert("Pizza is ordered")
}
//#endregion


