function history(msg) {
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    var msg_ = document.createTextNode(msg);
    li.appendChild(msg_);
    ul.appendChild(li);
}

function calc() {
    exp = document.getElementById("exp").value;

    if (exp) {
        try {
            ans = eval(exp);
            document.getElementById("exp").value = ans;
            history(exp + " = " + ans)
        }
        catch (e) {
            history(`Wrong Input ${e}`)
            alert(`Wrong Input ${e}`);
        }

    }
}
function bksp(){
    exp=document.getElementById('exp').value
    document.getElementById('exp').value= exp.slice(0,-1)
}
function clear(){
    document.getElementById('exp').value = null;
}
function inp_no(v){
    document.getElementById('exp').value += v;
}
function init() {
    cal = document.getElementById("calc");
    cle= document.getElementById("clear")
    bk = document.getElementById("bksp");
    cal.addEventListener("click", calc)
    cle.addEventListener("click", clear)
    bk.addEventListener("click", bksp)
}