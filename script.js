function  clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

  
    hours.innerHTML= a;
    minutes.innerHTML= b;
    seconds.innerHTML= c;

    if(a>12){
        let pm=a-12;
        if(pm<=9)hours.innerHTML="0"+pm;
        else hours.innerHTML=pm;
        am.innerHTML="PM";
    }
    else if( a==12 && b>0){
            hours.innerHTML=a;
            am.innerHTML="PM"
   }
    
    else{
        if(a<=9)hours.innerHTML="0"+a;
        else hours.innerHTML=a;
        am.innerHTML="AM"
    }
}

setInterval(clock,1000);
function Makediv(){
    var container=document.createElement("div");
    container.className="block";
    container.id="dynamic-block"; 
    document.getElementById("maincontainer").appendChild(container);

    var invalue=document.getElementById("set-wakeup-time");
    var invalue1=document.getElementById("set-lunch-time");
    var invalue2=document.getElementById("set-nap-time");
     
    
    var value=invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Wake up time" +" "+ value+

    "<br/> Lunch Time" + invalue1.options[invalue1.selectedIndex].text+
    
    "<br/> Nap Time" + invalue2.options[invalue2.selectedIndex].text;
}

function settime(){
    var x=document.getElementById("set-wakeup-time").value;
    var y=document.getElementById("set-lunch-time").value;
    var z=document.getElementById("set-nap-time").value;
    var hour=new Date().getHours();
   
    if(x==hour)
    {
        document.getElementById("imagecontainer").style.backgroundImage="url(wakeup.jpg)";
        document.getElementById("textcontainer").innerHTML="Good Morning!!";
        
    }
   else if(y==hour)
    {
        document.getElementById("imagecontainer").style.backgroundImage="url(lunchh.jpg)";
        document.getElementById("textcontainer").innerHTML="Lunch Time!!";
        
    }
   else if(z==hour)
    {
        document.getElementById("imagecontainer").style.backgroundImage="url(night.jpg)";
        document.getElementById("textcontainer").innerHTML="Nap Time!!";
        
    }
     Makediv();
}


