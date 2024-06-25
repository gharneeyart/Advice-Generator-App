const numArticle = document.querySelector('#num')
const advArticle = document.querySelector('#article')
const newAdviceBtn = document.querySelector('#icon')
const loader = document.getElementById("loader");

const getAdvice = () => {
    loader.style.display = "block";  
    advArticle.style.display = "none";  
const url = "https://api.adviceslip.com/advice"
fetch(url)
.then((response) => response.json())
.then((data) => {
loader.style.display = "none"; 
advArticle.style.display = "inline";  
numArticle.innerHTML = `${data.slip.id}`;
advArticle.innerHTML = `${data.slip.advice}`;
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    loader.style.display = "none";  
    advArticle.style.display = "inline";  
    advArticle.textContent = "An error occurred. Please try again.";
});
};
newAdviceBtn.addEventListener("click", getAdvice)
getAdvice();
