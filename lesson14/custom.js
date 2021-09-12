// подписка на всю форму по id
const contactForm = document.getElementById('UserContForm');
//Подписка на инпуты по классу
const inputForm = document.querySelectorAll('.formInput');
//Подписка на темплэйт
const tableTemplate = document.getElementById('contTemplate').innerHTML;
//Подписка на id tbody для вставки данных
const newData = document.getElementById('contList');

const DELETE_BTN = 'deleteBtn';
const TEMPLATE_ROW_CLASS = '.contRow';

// Листенер на отправку формы
contactForm.addEventListener('submit', oncontactFormSubmit)
// Листенер на удаление строки из формы
newData.addEventListener('click', onDataFormRemove)

function oncontactFormSubmit() {
    const contactArr = getContactInfo();

// Подстановка данных из инпутов в переменную

addContTable(contactArr);

}

function onDataFormRemove(evt) {
    if (evt.target.classList.contains(DELETE_BTN)) {
        evt.target.closest(TEMPLATE_ROW_CLASS).remove();
    }
}

//Функции

function getContactInfo() {
    const contactArr = {};

    for (let input of inputForm) {
        contactArr[input.name] = input.value;
    }

    return contactArr;
}

function addContTable(contactArr) {
    const templateHTML = tableTemplate
    .replace('{{firstnameTemplate}}', contactArr.firstname)
    .replace('{{secondnameTemplate}}', contactArr.secondname)
    .replace('{{phoneTemplate}}', contactArr.phone);

    if(contactArr.firstname !== '' && contactArr.secondname !== '' && contactArr.phone !== '') {
        newData.insertAdjacentHTML('beforeend', templateHTML);
        for (let input of inputForm) {
            input.value = null;
        }
    }
    else {
        alert('Ввведите данные во все поля!');
    }
}