
function date(){
    const d=new Date();
    var hours=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
  var x=(hours>12)?hours-12:hours
  if(hours== 0) x=12
 
  var ap=(hours>12)?"PM":"AM"
 x=check(x);
 min=check(min);
 sec=check(sec);
   // var time=x+":"+min+":"+sec+ap
    document.getElementById('mains').innerHTML=x+":"+min+":"+sec+ap
    setTimeout(date,1000)
}
function check(x){
    if(x<10)
    x="0"+x
    return x;
}

