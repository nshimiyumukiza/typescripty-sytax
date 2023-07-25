function graides(){
    let less1=parseInt(document.querySelector('.pro').value);
    let less2=parseInt(document.querySelector('.alg').value);
    let less3=parseInt(document.querySelector('.wap').value);
    let grades=((less1+less2+less3)/3);
    document.querySelector('.averege').innerHTML=grades;
 
    if(less1!==less1 || less2!==less2 || less3!==less3)
    {
document.querySelector('.grades').innerHTML='Please enter a number'
    }
else if(grades<=100 && grades>=80){
    document.querySelector('.grades').innerHTML='Grade A';
}
else if(grades<=79 && grades>=70){
    document.querySelector('.grades').innerHTML='Grade B';
    
}
else if(grades<=69 && grades>=60){
    document.querySelector('.grades').innerHTML='Grade c';
}
else if(grades<=59 && grades>=50){
    document.querySelector('.grades').innerHTML='Grad D';
}
else if(less1>100 || less1<0 || less2>100 || less2<0 || less3>100 || less3<0){
    let hun='marks must be bellow hundred and bove to zero';
    document.querySelector('.grades').innerHTML=hun;
}

else {
    document.querySelector('.grades').innerHTML='Fail';
}
}