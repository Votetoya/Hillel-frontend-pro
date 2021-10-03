const buttonGet = document.querySelector('#getUserData');
const divcontainer = document.querySelector('#resultInfo');
const inputfield = document.querySelector('#inputUserData');

buttonGet.addEventListener('click', onButtonGetClick);


function onButtonGetClick() {
    getGitInfo()

   .then(userdata => divcontainer.innerHTML =  
      `<img src=${userdata.avatar_url}>
      <div>Number of repositories - ${userdata.public_repos}<div>
      <div>Number of followers - ${userdata.followers}<div>
      <div>Number of observed - ${userdata.following}<div>`)
   //.catch(error => alert(error.message))
} 

function getGitInfo() {
  
    return fetch('https://api.github.com/users/' + inputfield.value)
      .then((res) => {
        if (!res.ok) { throw response }
        return res.json()
      })
      .then((info) => info)
      .catch( err => {
        console.log(err)
        alert('This user does not exist')
      })
  }