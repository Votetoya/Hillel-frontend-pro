'use strict';

function Hamburger(size) {
    this.size = size;
} 

Hamburger.SIZE_SMALL = {
        'price': 50,
        'calories': 20
    };
Hamburger.SIZE_MEDIUM = {
        'price': 75,
        'calories': 30
  };
Hamburger.SIZE_LARGE = {
        'price': 100,
        'calories': 40
    };
Hamburger.TOPPING_CHEESE = {
        'price': 10,
        'calories': 20
    };
Hamburger.TOPPING_SALAD = {
        'price': 20,
        'calories': 5
    };
Hamburger.TOPPING_POTATO = {
        'price': 15,
        'calories': 10
    };
Hamburger.TOPPING_MAYO = {
        'price': 20,
        'calories': 5
    };
Hamburger.TOPPING_SPICE = {
        'price': 15,
        'calories': 0
    };

let hamburger = new Hamburger(Hamburger.SIZE_SMALL);    

Hamburger.prototype.getSize = function () {
    return this.size;
}

Hamburger.prototype.getToppings = function () {
    return this.toppings;
}

Hamburger.prototype.getPrice = function () {
    let size = this.getSize();
    let price = size['price'];

    let toppings = this.getToppings();
    if (typeof this.getToppings() != 'undefined') {
    let toppingObj = toppings[0];
        
        price += toppingObj.price;
        return price;
        }
        else {
            return price;
        }
}

Hamburger.prototype.getCalories = function () {    
    let size = this.getSize();
    let calories = size['calories'];
 
    let toppings = this.getToppings();
    if (typeof this.getToppings() != 'undefined') {
    let toppingObj = toppings[0];
        calories += toppingObj.calories;
        return calories;
        }
        else {
            return calories;
        }
}

Hamburger.prototype.addTopping = function(topping){
	if (!("toppings" in this)) {
        this.toppings = [];
    } 
    this.toppings.push(topping);
}

hamburger.addTopping(Hamburger.TOPPING_CHEESE);


console.log('Price with sauce:' + hamburger.getPrice());
console.log('Callories with sauce:' + hamburger.getCalories());
