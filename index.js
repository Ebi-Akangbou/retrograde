const countTimer = setInterval( function(){
    const endTime = new Date("2025-06-16T23:59:59Z").getTime();        
    const CurrentTime = new Date().getTime();
    const distance = endTime - CurrentTime;
    const timeinDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const timeinHours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    const timeinMinutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    const timeinSeconds = Math.floor((distance % (1000 * 60)) /(1000));
document.querySelector('#days').innerHTML= `${0}${timeinDays}`;
document.querySelector('#hours').innerHTML= timeinHours;
document.querySelector('#minutes').innerHTML= timeinMinutes;
document.querySelector('#seconds').innerHTML= timeinSeconds;
   


    if(timeinDays  <= 0 && timeinHours <=0 && timeinMinutes <= 0 && timeinSeconds <= 0 ){
    clearInterval(countTimer);
    document.querySelector('.qoute').innerHTML= "Retrograde is active";
    document.querySelector('#days').innerHTML= `${0}`;
document.querySelector('#hours').innerHTML= 0
document.querySelector('#minutes').innerHTML= 0
document.querySelector('#seconds').innerHTML= 0
    }
    
    
    }, 1000)
    
 
const copyright = new Date().getFullYear()
document.querySelector('#copyright').innerHTML= ` Retrograde &copy; ${copyright}`; 


