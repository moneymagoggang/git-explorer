const mainEl = document.querySelector('.main')


const formEl = document.createElement("form");
const inputEl = document.createElement('input');
const submitButtonEl = document.createElement('button');

formEl.classList.add('search');
inputEl.classList.add('search-input');
submitButtonEl.classList.add('search-button');

inputEl.setAttribute('name','name');
inputEl.setAttribute('placeholder','github nickname of a person')
submitButtonEl.setAttribute('type','submit');

formEl.addEventListener('submit',async (e) =>{
   e.preventDefault();

   const inputValue = Object.fromEntries(new FormData(e.target));
   const response = await fetch(`https://api.github.com/users/${inputValue.name}`);

   
   
   if (response.ok){
   const data = await response.json();
      wrapper.appendChild(createCard(data));
      mainEl.appendChild(wrapper);
   } else {
      alert('User is not found ')
   }
   
});

formEl.appendChild(inputEl);
formEl.appendChild(submitButtonEl);
mainEl.appendChild(formEl);

submitButtonEl.innerHTML = "FIND";

const wrapper = document.createElement('div');

function createCard(profileData) {
const element = document.createElement('div');
element.classList.add('card');
element.innerHTML = `
<img class="search-image" src=${profileData.avatar_url}></img>
<p id="search-name"><span>Name:</span>${profileData.name}</p>
<p id="search-loc"><span>Location:</span>${profileData.location}</p>
<p id="search-bio"><span>About:</span>${profileData.bio}</p>
<p id="search-reg-data"><span>Reg Data:</span>${profileData.created_at}</p>
`
submitButtonEl.addEventListener('click', () =>{
   wrapper.innerHTML = '';
})
element.appendChild(deleteCard() )
return element;

};
function deleteCard() {
   const element = document.createElement('button');
   element.classList.add('delete-button');
   element.innerHTML = "HIDE";
   element.addEventListener('click',(e) =>{
      wrapper.innerHTML = '';
   })
   return element;
};

// theme change

const button = document.getElementById("bg-btn");
const title = document.getElementById('title');
const text = document.getElementById('text');

button.addEventListener("click", () =>{
   if(document.body.style.backgroundColor == "white"){
      console.log("white");
      document.body.style.backgroundColor = '#1b1b1b';
      document.getElementById('title').style.color = "white";
      document.getElementById('text').style.color = "white";
      document.getElementById('light').style.display = "none";
      document.getElementById('dark').style.display = "block";
      document.getElementById("search-name").style.color = "white";
      document.getElementById('search-loc').style.color = "white";
      document.getElementById('search-bio').style.color = "white";
      document.getElementById('search-reg-data').style.color = "white";
   } else {
      document.body.style.backgroundColor = 'white';
      document.getElementById('title').style.color = "black";
      document.getElementById('text').style.color = "black";
      document.getElementById('light').style.display = "block";
      document.getElementById('dark').style.display = "none";
      document.getElementById("search-name").style.color = "black";
      document.getElementById('search-loc').style.color = "black";
      document.getElementById('search-bio').style.color = "black";
      document.getElementById('search-reg-data').style.color = "black";
   }
  

});