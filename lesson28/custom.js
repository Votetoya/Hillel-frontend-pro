const SELECTOR = Object.freeze({
   POST_TABLE: '#post-table',
   POST_LIST: '#post-list',
   TEMPLATE: '#postTemplate',
   INPUTS: '#post-input',
   MODAL: '#noteModal',
   ADD_NOTE: '#addNoteBtn',
 });
 
 const CLASS = Object.freeze({
   POST_ROW: 'post-row',
   BTN_DEL: 'btn-del',
   BTN_ADD: 'btn-add',

 })
 
 const EMPTY_NOTE = {
	Id:'',
   title: '',
   body: '',
  };
  
let notesList = [];
 
 const postPublic = document.querySelector(SELECTOR.POST_TABLE);
 const template = document.querySelector(SELECTOR.TEMPLATE).innerHTML;
 const postBody = document.querySelector(SELECTOR.POST_LIST);
 const inputs = document.querySelectorAll(SELECTOR.INPUTS);

 
	$(function() {
        $(document).on('click', '.btn-del', function(e){ 
         onDeleteClick($(this));
        });
		
		$(document).on('click', '.btn-edit', function(e){ 
         onEditButtonClick($(this));
        });
    });
 $(SELECTOR.ADD_NOTE).on('click', onAddNoteBtnClick);
 
const $form = $(`${SELECTOR.MODAL} form`)[0];
const $modal = $(SELECTOR.MODAL).dialog({
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
  const note = {
    Id: $input.parent().parent().children("td:first").text(),
    title: $input.parent().parent().children("td:first").next().text(),
	  body: $input.parent().parent().children("td:first").next().next().text()};

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
   const html = publicList.map(public => getHtml(public)).join('');
 
   postBody.innerHTML = html;
 }
 
 function getHtml(public) {
   return template
     .replace('{{id}}', public.id)
     .replace('{{title}}', public.title)
     .replace('{{body}}', public.body)
     .replace('{{dataId}}', public.id)
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
  $form.title.value = note.title;
  $form.body.value = note.body;
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
  title: $form.title.value,
  body: $form.body.value
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
 