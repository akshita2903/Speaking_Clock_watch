//func to chek if hours/min/sec is single digit the add zero before it
function check(x){
    if(x<10)
    x="0"+x
    return x;
}
document.getElementById("ac").onclick=()=>{
  
   alarmset();
   
}
//set hours select option
function sethours(){
    var hrs=document.getElementById("hours");
    var hours=12;
    for(var i=1;i<=hours;i++){
        hrs.options[i-1]=new Option(check(i));
    }

}
//set min select option
function setmin(){
    var min=document.getElementById("min");
    var mins=60;
    for(var i=1;i<=mins+1;i++){
        min.options[i-1]=new Option(check(i-1));
    }
}
//set seconds select option
function setsec(){
    var sec=document.getElementById("sec");
    var secs=60;
    for(var i=1;i<=secs+1;i++){
        sec.options[i-1]=new Option(check(i-1));
    }
}
function setampm(){
   var ampm= document.getElementById("ampm")
   ampm.options[0]=new Option("AM");
   ampm.options[1]=new Option("PM");
}
//calling functions
 sethours();
setmin();
setsec();
setampm();
function alarmset(){
    gettime();
}
//function to get alarm time set by user
function gettime(){
    var hrs=document.getElementById("hours");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    var ampm= document.getElementById("ampm");
    var sh = hrs.options[hrs.selectedIndex].value;
    var sm = min.options[min.selectedIndex].value;
    var ss = sec.options[sec.selectedIndex].value;
    var sap = ampm.options[ampm.selectedIndex].value;
    var time=sh+":"+sm+":"+ss+""+sap;
    document.getElementById('hours').disabled =true;
	document.getElementById('min').disabled = true;
	document.getElementById('sec').disabled = true;
	document.getElementById('ampm').disabled = true;
    document.getElementById("why").disabled=true;
    document.getElementById("al").innerHTML=`<label for="clr"><input type="radio" id="clr" onclick="clear_alarm()">CLR ALARM</label>`
    check_for_alarm_time(time);
}
function check_for_alarm_time(time){
  setInterval(function (){  const d=new Date();
    var hours=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
  var x=(hours>12)?hours-12:hours
  if(hours== 0) x=12
 
  var ap=(hours>12)?"PM":"AM"
 x=check(x);
 min=check(min);
 sec=check(sec);
  currtime=x+":"+min+":"+sec+""+ap
      if(currtime==time)
    {
        var message=document.getElementById("why").value;
        if (message && 'speechSynthesis' in window) {
            // Speech Synthesis supported 🎉
            var msg = new SpeechSynthesisUtterance();
    
    
    msg.text="Hey Wake Up! Its's time to do"+message
    window.speechSynthesis.speak(msg);
           }else{
             // Speech Synthesis Not Supported 😣
             alert("Sorry, your browser doesn't support text to speech!");
           }
    }


},1000);

}
function clear_alarm(){
    
    document.getElementById('hours').disabled = false;
	document.getElementById('min').disabled = false;
	document.getElementById('sec').disabled = false;
	document.getElementById('ampm').disabled = false;
    document.getElementById("al").innerHTML=`<label for="ac" id="al"><input type="radio" name="clock" id="ac" onclick="alarmset()" >SET ALARM</label>`
    document.getElementById("why").disabled=false;
    document.getElementById("why").value=""
}

