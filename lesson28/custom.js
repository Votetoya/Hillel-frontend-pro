const SELECTOR = Object.freeze({
   POST_TABLE: '#post-table',
   POST_LIST: '#post-list',
   TEMPLATE: '#postTemplate',
   INPUTS: '#post-input',

 });
 
 const CLASS = Object.freeze({
   POST_ROW: 'post-row',
   BTN_DEL: 'btn-del',
   BTN_ADD: 'btn-add',

 })
 
 const PLACEHOLDER = Object.freeze({
   ID: '{{id}}',
   TITLE: '{{title}}',
   BODY: '{{body}}',
   DATA_ID: '{{dataId}}',
 });
 
 const HELPERS = Object.freeze({
   EMPTY_STRING: '',
   POINT: '.',
 });
 
 const EMPTY_NOTE = {
	Id:'',
   Title: '',
   Body: '',
  };
let notesList = [];
 
 const postPublic = document.querySelector(SELECTOR.POST_TABLE);
 const template = document.querySelector(SELECTOR.TEMPLATE).innerHTML;
 const postBody = document.querySelector(SELECTOR.POST_LIST);
 const inputs = document.querySelectorAll(SELECTOR.INPUTS);
 const MODAL_SELECTOR = '#noteModal';
const ADD_NOTE_SELECTOR = '#addNoteBtn';
 

	
	$(function() {
        $(document).on('click', '.btn-del', function(e){ 
         onDeleteClick($(this));
        });
		
		$(document).on('click', '.btn-edit', function(e){ 
         onEditButtonClick($(this));
        });
    });
 $(ADD_NOTE_SELECTOR).on('click', onAddNoteBtnClick);
 
 const $form = $(`${MODAL_SELECTOR} form`)[0];
const $modal = $(MODAL_SELECTOR).dialog({
  autoOpen: false,
  height: 250,
  width: 350,
  modal: true,
  buttons: {
    Send: () => {
      const note = getModalNote();

      if (note.Id) {
		  
       updateNote(note);
		  } else {
       createNote(note);
		      } 
      
      closeModal();
    },
    Cancel: closeModal,
  },
  close: closeModal,
});
 
 
 
 init();
 
 
 function init() {
 
   PostAPI.getList()
     .then(addPostList)
 }
 
 
 function onAddNoteBtnClick() {
  openModal(EMPTY_NOTE);
}
 
 
 function onEditButtonClick(e) {
	 
  const $input = e;
 //const id = getElementIndex($input);
 // const note = notesList.find((item) => +item.id === id);
    const note = {
        Id: $input.parent().parent().children("td:first").text(),
   Title: $input.parent().parent().children("td:first").next().text(),
	Body: $input.parent().parent().children("td:first").next().next().text()};

  openModal(note);
}

 
 function getPost() {
 const publics = {};
 
   for(let input of inputs) {
     publics[input.name] = input.value;
   };
 
   return publics;
 }
 
 function addPostList(publicList) {
   const html = publicList.map(public => getHtml(public)).join(HELPERS.EMPTY_STRING);
 
   postBody.innerHTML = html;
 }
 
 function getHtml(public) {
   return template
     .replace(PLACEHOLDER.ID, public.id)
     .replace(PLACEHOLDER.TITLE, public.title)
     .replace(PLACEHOLDER.BODY, public.body)
     .replace(PLACEHOLDER.DATA_ID, public.id)
 }
 
 
 
 function onDeleteClick(e) {
  const $element = e.parent().parent().children("td:first").text();

deleteNote($element);
}
 
 
function deleteNote(id) {
  return PostAPI.delete(id)
     .then(() => PostAPI.getList())
     .then(addPostList)
} 
 
 


 
 
 function openModal(note) {
  setModalNote(note);
  $modal.dialog("open");
}

function setModalNote(note) {
  $form.Id.value = note.Id;
  $form.Title.value = note.Title;
  $form.Body.value = note.Body;
}

 
 function editPost(public,el) {
  $modal.dialog("open"); 
  setModalNote(note);
 }
 
 function closeModal() {
  $modal.dialog("close");
  $form.reset();
}
 
 
 function getModalNote() {
  return {
    ...EMPTY_NOTE,
    Id: $form.Id.value,
  Title: $form.Title.value,
  Body: $form.Body.value

  }
}
 

 
 function createNote(note) {
 PostAPI.create(note)
     .then((note) => PostAPI.getList())
     .then(addPostList)
}


function updateNote(note) {
 PostAPI.update(note)
     .then((note) => PostAPI.getList())
     .then(addPostList)
}
 