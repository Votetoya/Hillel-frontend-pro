const ul = document.createElement('ul');
const but = document.querySelector('button');
const inp = document.querySelector('[name="AnyInput"]'); 

but.addEventListener('click', () => {
    if(inp.value !== '') {
    document.body.prepend(ul);
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerText = inp.value;
    list.appendChild(li);
    inp.value = null
    }
})