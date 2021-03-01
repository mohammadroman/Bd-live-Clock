function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secends = date.getSeconds();
    let timeFormat = "AM";

    if(hours === 0){

        hours = 12;
    }

    if(hours > 12){

        hours = hours - 12;
        timeFormat = "PM";
    }

    hours = hours < 10? '0' + hours : hours;
    minutes = minutes < 10? '0' + minutes : minutes;
    secends = secends < 10? '0' + secends : secends;


    let finalTime = `${hours}:${minutes}:${secends}`;

    document.querySelector('#time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;
}
setInterval(digitalClock,1000)

