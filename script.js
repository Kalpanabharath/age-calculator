let resultcon=document.getElementById('result');
resultcon.style.visibility="hidden"


function getinp(){
    let inp=document.getElementById('inp');
    let userinp=inp.value;
    let inpdate=new Date(userinp);
    let inptime=inpdate.getTime()
    let today=new Date();
    let time=today.getTime();

    let value=time-inptime;
    let sec=Math.floor(value/1000);
    let min=Math.floor(value/(1000*60));
    let hour=Math.floor(value/(1000*60*60));
    let days=Math.floor(value/(1000*60*60*24));
    let week=Math.floor(value/(1000*60*60*24*7));
    let month=Math.floor(value/(1000*60*60*24*30.4375));
    let year=Math.floor(value/(1000*60*60*24*365.25));

    let inset=function(x,y){
        document.getElementById(x).innerHTML=y;
    }
    inset("yearss",year)
    inset("monthss",month)
    inset("weekss",week)
    inset("dayss",days)
    inset("hourss",hour)
    inset("minutess",min)
    inset("secondss",sec)
    resultcon.style.visibility="visible"
    
    

}
