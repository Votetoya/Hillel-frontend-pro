
//Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var array1 = ['a', 'b', 'c'];
array1.push(1, 2, 3)
console.log('array1 --->', array1);

//Задача. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var array2 = [1, 2, 3];
array2.reverse(3, 2, 1)
console.log('array2 --->', array2);

//Задача. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
var array3 = [1, 2, 3];
array3.unshift(4, 5, 6)
console.log('array3 --->', array3);

//Задача. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
var array4 = [1, 2, 3, 4, 5];
var array5 = array4.slice(0,3); 
console.log('array5 --->', array5);

//Задача. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
var array6 = ['js', 'css', 'jq'];
var fisrtArray6 = array6.shift();
document.write(fisrtArray6);

//Задача. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов

var fromPairs = (array) => array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }
    return acc;
  }, {});

 var data = [['a', 1], ['b', 2]];
console.log(fromPairs(data))






//Мои пометки для памяти
// || || ||
// \/ \/
/*

var peopleData = [ 
    {
      id: '1',
      userName: 'Alex',
      userAge: 30,
      userPhone: "567568778",
    },
    {
      id: '2',
      userName: 'Petya',
      userAge: 23,
      userPhone: "1243255342",
    },
    {
      id: '3',
      userName: 'Olga',
      userAge: 18,
      userPhone: "5678567564352",
    },
   ];

   
for (var test = 0; test < peopleData.length; test++)
   {
 
    document.write(peopleData[test].id + '. ' + peopleData[test].userName + ' ' + peopleData[test].userAge + ' - tel +38' + peopleData[test].userPhone + '</br>');
   }

   
   */
//   document.write(`${peopleData[test].id}. ${peopleData[test].userName} ${peopleData[test].userAge} - tel +38${peopleData[test].userPhone} <br/>`);
 
