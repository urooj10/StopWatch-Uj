var min = 0;
var sec = 0;
var msec = 0;
var mHeading = document.getElementById("min");
var sHeading = document.getElementById("sec");
var msHeading = document.getElementById("milisec");
function timer()
{
    msec++;
    msHeading.innerHTML = msec;
    if(msec >= 100)
    {
        sec++;
        sHeading.innerHTML = sec;
        msec = 0;
    }
    if(sec >= 60 )
    {
        min++;
        mHeading.innerHTML = min;
        sec = 0;
    }
}
var interval ;

function Start()
{
    interval = setInterval(timer,10);
    var s = document.getElementById("start");
    var s1 = document.getElementById("stop");
    var s2 = document.getElementById("reset");
    s.disabled = true;
    s1.disabled = false;
    s2.disabled = false;
}
function Stop()
{
    clearInterval(interval);
    var s = document.getElementById("start");
    var s1 = document.getElementById("stop");
    var s2 = document.getElementById("reset");
    s.disabled = false;
    s1.disabled = true;
    s2.disabled = false;
}
function Reset()
{
    min =0;
    sec = 0;
    msec = 0;
 mHeading.innerHTML = min;
 sHeading.innerHTML = sec;
 msHeading.innerHTML = msec;  
 clearInterval(interval); 
 var s = document.getElementById("start");
 var s1 = document.getElementById("stop");
 var s2 = document.getElementById("reset");
 s.disabled = false;
 s1.disabled = false;
 s2.disabled = true;
}
