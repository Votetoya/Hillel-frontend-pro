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
   BTN_EDIT: 'btn-edit',
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
 
 const postPublic = document.querySelector(SELECTOR.POST_TABLE);
 const template = document.querySelector(SELECTOR.TEMPLATE).innerHTML;
 const postBody = document.querySelector(SELECTOR.POST_LIST);
 const inputs = document.querySelectorAll(SELECTOR.INPUTS);
 
 
 postPublic.addEventListener('click', onPostTableClick);
 
 init();
 
 function init() {
 
   PostAPI.getList()
     .then(addPostList)
 }
 
 function onPostTableClick(e) {
   const classList = e.target.classList;
   const publicRow = getPostElement(e.target);
 
   const public = getPost()
 
   if(classList.contains(CLASS.BTN_DEL)) {
     return removePost(publicRow);
   };
   if(classList.contains(CLASS.BTN_ADD)) {
    
     addPost(public)
   }
   if(classList.contains(CLASS.BTN_EDIT)) {
     
    editPost(public,publicRow);
 
    
   }
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
 
 
 function removePost(el) {
 
   return PostAPI.delete(+el.dataset.id)
     .then(() => PostAPI.getList())
     .then(addPostList)
 }
 
 
 
 function addPost(public) {
 
   PostAPI.create(public)
     .then(() => PostAPI.getList())
     .then(addPostList)
 }
 
 function getPostElement(target) {
   return target.closest(HELPERS.POINT + CLASS.POST_ROW);
 }
 
 function editPost(public,el) {
 
 PostAPI.update(el.dataset.id+','+public.title+','+public.body)
      .then(() => PostAPI.getList())
     .then(addPostList)
 }
 
 