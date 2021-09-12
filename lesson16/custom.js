// подписка на всю форму по id
const inpBox = document.getElementById('inpBtnBox');
//Подписка на инпут по id
const inputForm = document.getElementById('mainInput');
//Подписка на темплэйт
const listTemplate = document.getElementById('listTemplate').innerHTML;
//Подписка на id div для вставки данных
const newData = document.getElementById('dataList');
//Подписка на кнопку send
const sendBtn = document.getElementById('mainBtn');
//Подписка на кнопку delete
const delBtn = document.querySelector('.deleteBtn');
//Подписка на кнопку done
const donBtn = document.querySelector('.doneBtn');
//Подписка на класс списка тэмплейта
const classLi = document.querySelector('.classTemplLi');

const DELETE_BTN = 'deleteBtn';
const TEMPLATE_UL_CLASS = '.listRow';
const DONE_BTN = 'doneBtn';
const TEMPLATE_LIST_CLASS = '.classTemplLi';

// Листенер на добавление данных в список
sendBtn.addEventListener('click', onDataListAdd);

// Листенер на удаление данных в списке
newData.addEventListener('click', onDataListRemove);

// Листенер на изменение класса в списке и зеленого бэкграунда
newData.addEventListener('click', onDataListClassChange);

function onDataListAdd() {
    const templateHTML = listTemplate .replace('{{fromInpData}}', inputForm.value) ;

    if(inputForm.value !== '') {
    newData.insertAdjacentHTML('beforeend', templateHTML);
    inputForm.value = null;
    }
    else {
        alert('Ввведите данные!');
    }
}

function onDataListRemove(evt) {
        if (evt.target.classList.contains(DELETE_BTN)) {
        evt.target.closest(TEMPLATE_UL_CLASS).remove();
    }
    
}

function onDataListClassChange(evt) {
            if (evt.target.classList.contains(DONE_BTN)) {
            evt.target.closest(TEMPLATE_LIST_CLASS).classList.toggle('green_class');
            //evt.target.classList.toggle('green_class');
     }
    
}
