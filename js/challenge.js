//timer functionalities
const pause = document.getElementById("pause")
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const counter = document.getElementById('counter')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const buttons = [plus, minus, submit, heart]
let span = document.createElement('span')

//timer conditions
let time = 0;
let isPaused = false;


//timer continues to run
let running = setInterval('startRunning()', 1000)


//the timer increments when isPaused is false
function startRunning(){
    if(isPaused === false){
        time++
        counter.innerText = `${time}`
        span.innerHTML = 0
    }
}

// minus button
minus.addEventListener('click', function(){
    counter.innerText = `${time --}`
} )


// plus button 
plus.addEventListener('click', function(){
    counter.innerText = `${time++}`
})

//heart button
heart.addEventListener('click',appendLike )

function appendLike(e) {
let likes = document.querySelector('.likes')
let currentTime = counter.innerText
span.innerHTML++
let li = document.getElementById(currentTime)
if(li) {
    let text = li.innerText;
    let textArray = text.split(" ");
    let number = Number(textArray.slice(-2,-1));
    li.innerHTML = `${currentTime} has been liked ${number + 1} times`;
} else {
    let li = document.createElement('li');
    li.setAttribute("id",currentTime)
    likes.appendChild(li);
    li.innerHTML = `${currentTime} has been liked 1 time`;
}
}

//submit button
submit.addEventListener('click', appendComment)

function appendComment(event) {
    event.preventDefault()
    let list = document.getElementById('list')
    let p = document.createElement('p')
    list.appendChild(p)
    let content = document.getElementById('comment-input')
    p.innerHTML = `${content.value}`
    content.value = ''
}

//pause button
pause.addEventListener('click', function() {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        buttons.forEach(function(el) { 
            el.disabled = true;
        });
        isPaused = !isPaused;
    } else {
        pause.innerText = 'pause';
        buttons.forEach(function(el) { 
            el.disabled = false;
        });
        isPaused = !isPaused;
    }
})