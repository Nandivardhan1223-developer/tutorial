let seconds=document.querySelector("#seconds");
let minutes=document.querySelector("#minutes");
let strtbtn=document.querySelector("#strtbtn");
let stopbtn=document.querySelector("#stopbtn");
let resetbtn=document.querySelector("#resetbtn");
let mytimer;
let counter=0;
let my_seconds=0;
let my_minutes=0;
strtbtn.disabled=false;
stopbtn.disabled=true;
resetbtn.disabled=true;

resetbtn.addEventListener("click",function(){
    strtbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=true;
    clearInterval(mytimer);
    minutes.innerHTML="00";
    seconds.innerHTML="00";
    counter=0;
    my_seconds=0;
    my_minutes=0;
})
stopbtn.addEventListener("click",function(){
    strtbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=false;
    clearInterval(mytimer);
})
strtbtn.addEventListener("click",function(){
    strtbtn.disabled=true;
    stopbtn.disabled=false;
    resetbtn.disabled=false;
    mytimer=setInterval(function(){
        counter++;
        my_seconds=counter;
        seconds.innerHTML=my_seconds;
        if(my_seconds>59){
            seconds.innerHTML="00";
            counter=0;
            my_minutes++;

        }else if(my_seconds>9){
            seconds.innerHTML=my_seconds;

        }else(
            seconds.innerHTML= "0" + my_seconds
        )
        if(my_minutes>59){
            minutes.innerHTML="00";
            seconds.innerHTML="00";
            counter=0;
            my_seconds=0;
            my_minutes=0;
            clearInterval(mytimer);

        }else if(my_minutes>9){
            minutes.innerHTML=my_minutes;

        }else(
            minutes.innerHTML= "0" + my_minutes
        )

    },1)
})