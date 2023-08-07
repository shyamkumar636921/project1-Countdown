const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");



function UpdateTime(){

    const CurrentYear = new Date().getFullYear();
    const NewYear=new Date(`January 01 ${CurrentYear+1} 00:00:00`);
    
    const CurrentDate=new Date();
    
    const Diff=NewYear-CurrentDate;
    const d=Math.floor(Diff/1000/60/60/24);
    const h=Math.floor((Diff/1000/60/60)%24);
    const m=Math.floor((Diff/1000/60)%60);
    const s=Math.floor((Diff/1000)%60);
    const ms=Math.floor(Diff%1000);
   // console.log(d+" "+h+" "+m+" "+s);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;

    
}
UpdateTime();
setInterval(UpdateTime,1000);



