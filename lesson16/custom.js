const SELECTOR = Object.freeze({
    DONE_BTN: '.doneBtn',
    TEMPLATE_LIST_CLASS: '.classTemplLi',
    TEMPLATE_UL_CLASS: '.listRow',
});
const CLASS = Object.freeze({
    DELETE_BTN: 'deleteBtn',
    DONE_BTN: 'doneBtn',
    GREEN_BACKGROUND: 'green_class',
});
const ID = Object.freeze({
    INPUT: 'mainInput',
    TEMPL: 'listTemplate',
    DATALIST: 'dataList',
    SEND_BTN: 'mainBtn',
});

const inputForm = document.getElementById(ID.INPUT);
const listTemplate = document.getElementById(ID.TEMPL).innerHTML;
const newData = document.getElementById(ID.DATALIST);
const sendBtn = document.getElementById(ID.SEND_BTN);
const donBtn = document.querySelector(SELECTOR.DONE_BTN);
const classLi = document.querySelector(SELECTOR.TEMPLATE_LIST_CLASS);

sendBtn.addEventListener('click', onSendButtonClick);
newData.addEventListener('click', onTodoListClick);

function onSendButtonClick() {
    pubList();
}

function onTodoListClick(evt) {
        if (evt.target.classList.contains(CLASS.DELETE_BTN)) {
        evt.target.closest(SELECTOR.TEMPLATE_UL_CLASS).remove();
        return;
    }
    if (evt.target.classList.contains(CLASS.DONE_BTN)) {
        evt.target.closest(SELECTOR.TEMPLATE_LIST_CLASS).classList.toggle(CLASS.GREEN_BACKGROUND);
        //evt.target.classList.toggle('green_class');
    }
}

function pubList() {
    const templateHTML = listTemplate .replace('{{fromInpData}}', inputForm.value);

    if(inputForm.value !== '') {
        newData.insertAdjacentHTML('beforeend', templateHTML);
        inputForm.value = null;
        }
        else {
            alert('Ввведите данные!');
        }   
}