
    
    let result;
   let num1=parseInt(prompt('enter first namber'));
   let operator=prompt('enter operator (either +,-,* or/): ');
   let num2=parseInt(prompt('enter first namber'));
  
   switch(operator){
case '+':
    result=num1+num2;
  console.log(`${num1} + ${num1} = ${result}`);
break;
case '-':
    result=num1-num2;
    console.log(`${num1} - ${num1} = ${result}`);
break;
case '*':
    result=num1*num2;
    console.log(`${num1} * ${num1} = ${result}`);
break;
case '/':
    result=num1/num2;
    console.log(`${num1} / ${num1} = ${result}`);
break;

default:
    console.log('invalid operator')
   }




