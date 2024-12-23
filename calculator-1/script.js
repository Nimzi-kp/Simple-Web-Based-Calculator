let newCalculation;

function cliked(val){
    if(newCalculation){
        document.getElementById('screen').value=""
        newCalculation=false
        if(val=='.'){
            document.getElementById("screen").value="0"
        }
    }
    document.getElementById('screen').value+=val
}

function clearScreen(){
    document.getElementById("screen").value=""
}

function equalCliked(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    newCalculation=true
}
function backspace() {
    let display = document.getElementById("screen");
    display.value = display.value.slice(0, -1);
}
