
// Первая часть ДЗ

function color(red = 0, green = 0, blue = 0) {
    return 'rgb('+ red +','+ green +','+ blue +')';
    }
    
    console.log(color(23,100,134) );
    
    console.log(color(23,100,) );
    
    console.log(color(23,undefined,134) )

//Вторая часть ДЗ

var prod = 'товар'
var product = 'товара'
var products = 'товаров'

function words(d = 0) {
    if (d === 1 || d === 21 || d === 31 || d === 41) {
        return d + ' ' + prod;
    }
    else if (d === 2 || d === 3 || d === 4 || d === 22 || d === 23 || d === 24 || d === 32 || d === 33 || d === 34 || d === 42 || d === 43 ||
         d === 44) {
        return d + ' ' + product;
    }
    else if (d === 0 || d === 5  || d === 6 || d === 7 || d === 8 || d === 9 || d === 10 || d === 11 || d === 12 || d === 13 || d === 14 || 
        d === 15 || d === 16 || d === 17 || d === 18 || d === 19 || d === 20 || d === 25 || d === 26 || d === 27 || d === 28 || d === 29 || 
        d === 30 || d === 35 || d === 36 || d === 37 || d === 38 || d === 39 || d === 40 || d === 45 || d === 46 || d === 47 || d === 48 || 
        d === 49 || d === 50) {
        return d + ' ' + products;
    }
    else {
        return undefined
    }
}

console.log(words(1));

console.log(words(21));

console.log(words(4));

console.log(words(7));

console.log(words(14));

console.log(words(45));

console.log(words(42));

console.log(words());
