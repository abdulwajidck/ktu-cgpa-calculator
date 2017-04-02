/* Coded by Abdul Wajid Ck @www.abdulwajidck.me.
Don't copy without any written permission*/
var cpa = document.getElementById("cgpa");
function wajid() {
    var ione = parseInt(document.getElementById("credit-one").value);
    var vone = parseInt(document.getElementById("grade-one").value);
    var itwo = parseInt(document.getElementById("credit-two").value);
    var vtwo = parseInt(document.getElementById("grade-two").value);
    var ithree = parseInt(document.getElementById("credit-three").value);
    var vthree = parseInt(document.getElementById("grade-three").value);
    var ifour = parseInt(document.getElementById("credit-four").value);
    var vfour = parseInt(document.getElementById("grade-four").value);
    var ifive = parseInt(document.getElementById("credit-five").value);
    var vfive = parseInt(document.getElementById("grade-five").value);
    var isix = parseInt(document.getElementById("credit-six").value);
    var vsix = parseInt(document.getElementById("grade-six").value);
    var iseven = parseInt(document.getElementById("credit-seven").value);
    var vseven = parseInt(document.getElementById("grade-seven").value);
    var ieight = parseInt(document.getElementById("credit-eight").value);
    var veight = parseInt(document.getElementById("grade-eight").value);
    var deno = ione + itwo + ithree + ifour + ifive + isix + iseven + ieight;
    var nume = ione*vone+itwo*vtwo+ithree*vthree+ifour*vfour+ifive*vfive+isix*vsix+iseven*vseven+ieight*veight;
    var result = nume/deno; 
    cpa.innerHTML = "Your CGPA is"+result;
}