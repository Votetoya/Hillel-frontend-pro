
function isLannisterSoldier(color, shield){
    if (color === 'red' && shield === 'lion' || color === 'red' && shield === null || shield === 'lion') {
        return true;
      } else {
        return false;
      }
    }

console.log (isLannisterSoldier() );

console.log (isLannisterSoldier('red', 'lion') );
    
console.log (isLannisterSoldier('blue', null) );
        
console.log (isLannisterSoldier('red', null) );
        
console.log (isLannisterSoldier('blue', 'lion') );

console.log (isLannisterSoldier('', 'lion') );

console.log (isLannisterSoldier('red', 'star') );