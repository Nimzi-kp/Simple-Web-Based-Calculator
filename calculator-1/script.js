function cliked(val){
    document.getElementById('screen').value+=val
}

function clearScreen(){
    document.getElementById("screen").value=""
}

function equalCliked(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function backspace() {
    let display = document.getElementById("screen");
    display.value = display.value.slice(0, -1);
}
