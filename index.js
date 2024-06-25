const numArticle = document.querySelector('#num')
const advArticle = document.querySelector('#article')
const newAdviceBtn = document.querySelector('#icon')

const getAdvice = () => {
const url = "https://api.adviceslip.com/advice"
fetch(url)
.then((response) => response.json())
.then((data) => {

numArticle.innerHTML = `${data.slip.id}`;
advArticle.innerHTML = `${data.slip.advice}`;
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
};
newAdviceBtn.addEventListener("click", getAdvice)
