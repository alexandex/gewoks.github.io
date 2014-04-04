    //Текущее время timeZoneOffset=null
    //Текущее время в Москве timeZoneOffset=+4
    //timeZoneOffset - временная зона
    function Clock(timeZoneOffset) {

        var time = new Date();

        if (timeZoneOffset !=null){
            time.setHours( time.getHours() + timeZoneOffset, time.getMinutes() + time.getTimezoneOffset());
        }

        var  month_num = time.getMonth();
        var  day = time.getDate();
        var  hours = time.getHours();
        var  minutes = time.getMinutes();
        var  seconds = time.getSeconds();

        month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
                "июля", "августа", "сентября", "октября", "ноября", "декабря");

        if (day <= 9) day = "0" + day;
        if (hours <= 9) hours = "0" + hours;
        if (minutes <= 9) minutes = "0" + minutes;
        if (seconds <= 9) seconds = "0" + seconds;

        this.getDay = function () {
            return day;
        };
        this.getMonth = function () {
            return month[month_num];
        };
        this.getYear = function () {
            return time.getFullYear();
        };
        this.getHours = function () {
            return hours;
        };
        this.getMinutes = function () {
            return minutes;
        };
        this.getSeconds = function () {
            return seconds;
        };

    }



    onload = function () {
        setInterval(function () {
            var timeMoscow = new Clock(+4);
            var timeReal = new Clock();

           /* document.getElementById("dayMoscow").innerHTML =timeMoscow.getDay() + " " + timeMoscow.getMonth() + " " + timeMoscow.getYear();
            document.getElementById("dayReal").innerHTML =    timeReal.getDay() + " " +   timeReal.getMonth() + " " +   timeReal.getYear();*/

            document.getElementById("timeMoscow").innerHTML =timeMoscow.getHours() + ":" + timeMoscow.getMinutes() + ":" + timeMoscow.getSeconds();
            document.getElementById("timeReal").innerHTML = timeReal.getHours() + ":" + timeReal.getMinutes() + ":" + timeReal.getSeconds();
        }, 100);
    }
