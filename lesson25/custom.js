const URLPHOTOS = 'https://jsonplaceholder.typicode.com/photos?albumId';
  
const SELECTOR = Object.freeze({
    TEMPLATE_POSTS: '#postsTemplate',
    TEMPLATE_PHOTOS: '#photosTemplate',
    DESCR_LIST: '#descr-list',
    LIST_PHOTO: '#list-photo',
  });

const CLASS = Object.freeze({
    ALBUM: 'album-title',
    ACTIVE: 'active',
    ALBUM_ID: 'data-id',
  })
  
const PLACEHOLDER = Object.freeze({
    DATA_ID: '{{album-id}}',
    TITLE: '{{title}}',
    PHOTO_URL: '{{photo-url}}',
    PHOTO_ID: '{{photo-id}}',
    TITLE_IMG: '{{title-img}}',
  });
  
const TemplatePosts = document.querySelector(SELECTOR.TEMPLATE_POSTS).innerHTML;
const TemplatePhotos = document.querySelector(SELECTOR.TEMPLATE_PHOTOS).innerHTML;
const DescrList = document.querySelector(SELECTOR.DESCR_LIST);
const ListPhoto = document.querySelector(SELECTOR.LIST_PHOTO);

  function init() {
    TypicodeAPI.getList()
      .then(addAlbumsList)
      .catch((e) => alert(e.message))
  }

  init();
  
  function addAlbumsList(gallery) {
    const htmlAlbums = gallery.map(post => getHtmlPosts(post)).join('');
  
    DescrList.innerHTML = htmlAlbums;
  
    const firstAlbum = DescrList.firstElementChild;
  
    firstAlbum.classList.add(CLASS.ACTIVE);
    addAlbumPhotos(firstAlbum);
  }
  
  function getHtmlPosts(post) {
    return TemplatePosts
      .replace(PLACEHOLDER.TITLE, post.title)
      .replace(PLACEHOLDER.DATA_ID, post.id)
  }
  
  DescrList.addEventListener('click', onGalleryListClick);
  
  function onGalleryListClick(e) {
    addActiveAlbum(e);
  }
  
  function addActiveAlbum(e) {
    const album = getAlbum(e.target);
    const activeEl = findActiveItem();
  
    activeEl.classList.remove(CLASS.ACTIVE);
    album.classList.add(CLASS.ACTIVE);
    addAlbumPhotos(album);
  }
  
  function getAlbum(target) {
    return target.closest('.' + CLASS.ALBUM);
  }
  
  function findActiveItem() {
    return DescrList.querySelector('.' + CLASS.ACTIVE);
  }
  
  function addAlbumPhotos(album) {
    const albumId = album.getAttribute(CLASS.ALBUM_ID);
  
    fetch(`${URLPHOTOS}=${albumId}`)
    .then((response) => response.json())
    .then((photos) => photos)
    .then(addAlbumList)
  }
  
  function addAlbumList(photos) {
    const htmlPhotos = photos.map(photo => getHtmlPhoto(photo)).join('');
  
    ListPhoto.innerHTML = htmlPhotos;
  }
  
  function getHtmlPhoto(photo) {
    return TemplatePhotos
      .replace(PLACEHOLDER.PHOTO_URL, photo.thumbnailUrl)
      .replace(PLACEHOLDER.PHOTO_ID, photo.id)
      .replace(PLACEHOLDER.TITLE_IMG, photo.title)
  }