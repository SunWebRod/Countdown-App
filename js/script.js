const items = document.querySelectorAll('.countdown-item > h4');
const countdownElement = document.querySelector('.countdown');


let countdownDate = new Date(2025, 10, 10, 14, 35, 0).getTime();

function getCountdownTime() {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    const OneDay = 24 * 60 * 60 * 1000;
    const OneHour = 60 * 60 * 1000;
    const OneMinute = 60 * 1000;

    let days = Math.floor(distance / OneDay);
    let hours = Math.floor((distance % OneDay) / OneHour);
    let minutes = Math.floor((distance % OneHour) / OneMinute);
    let seconds = Math.floor((distance % OneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    items.forEach(function (item, index) {
        item.textContent = values[index];
    });

    if ( distance < 0) {
        clearInterval(countdown)
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло XXXX</h4>"
    }
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();