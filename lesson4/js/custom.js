
var userAge = prompt('Enter your age');
while (!/^[0-9]+$/.test(userAge)) {
    alert('You did not enter age.');
    userAge = prompt('Enter your age');
}

console.log('userAge--> ', userAge);

var userInfoSmoke = confirm('Do you smoke?');

console.log('userInfoSmoke--> ', userInfoSmoke);

if(userAge >= 18 && userInfoSmoke === true) {
    alert ('Well, in vain') }

     else if (userAge >= 18 && userInfoSmoke === false){
     alert ('Well done and don\'t need')}
     else if (userAge < 18 && userInfoSmoke === true){
     alert ('I will tell your mom')}
     else if (userAge < 18 && userInfoSmoke === false){
     alert ('Well done and don\'t need')}
     else 
     alert ('Indefinitely')
