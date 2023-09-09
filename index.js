setInterval(()=>
{
    d=new Date();
    hrs=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();

    if(hrs>=12)
    {hrs=hrs-12;}

    rotHrs=(30*hrs)+(0.5*min);
    rotMin=(6*min)+(0.1*sec);
    rotSec=6*sec;

    document.getElementById("hour").style.transform=`rotate(${rotHrs}deg)`;
    document.getElementById("min").style.transform=`rotate(${rotMin}deg)`;
    document.getElementById("sec").style.transform=`rotate(${rotSec}deg)`;

}
    ,1000)