var start=false,timer;
document.getElementById("sw").onclick=()=>{
  start=true;
start_watch();
   
}
var hrs=0,sec=0,min=0;
function star(){
  if(start==true){
 
  sec++;
  
  if(sec==60)
  {
    min++;
   
    sec=0;
  }
 
  if(min==60) {
    hrs++;
    min=0;
    sec=0;
  }

  document.getElementById("time").innerHTML=check(hrs)+":"+check(min)+":"+check(sec);
  console.log("hrs"+hrs+"min"+min+"sec"+sec)
  
  
}
}
function start_watch(){
  clearInterval(timer)
timer=setInterval(star,1000);
}
function stop(){
//  document.getElementById("time").innerHTML="00:00:00"
clearInterval(timer)
  start=false;
}
function reset(){
  //clearInterval(timer)
    document.getElementById("time").innerHTML="00:00:00"
    hrs=0; min=0; sec=0;
  start=false;
}

function check(x){
  if(x.length()==1) return "0"+x;
}