class Pizza {
    constructor(pizzaBase,products,sauces,spices ){
        this.pizzaBase=pizzaBase,
        this.products=products,
        this.sauces=sauces,
        this.spices=spices
    }
}
// Pizza base
class PizzaBase{
    get calories() {
        return this._calories;
    }
    get price() {
        return this._price;
    }
}

class PuffBase extends PizzaBase{
    get calories() {
        return 12;
    }
    get price() {
        return 22;
    }
}
class ThickBase extends PizzaBase{
    get calories() {
        return 12;
    }
    get price() {
        return 21;
    }
}
class СalzoneBase extends PizzaBase{
    get calories() {
        return 14;
    }
    get price() {
        return 55;
    }
}
class ThinBase extends PizzaBase{
    get calories() {
        return 12;
    }
    get price() {
        return 15;
    }
}


// Products
class Product{
    get calories() {
        return this._calories;
    }
    get price() {
        return this._price;
    }
}


class Meat extends Product{
    get price() {
        return 44;
    }
    get calories() {
        return 24;
    }
}

class Chease extends Product{
    get price() {
        return 22;
    }
    get calories() {
        return 14;
    }
}

class Sausage extends Product{
    get price() {
        return 21;
    }
    get calories() {
        return 25;
    }
}

class Olives extends Product{
    get price() {
        return 28;
    }
    get calories() {
        return 17;
    }
}

// Sauces
class Sauces{
    get calories() {
        return this._calories;
    }
    get price() {
        return this._price;
    }
}

class Barbeku extends Sauces{
    get calories() {
        return 15;
    }
    get price() {
        return 15;
    }
}

class SweetAndSour extends Sauces{
    get calories() {
        return 12;
    }
    get price() {
        return 14;
    }
}
class Garlic extends Sauces{
    get calories() {
        return 16;
    }
    get price() {
        return 16;
    }
}
class Teriyaki extends Sauces{
    get calories() {
        return 12;
    }
    get price() {
        return 12;
    }
}

//Spices
class Spices{
    get calories() {
        return this._calories;
    }
    get price() {
        return this._price;
    }
}
class Rosemary extends Spices{
    get price() {
        return 28;
    }
    get calories() {
        return 12;
    } 
}

class Basilic extends Spices{
    get price() {
        return 24;
    }
    get calories() {
        return 10;
    } 
}

class Oregano extends Spices{
    get price() {
        return 18;
    }
    get calories() {
        return 20;
    } 
}

