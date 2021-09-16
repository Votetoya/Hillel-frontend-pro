'use strict';

    let num = 100; 

   const calc = {
    add: function (n) {
        if (typeof n === 'number')
        {
        console.log(num += n);
        }
        else 
        {
          console.log('NaN');
        }
    },
    sub: function (n) {
        if (typeof n === 'number')
          {
          console.log(num = num - n);
          }
          else 
          {
            console.log('NaN');
          } 
    }, 
    set: function (n) {
        if (typeof n === 'number')
          {
          console.log(num = n);
          }
          else 
          {
            console.log('NaN');
          } 
    },
    get: function (n) {
        document.write(num + '<br>');
        console.log(num);
    }
}
   
