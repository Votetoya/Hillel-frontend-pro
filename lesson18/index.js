function Hamburger(size) {
    this.price = size.price;
    this.calories = size.calories;
  };
  
  Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
  };
  Hamburger.SIZE_MIDDLE = {
    price: 75,
    calories: 30,
  };
  Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40,
  };
  
  Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
  };
  Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
  };
  Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
  }
  Hamburger.TOPPING_SEASONING = {
    price: 15,
    calories: 0,
  };
  Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };
  
  Hamburger.prototype.getPrice = function() { 
    return this.price;
  };
  Hamburger.prototype.getCalories = function() {
    return this.calories;
  };
  Hamburger.prototype.addTopping = function(topping) {
    this.price = this.price + topping.price;
    this.calories = this.calories + topping.calories;
  };
  
  const hamburger = new Hamburger(Hamburger.SIZE_MIDDLE);
  
  hamburger.addTopping(Hamburger.TOPPING_SALAD);
  hamburger.addTopping(Hamburger.TOPPING_SEASONING);
  
  console.log('Price with sauce:' + hamburger.getPrice());
  console.log('Callories with sauce:' + hamburger.getCalories());