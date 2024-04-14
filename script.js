function updateClock(){


    let date = new Date();

    let datee = date.getDate();
    let Month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();
    switch (Month) {
        case 0:
            Month = "January";
            break;
        case 1:
            Month = "February";
            break;
        case 2:
            Month = "March";
            break;
        case 3:
            Month = "April";
            break;
        case 4:
            Month = "May";
            break;
        case 5:
            Month = "June";
            break;
        case 6:
            Month = "July";
            break;
        case 7:
            Month = "August";
            break;
        case 8:
            Month = "September";
            break;
        case 9:
            Month = "October";
            break;
        case 10:
            Month = "November";
            break;
        case 11:
            Month = "December";
            break;
    
        default:
            break;
    }

    switch (day) {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 0:
            day = "Sunday"
            break;
    
        default:
            break;
    }

    let hours = date.getHours().toString().padStart(2,0);
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);
    let meridian;
    meridian =  hours<12 ? 'AM' : "PM";
    
    let Clock = `${hours}:${minutes}:${seconds} ${meridian}`
    let fulldate = `${datee} ${Month} ${year} ${day}`
    document.querySelector(".clock").textContent = Clock;
    document.querySelector(".date").textContent = fulldate;
    
}
updateClock();
setInterval(updateClock, 1000);

