let newCalculation=true;
let ans;
let oprat=0;
let temp;
let convert;

function clikedNum(val){
    if(newCalculation){
        document.getElementById('screen').value=""
        newCalculation=false
        if(val=='.'){
            document.getElementById("screen").value="0"
        }
    }
    document.getElementById('screen').value+=val
}


function Calculate(num1,num2,op){
    switch(op) {
        case '+':
            return num1+num2
            break
        case '-':
            return num1-num2
        case '*':
            return num1*num2
        case '/':
            if(num2 != 0){
                return num1/num2
            }else{
                document.getElementById("screen").value='Zero Error'
            }
            break
        default:
            ans=0    
      }
}


function clikedOpr(val){
    if (oprat==0){
        oprat=val
        convert=document.getElementById('screen').value
        ans=parseFloat(convert);
        newCalculation=true
    }else{
        convert = document.getElementById('screen').value
        temp = parseFloat(convert);
        console.log(ans+temp)
        ans = Calculate(ans,temp,oprat)
        newCalculation=true
    }
}



function equalCliked(){
    convert = document.getElementById("screen").value
    temp = parseFloat(convert);
    ans = Calculate(ans,temp,oprat)
    document.getElementById("screen").value=ans
    newCalculation = true
    oprat=0
}





function clearScreen(){
    document.getElementById("screen").value=""
    oprat=0
}

function backspace() {
    let display = document.getElementById("screen");
    display.value = display.value.slice(0, -1);
}
