var distKm = prompt('Enter distance in kilometers');
while (!/^[0-9]+$/.test(distKm)) {
    alert('You did not enter a number.');
    distKm = prompt('Enter distance in kilometers');
}

var distFeet = prompt('Enter distance in feet');
while (!/^[0-9]+$/.test(distFeet)) {
    alert('You did not enter a number.');
    distFeet = prompt('Enter distance in feet');
}

var feetInKm = (distFeet * 0.000305)

console.log(distKm);
console.log(distFeet);
console.log(feetInKm);

if (distKm > feetInKm) alert('distance in kilometers > distance in feet')
else if (distKm < feetInKm) alert('distance in kilometers < distance in feet')
else if (distKm === feetInKm) alert('distance in kilometers = distance in feet')
