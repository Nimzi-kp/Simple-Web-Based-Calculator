let newcal;

function cliked(val){
    if(newcal){
        document.getElementById("screen").value=""
        newcal=false
    }
    document.getElementById('screen').value+=val
}

function clearScreen(){
    document.getElementById("screen").value=""
    newcal=true
}

function equalCliked(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    newcal=true
}
function backspace() {
    let display = document.getElementById("screen");
    display.value = display.value.slice(0, -1);
}
