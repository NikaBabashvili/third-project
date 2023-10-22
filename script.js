const day1 = document.getElementById("mon");
const day2 = document.getElementById("tue");
const day3 = document.getElementById("wed");
const day4 = document.getElementById("thu");
const day5 = document.getElementById("fri");
const day6 = document.getElementById("sat");
const day7= document.getElementById("sun");
const percent = document.getElementById("percent")
const totalmoney = document.getElementById("totalmoney")
const total = document.getElementById("total")
const up1 = document.getElementById("up1");


up1.style.top = '0px';
up1.style.visibility = 'hidden';

day1.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '7%';
    const day1Height = day1.clientHeight;
    const position = 280 - day1Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + a
});

day1.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});

day2.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '19%';
    const day2Height = day2.clientHeight;
    const position = 280 - day2Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + b
});

day2.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});

day3.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '32%';
    const day3Height = day3.clientHeight;
    const position = 280 - day3Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + c
});

day3.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});

day4.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '44%';
    const day4Height = day4.clientHeight;
    const position = 280 - day4Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + d
});

day4.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});

day5.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '57%';
    const day5Height = day5.clientHeight;
    const position = 280 - day5Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + e
});

day5.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});

day6.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '69%';
    const day6Height = day6.clientHeight;
    const position = 280 - day6Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + f
});

day6.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});

day7.addEventListener('mouseenter', function() {
    up1.style.visibility = 'visible';
    up1.style.position = 'absolute';
    up1.style.left = '82%';
    const day7Height = day7.clientHeight;
    const position = 280 - day7Height;
    
    up1.style.top = position  + 'px';
    up1.innerHTML = "$" + g
});

day7.addEventListener('mouseleave', function() {
    up1.style.visibility = 'hidden';
});




const a = 17.45
const b = 34.91
const c = 52.36
const d = 31.07
const e = 23.39
const f = 43.28
const g = 25.48


const number1 = 4

const divElements = [day1,day2,day3,day4,day5,day6,day7]


day1.style.height = a * number1 + "px"
day2.style.height = b * number1 + "px"
day3.style.height = c * number1 + "px"
day4.style.height = d * number1 + "px"
day5.style.height = e * number1 + "px"
day6.style.height = f * number1 + "px"
day7.style.height = g * number1 + "px"

if (parseInt(day1.style.height) > 190) {
    day1.style.height = "190px";
}
if(parseInt(day2.style.height) > 190) {
    day2.style.height = "190px";}
if(parseInt(day3.style.height) > 190) {
    day3.style.height = "190px";}
if(parseInt(day4.style.height) > 190) {
    day4.style.height = "190px";}
if(parseInt(day5.style.height) > 190) {
    day5.style.height = "190px";}
if(parseInt(day6.style.height) > 190) {
    day6.style.height = "190px";}
if (parseInt(day7.style.height) > 190) {
    day7.style.height = "190px";}
else{

}

divElements.forEach(div => {
    div.style.top = '35px'
});


percent.innerHTML = '+2.4%'
totalmoney.innerHTML = '$478.33'
total.innerHTML = '$921.48'

