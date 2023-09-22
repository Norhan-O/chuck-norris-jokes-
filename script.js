


const jokeBtn = document.getElementById('joke-btn');
const jokeEl = document.getElementById('joke');





const  getJoke = () =>  {

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if(this.status === 200) {
    jokeEl.innerHTML = JSON.parse(this.responseText).value; 
   } else { 
    jokeEl.innerHTML = 'something went wrong (Not funny at all)';
   }
}

};

xhr.send();
};








jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded',getJoke);

