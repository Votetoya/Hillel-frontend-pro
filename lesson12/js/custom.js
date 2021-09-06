/**
 * Создать функцию калькулятор которая умеет
 * прибавлять, вычитать, устанавливать новое 
 * базовое значение и возвращать значение.
 * 
 * Если вместо числа передается что-то другое, например строка
 * - возвращать NaN и ничего не делать
 */
/*
 function createCalculator() {
    // implement
  }
  
  const calculator = createCalculator(100);
  
  calculator.add(10); // 110
  calculator.add(10); // 120
  calculator.sub(20); // 100
  
  calculator.set(20); //
  calculator.add(10); // 30
  calculator.add(10); // 40
  calculator.add('qwe'); // NaN и значение 40 не менять
  calculator.get(); // 40
  */

 function createCalculator(a) {
  let num = a;
  
       function add(n) {
        if (typeof n === 'number')
        {
        console.log(num += n);
        }
        else 
        {
          console.log('NaN');
        } 
      }
      function sub(n) {
        if (typeof n === 'number')
        {
        console.log(num = num - n);
        }
        else 
        {
          console.log('NaN');
        } 
      }
      function set(n) {
        if (typeof n === 'number')
        {
        console.log(num = n);
        }
        else 
        {
          console.log('NaN');
        } 
      }
      function get() {
        document.write(num + '<br>');
        console.log(num);
      }
    return {
      add,
      sub,
      set,
      get
    };
  }
  
 const calculator = createCalculator(100);

/* add: (n) => num = num + n,
  } */