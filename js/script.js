const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const choice = document.getElementById('choice');
const main = document.querySelector('main');
let bomba;



/*onclick = () => {
    setTimeout(() =>  {
    console.log('click')
    console.log(userInput.value)
}, 1000); };*/

addEventListener('keydown', function(enter){
    if(enter.key === 'Enter'){
        setTimeout(() =>  {
            bomba = Math.ceil(Math.random() * 3);
            if (userInput.value == bomba) {
                result.innerHTML = 'Has ganado <i class="fa-solid fa-face-smile"></i>';
                choice.innerHTML = `Tu elección ha sido ${userInput.value} y la elección del ordenador ha sido ${bomba}`;
            }
            else {
                result.innerHTML = 'Has perdido <i class="fa-solid fa-face-sad-tear"></i>';
                choice.innerHTML = `Tu elección ha sido ${userInput.value} y la elección del ordenador ha sido ${bomba}`;
            }
            }, 6000);
            

    }

    let count = 6;
    const timer = setInterval(() => {
        count--;
        countdown.innerHTML = `Cuenta atrás: ${count} segundos`;
        if (count === 0) {
            clearInterval(timer);
        }}, 1000);
        
    })
    
        
    

restart.addEventListener('click', () => {
    countdown.innerHTML = '';
    result.innerHTML = '';
    userInput.value = 0;
    count = 6;
    choice.innerHTML = '';

})
