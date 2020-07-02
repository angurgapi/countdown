function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t/1000/60/60) % 60),
        days = Math.floor((t/(1000*60*60*24)));
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'days': days
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        days = timer.querySelector('.days'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        days.textContent = t.days + 'd';
        hours.textContent = t.hours + 'h';
        minutes.textContent = t.minutes + 'm';
        seconds.textContent = t.seconds + 's';
        if (t.seconds < 10) {
            seconds.textContent = '0' + t.seconds + 's';
        }
        if (t.minutes < 10) {
            minutes.textContent = '0' + t.minutes + 'm';
        }
        if (t.hours < 10) {
            hours.textContent = '0' + t.hours + 'h';
        }
        if (t.days < 10) {
            days.textContent = '0' + t.days + 'd';
        }

        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
let cntBtn = document.getElementById('countdown')
cntBtn.addEventListener('click',function(){
    let endpoint = document.querySelector(".fill-value").value;
    console.log(endpoint);
    setClock('timer', endpoint);
})

