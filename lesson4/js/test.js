/*var browser = prompt('Enter your browser');

if(browser === 'IE') {
alert ('IE') }
 else if (browser === 'Chrome'){
 alert ('Chrome')}
 else if (browser === 'Firefox'){
 alert ('Firefox')}
 else if (browser === 'Safari'){
 alert ('Safari')}
 else if (browser === 'Opera'){
 alert ('Opera')}
 else 
 alert ('неопределенно')*/


// -----

/*var a = +prompt('a?', '')

console.log ('a ----- >>>', a)

if(typeof a !=='object') {
    a = +a;
}

switch(a) {
    case 0:
        alert( '0' );
        break;
    case 1:
        alert( '1' );
        break;
    case 2:
    case 3:
        alert( '2,3' );19
        break;
    default:
        alert( 'НИЧЁ' );
  }*/

  //-----

/*  var userInfo = {
    firstName: 'Aleksey',
    MIDDLEName: '12312',
    lastName: 'setttt',
}

function getfullName(first, middle, last, separate) {

    return  first + separate + middle + separate + last;
}



console.log('firstName--> ',  userInfo.firstName);
console.log('FIO--> ',  getfullName(userInfo.firstName, userInfo.MIDDLEName, userInfo.lastName, '-'));
console.log('FIO--> ',  getfullName(userInfo.firstName, userInfo.MIDDLEName, userInfo.lastName, '_'));
console.log('FIO--> ',  getfullName(userInfo.firstName, userInfo.MIDDLEName, userInfo.lastName, '/'));
*/

//---

/*
var userAge = prompt('Enter your age');
while (!/^[0-9]+$/.test(userAge)) {
    alert('You did not enter age.');
    userAge = prompt('Enter your age');
}

console.log('userAge--> ', userAge);

var userInfoSmoke = prompt('Do you smoke?', 'yes or no');
while (!/yes|Yes|YES|No|no|NO/.test(userInfoSmoke)) {
    alert('You did not enter yes or no.');
    userInfoSmoke = prompt('Do you smoke?', 'yes or no');
}

console.log('userInfoSmoke--> ', userInfoSmoke);

if(userAge >= 18 && userInfoSmoke === (/'yes|Yes|YES'/)) {
    alert ('Well, in vain') }

     else if (userAge >= 18 && userInfoSmoke === 'no'){
     alert ('Well done and don\'t need')}
     else if (userAge < 18 && userInfoSmoke === 'yes'){
     alert ('I will tell your mom')}
     else if (userAge < 18 && userInfoSmoke === 'no'){
     alert ('Well done and don\'t need')}
     else 
     alert ('Indefinitely')

     */

    // ------


    var userAge = prompt('Enter your age');
    while (!/^[0-9]+$/.test(userAge)) {
        alert('You did not enter age.');
        userAge = prompt('Enter your age');
    }
    
    console.log('userAge--> ', userAge);
    
    var userInfoSmoke = prompt('Do you smoke?', 'yes or no');
    while (!/yes|no/.test(userInfoSmoke)) {
        alert('You did not enter yes or no.');
        userInfoSmoke = prompt('Do you smoke?', 'yes or no');
    }
    
    console.log('userInfoSmoke--> ', userInfoSmoke);
    
    if(userAge >= 18 && userInfoSmoke === 'yes') {
        alert ('Well, in vain') }
    
         else if (userAge >= 18 && userInfoSmoke === 'no'){
         alert ('Well done and don\'t need')}
         else if (userAge < 18 && userInfoSmoke === 'yes'){
         alert ('I will tell your mom')}
         else if (userAge < 18 && userInfoSmoke === 'no'){
         alert ('Well done and don\'t need')}
         else 
         alert ('Indefinitely')
    
