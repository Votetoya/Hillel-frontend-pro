/*  fetch('https://api.github.com/users/Votetoya')
   .then((resp) => resp.json())
   .then((data) => console.log(data.avatar_url, ' - ', data.node_id))  */



/* fetch('https://api.github.com/users/Votetoya');

promise.then((resp) => {
   const json = resp.json();
   return json;
})
.then((data) => {
   console.log(data);
   return data;
}) */

const buttonGet = document.querySelector('#getUserData');
const divcontainer = document.querySelector('#resultInfo');
const inputfield = document.querySelector('#inputUserData');

buttonGet.addEventListener('click', onButtonGetClick);


function onButtonGetClick() {
   fetch('https://api.github.com/users/' + inputfield.value)
   .catch(error => console.log("Error", error.message))
   .then(resp => resp.json()) 
   .then(userdata => divcontainer.innerHTML =  
      `<img src=${userdata.avatar_url}>
      <div>Number of repositories - ${userdata.public_repos}<div>
      <div>Number of followers - ${userdata.followers}<div>
      <div>Number of observed - ${userdata.following}<div>`)
   //.catch(error => alert(error.message))
   //.catch(error => console.log("Error", error.message))
}      
      

   /* .then((userdata) => divcontainer.insertAdjacentHTML('afterbegin', 
      `<img src=${userdata.avatar_url}>
      <div>Number of repositories - ${userdata.public_repos}<div>
      <div>Number of followers - ${userdata.followers}<div>
      <div>Number of observed - ${userdata.following}<div>`)) */
   //.catch (alert("No such user exists"))
/* 
   const qwe = new Promise((resolve, reject) => {
      fetch('https://api.github.com/users/111')
  
      resolve();
  });

  function onButtonGetClick() {
   qwe
   .then((resp) => resp.json())
   .then((userdata) => divcontainer.innerHTML =  
      `<img src=${userdata.avatar_url}>
      <div>Number of repositories - ${userdata.public_repos}<div>
      <div>Number of followers - ${userdata.followers}<div>
      <div>Number of observed - ${userdata.following}<div>`)
      //.catch(alert ("не удалось выполнить...")) //выведет сообщение "не удалось выполнить...")
}   */