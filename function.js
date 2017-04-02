const OS = 10;
const Ap = 9;
const A = 8.5;
const Bp = 8;
const B = 7;
const C = 6;
const P = 5;
const F = 0;
const FE = 0;
const os = 10;
const ap = 9;
const a = 8.5;
const bp = 8;
const b = 7;
const c = 6;
const p = 5;
const f = 0;
const fe = 0;

var cone = document.getElementById("credit-one");
var gone = document.getElementById("grade-one");
var ctwo = document.getElementById("credit-two");
var gtwo = document.getElementById("grade-two");
var cthree = document.getElementById("credit-three");
var gthree = document.getElementById("grade-three");
var cfour = document.getElementById("credit-four");
var gfour = document.getElementById("grade-four");
var cfive = document.getElementById("credit-five");
var gfive = document.getElementById("grade-five");
var csix = document.getElementById("credit-six");
var gsix = document.getElementById("grade-six");
//var cseven = document.getElementById("credit-seven");
var gseven = document.getElementById("grade-seven");
//var ceight = document.getElementById("credit-eight");
var geight = document.getElementById("grade-eight");
var cpa = document.getElementById("cgpa");

function wajid() {
    cone.addEventListener("input", wajid);
    gone.addEventListener("input", wajid);
    ctwo.addEventListener("input", wajid);
    gtwo.addEventListener("input", wajid);
    cthree.addEventListener("input", wajid);
    gthree.addEventListener("input", wajid);
    cfour.addEventListener("input", wajid);
    gfour.addEventListener("input", wajid);
    cfive.addEventListener("input", wajid);
    gfive.addEventListener("input", wajid);
    csix.addEventListener("input", wajid);
    gsix.addEventListener("input", wajid);
    //cseven.addEventListener("input", wajid);
    gseven.addEventListener("input", wajid);
    //ceight.addEventListener("input", wajid);
    geight.addEventListener("input", wajid);
    var ione = parseFloat(cone.value) || 0;
    var itwo = parseFloat(ctwo.value) || 0;
    var ithree = parseFloat(cthree.value) || 0;
    var ifour = parseFloat(cfour.value) || 0;
    var ifive = parseFloat(cfive.value) || 0;
    var isix = parseFloat(csix.value) || 0;
    //var iseven = parseFloat(cseven.value) || 0;
    //var ieight = parseFloat(ceight.value) || 0;
    //var itwo = document.getElementById("grade-one").value;
    //var itwo = gone.value;
    //var keepi = checker(itwo);
    var result = (ione*OS+itwo*A+ithree*Ap+ifour+ifive+isix+1+1)/(ione+itwo+ithree+ifour+ifive+isix+1+1);
    cpa.innerHTML = "Your CGPA is"+result;
}

/*function checker(itwo){
    if (itwo == "OS" || "os"){
        return 10;
    }else if (itwo == "Ap" || itwo=="ap"){
        return 9;
    } else { 
        return 0;
    }

}
*/
alert("Me");