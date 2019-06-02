function renderTime() {
    var currentdate = new Date();
    var year = currentdate.getYear();
    if (year < 1000) {
        year += 1900
    }
    var day = currentdate.getDay();
    var month = currentdate.getMonth();
    var date = currentdate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    
    var myDate = document.getElementById("clockdisplay");
    myDate.textContent = ""+dayarray[day]+ "," +day+ "," +montharray[month]+ " " +year;
    myDate.innerText = ""+dayarray[day]+ "," +day+ "," +montharray[month]+ " " +year;
    
    setTimeout("renderTime()", 1000);
}

renderTime();