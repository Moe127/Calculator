/* 
    project Name : calculator.
    description: simple calculator perform simple tasks include (+,-,/,*)
*/

let btns = document.querySelectorAll('.btn');
const display =document.querySelector('.display')
const clear = document.querySelector('.clear');
let ops = "";
let num1 = "";
let num2 = "";
let screen = "";
let c = 0;
let res = 0;
console.log(btns);
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        if(btn.value == '+' || btn.value == '*' || btn.value == '-' || btn.value == '/' || btn.value == '%'){
            if(num1 && num2){
                console.log(num2);
                res =  operate(ops,parseInt(num1),parseInt(num2));
                console.log(res);
                screen = res;
                display.innerHTML = screen;
                ops = btn.value;
                screen += ops;
                display.innerHTML = screen;
                num1 = res;
                num2 = "";
                c = 1;
            }else if(num1 == "")
                display.innerHTML = "Enter number first" 
            else{
                ops = btn.value;
                screen += ops;
                display.innerHTML = screen;
                c=1;
            }
        }
        else if(c==0 && btn.value != "="){
            num1 += btn.value;
            screen += btn.value;
            display.innerHTML = screen;
        }
        else if(c==1 && btn.value != "="){
            if(num2){
                num2 += btn.value;
                screen += btn.value;
                display.innerHTML = screen;
            }
            else{
                num2 += btn.value;
                screen += btn.value;
                display.innerHTML = screen;
            }
        }
        else if(btn.value == "="){
            if(num1 == "" || ops == "")
                display.innerHTML = "Enter opertation first";
            else {
                res =  operate(ops,parseInt(num1),parseInt(num2));
                display.innerHTML = res;
                num1 = "",num2="",res = 0,screen="",c=0;
            }
           
        }
    })
});

clean = ()=>{display.innerHTML = "0",num1 = "",num2="",res = 0,screen="",c=0};
clear.addEventListener('click',clean);
add = (a,b) => a+b;
mul = (a,b) => a*b;
sub = (a,b) => a-b;
mod = (a,b) => a%b;
divide = (a,b) => b == 0 ? "Error can't divide by zero": a/b;

function operate (op,a,b) {
    switch (op) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return sub(a,b);
            break;  
        case "*":
            return mul(a,b);
            break;   
        case "/":
            return divide(a,b);
            break;
        case "%":
            return mod(a,b);
            break;
        default:
            break;
    }
}