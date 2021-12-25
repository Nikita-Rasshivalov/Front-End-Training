//#region fill the page with data

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

function setPizzaBase(base) {
    switch (base) {
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

//set products
if (document.querySelector(".products-container")) {
    document.querySelectorAll("input[name=products]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            if (elem.checked) {
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
        });
    });
}

//clear products
if (document.querySelector(".products-container")) {
    document.querySelectorAll("input[name=products]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            let currentIndex;
            if (!elem.checked) {
                switch (item) {
                    case "Meat":
                        products.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        products.splice(currentIndex, 1);
                        break;
                    case "Chease":
                        products.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        products.splice(currentIndex, 1);
                        break;
                    case "Sausage":
                        products.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        products.splice(currentIndex, 1);
                        break;
                    case "Olives":
                        products.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        products.splice(currentIndex, 1);
                        break;
                    default:
                        alert("Please choose a correct ingredient");
                }
            }
        });
    });
}

//set sauces
if (document.querySelector(".sauces-container")) {
    document.querySelectorAll("input[name=sauces]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            if (elem.checked) {
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
        });
    });
}
//clear sauces
if (document.querySelector(".sauces-container")) {
    document.querySelectorAll("input[name=sauces]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            let currentIndex;
            if (!elem.checked) {
                switch (item) {
                    case "Barbeku":
                        sauces.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        sauces.splice(currentIndex, 1);
                        break;
                    case "SweetAndSour":
                        sauces.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        sauces.splice(currentIndex, 1);
                        break;
                    case "Garlic":
                        sauces.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        sauces.splice(currentIndex, 1);
                        break;
                    case "Teriyaki":
                        sauces.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        sauces.splice(currentIndex, 1);
                        break;
                    default:
                        alert("Please choose a correct ingredient");
                }
            }
        });
    });
}

//set species
if (document.querySelector(".spices-container")) {
    document.querySelectorAll("input[name=spices]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            if (elem.checked) {
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
        });
    });
}

// clear spices
if (document.querySelector(".spices-container")) {
    document.querySelectorAll("input[name=spices]").forEach((elem) => {
        elem.addEventListener("change", (event) => {
            let item = event.target.value;
            let currentIndex;
            if (!elem.checked) {
                switch (item) {
                    case "Oregano":
                        spices.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        spices.splice(currentIndex, 1);
                        break;
                    case "Basilic":
                        spices.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        spices.splice(currentIndex, 1);
                        break;
                    case "Rosemary":
                        spices.forEach(function (entry, index) {
                            if (entry.name === item) currentIndex = index;
                        });
                        spices.splice(currentIndex, 1);
                        break;
                    default:
                        alert("Please choose a correct ingredient");
                }
            }
        });
    });
}
//#endregion

//#region calculation 
//variables
let pizza = new Pizza(pizzaBase, products, sauces, spices);

const resultSum = document.querySelector(".result-sum");
const resultCal = document.querySelector(".result-cal");

let pizzaBaseSum = 0;
let pizzaBaseCal = 0;
let productsSum = 0;
let productsCal = 0;
let sausesSum = 0;
let sausesCal = 0;
let speciesSum = 0;
let speciesCal = 0;

document.querySelectorAll("input[name=sauces]").forEach((elem) => {
    elem.addEventListener("change", () => {
        pizza.sauces.forEach(elem => {
            sausesSum += elem.price
            sausesCal += elem.calories
        });
    });
});


//#endregion