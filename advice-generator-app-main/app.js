
let advNum = document.getElementById("advNum");
let advBody = document.getElementById("advBody");
let dice = document.getElementById("dice");
let loader = document.getElementById("loader");
let adv = document.getElementById("adv");


async function fetchAdvice(){
    adv.classList.add('none');
    loader.classList.add('display');
    let url = 'https://api.adviceslip.com/advice';
    try{
        let response = await fetch(url);
        return await response.json();
    } catch (error){
        console.log(error);
    }
}

async function renderAdvice(){
    let data = await fetchAdvice();
    console.log(data.slip.id);
    loader.classList.remove('display');
    adv.classList.remove('none');
    advNum.textContent = data.slip.id;
    advBody.innerHTML = `"${data.slip.advice}"`;

}

renderAdvice();

dice.addEventListener("click", renderAdvice);




