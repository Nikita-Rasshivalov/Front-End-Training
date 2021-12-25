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
    get baseName() {
        return "PuffBase";
    }
}
class ThickBase extends PizzaBase{
    get calories() {
        return 12;
    }
    get price() {
        return 21;
    }
    get baseName() {
        return "ThickBase";
    }
}
class СalzoneBase extends PizzaBase{
    get calories() {
        return 14;
    }
    get price() {
        return 55;
    }
    get baseName() {
        return "СalzoneBase";
    }
}
class ThinBase extends PizzaBase{
    get calories() {
        return 12;
    }
    get price() {
        return 15;
    }
    get baseName() {
        return "ThinBase";
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
    get name() {
        return "Meat";
    }
}

class Chease extends Product{
    get price() {
        return 22;
    }
    get calories() {
        return 14;
    }
    get name() {
        return "Chease";
    }
}

class Sausage extends Product{
    get price() {
        return 21;
    }
    get calories() {
        return 25;
    }
    get name() {
        return "Sausage";
    }
}

class Olives extends Product{
    get price() {
        return 28;
    }
    get calories() {
        return 17;
    }
    get name() {
        return "Olives";
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
    get name() {
        return "Barbeku";
    }
}

class SweetAndSour extends Sauces{
    get calories() {
        return 12;
    }
    get price() {
        return 14;
    }
    get name() {
        return "SweetAndSour";
    }
}
class Garlic extends Sauces{
    get calories() {
        return 16;
    }
    get price() {
        return 16;
    }
    get name() {
        return "Garlic";
    }
}
class Teriyaki extends Sauces{
    get calories() {
        return 12;
    }
    get price() {
        return 12;
    }
    get name() {
        return "Teriyaki";
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
    get name() {
        return "Rosemary";
    }
}

class Basilic extends Spices{
    get price() {
        return 24;
    }
    get calories() {
        return 10;
    } 
    get name() {
        return "Basilic";
    }
}

class Oregano extends Spices{
    get price() {
        return 18;
    }
    get calories() {
        return 20;
    } 
    get name() {
        return "Oregano";
    }
}

