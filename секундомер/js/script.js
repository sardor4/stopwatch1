

// Часы

const hour = document.querySelector('.h'),// Подключается к часовой стрелке
      min = document.querySelector('.m'),// Подключается к минутной стрелке
      sec = document.querySelector('.s'),// Подключается к секундной стрелке
      namberHour = document.querySelector('.hours'),
      namberMinutes = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
    second = time.getSeconds()*6,
    minutes = time.getMinutes()*6,
    hours = time.getHours()*30;

    if (second == 0) {

    sec.style = `
    transform: rotate(${second}deg);
    transition: 0s linear`

    } else{

    sec.style = `
    transform: rotate(${second}deg);
    transition: 1s linear`

    }
    
    hour.style = `
    transform: rotate(${hours}deg);
    transition: 1s linear`
    
    min.style = `
    transform: rotate(${minutes}deg);
    transition: 1s linear`
   
    namberHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    namberMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    setTimeout(() => clock(), 1000);

}

clock();


// active

const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (){
        links[0].classList.remove('active');
        links[1].classList.remove('active');
        tabs[0].classList.remove('active');
        tabs[1].classList.remove('active');

        this.classList.add('active');
        tabs[i].classList.add('active');
    })
    
}


// Секундомер

const hours = document.querySelector('.stopwatch__hours'),
      minutes = document.querySelector('.stopwatch__minutes'),
      seconds = document.querySelector('.stopwatch__seconds'),
      startTab = document.querySelector('.stopwatch__btn'),
      resetTab = document.querySelector('.resetwatch__btn');

startTab.addEventListener('click', function() {
    if ( startTab.innerHTML == 'Stop') {
        startTab.innerHTML = 'Start';
        stop();
    } else{
        startTab.innerHTML = 'Stop';
        start();
    }
})

var tm;
function start() {
  tm = setInterval(() => timer(), 1000);
}
function stop() {
    clearInterval(tm)
}

var second = 0;
var mins = 0;
var hourc = 0;

function timer() {
    ++second;
    if (second == 60) {
        mins = ++mins;
        second = 0;
    } else if (mins == 60) {
        mins = 0;
        hourc = ++hourc;
    }
    seconds.innerHTML = second;
    minutes.innerHTML = mins;
    hours.innerHTML = hourc;
}

resetTab.addEventListener('click', function (){
    second = 0;
    mins = 0
    hourc = 0;
    seconds.innerHTML = "0";
    minutes.innerHTML = "0";
    hours.innerHTML = "0";
})