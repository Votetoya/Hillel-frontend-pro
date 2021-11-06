function unique(arr) {
    let mas = [];
    
    for (let a of arr) {
    if (!mas.includes(a)) {
    mas.push(a);
        }
      }
    
    return mas;
    }
    
    let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
    
    alert( unique(values) ); // Hare,Krishna,:-O
  
    /////////

function volume() {
    var res;
    volume.res = volume.res || 1;
    volume.arg = volume.arg || 0;
    volume.arg += arguments.length;
        
        for (var i = 0; i < arguments.length; i++) {
        volume.res *= arguments[i];
        if(volume.arg == 3){
            res = volume.res;
    
        }else{
            res = volume;
        }
        }
        return res;
    }
       
const aCylinder = volume(100)(20)(90); // 180000
    
alert(aCylinder);