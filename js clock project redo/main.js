

// function showTime()
function showTime() {
    // get time date
  let  date = new Date()
   let hours = date.getHours()
   let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    // session
    session = "AM"
    // check hours
    if(hours == 0){
        hours = 12;
    }
    // PM check
    if(hours > 12) {
        hours = hours -12;
        session = "PM"   
    }
    hours = (hours > 10) ? "0" + hours + hours : hours;
    minutes = (minutes > 10) ? "0" + minutes : minutes;
    seconds = (seconds > 10) ? "0" + seconds : seconds;

    // get time
    let time = hours + ":" + minutes + ":" + seconds + "" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);


        
    
}
showTime();