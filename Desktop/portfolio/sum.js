// let num1=parseInt(prompt('enter num1'));
// let num2=parseInt(prompt('enter num2'));
// let sum=num1*num2;
// console.log(sum);
function date(){
    let date=Date();
    document.querySelector('p').innerHTML =date;
}
function result(){
    let num1=parseInt(document.querySelector('.nmbr1').value);
    let num2=parseInt(document.querySelector('.nmbr2').value);
    let result=num1+num2;
    document.querySelector('.result').innerHTML=result;
    
}
function sub(){
    let num1=parseInt(document.querySelector('.nmbr1').value);
    let num2=parseInt(document.querySelector('.nmbr2').value);
    let sub=num1-num2;
    document.querySelector('.result').innerHTML=sub;
    
}
function mult(){
    let num1=parseInt(document.querySelector('.nmbr1').value);
    let num2=parseInt(document.querySelector('.nmbr2').value);
    let mult=num1*num2;
    document.querySelector('.result').innerHTML=mult;
    
}
function div(){
    let num1=parseInt(document.querySelector('.nmbr1').value);
    let num2=parseInt(document.querySelector('.nmbr2').value);
    let div=num1/num2;
   document.querySelector('.result').innerHTML=div;
    
}