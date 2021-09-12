/* let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperties(user, 'fullName'), {
    get fullName() {
        return '${this.name} ${this.surname}';
    },
    set fullName(value) {
        [this.name, this.surmane] = value.split (" ");
    }
}

user.fullName = "Alice Cooper";

alert(user.name)
alert(user.surname)
 */

//////////////////


/* document.querySelector('.hider').addEventListener('click', function (){

const text = document.querySelector('.text')
if (text.hidden) {
    text.hidden = false;
}
 else {
    text.hidden = true;

}) */
const pain = document.querySelectorAll('pain')
console.log('pain --->', pain)
let div = document.createElement('div');


document.body.append(div);