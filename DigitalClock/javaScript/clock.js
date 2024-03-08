const showClock = () =>{
    let date = new Date();
    let hour = formatHour(date.getHours());
    let minute = formatHour(date.getMinutes());
    let second = formatHour(date.getSeconds());
    document.getElementById('hour').innerHTML = `${hour}:${minute}:${second}`;

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let textDate = `${weekDay},${day},${month}`;
    document.getElementById('date').innerHTML = textDate;

    document.getElementById('container').classList.toggle('animation')
}

const formatHour = (number) => {
    if(number < 10){
        number = '0' + number;
    }
    return number;
}

setInterval(showClock,1000);