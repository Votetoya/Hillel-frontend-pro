var armorColor = prompt('Enter armor color');

var shieldInfo;
var shieldExistence = confirm('Does the soldier have a shield?');
if (shieldExistence == true) {
    shieldInfo = 'The soldier has a shield';
} else {
    shieldInfo = null;
}
console.log ('armorColor--> ', armorColor)

console.log('shieldInfo--> ', shieldInfo);

if (shieldInfo === 'The soldier has a shield')
{
    var shieldPic;
    var shieldAnswerPic = confirm('Is there a lion on the shield?')
    if (shieldAnswerPic == true) {
        shieldPic = 'lion';
    } else {
        shieldPic = 'not lion'
    }
} else {

}

console.log('shieldPic--> ', shieldPic);

function isLannisterSoldier(color, lion) {
if (armorColor == 'red')
return true


    
    }

console.log (isLannisterSoldier() );

console.log (isLannisterSoldier('red', 'lion') );

console.log (isLannisterSoldier('blue', null) );
    
console.log (isLannisterSoldier('red') );
    
console.log (isLannisterSoldier('blue', 'lion') );