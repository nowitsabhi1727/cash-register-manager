var billInput=document.querySelector("#bill-input");
var cashInput=document.querySelector("#cash-input");

var nextBtn=document.querySelector("#btn-next");
var checkBtn=document.querySelector("#btn-check");

var cashGiven=document.querySelector(".cash-given");
var errorMsg=document.querySelectorAll(".error-msg");
var returnAmt=document.querySelector(".amt-return");
var noOfNotes=document.querySelectorAll(".noOFNotes");



var note=[2000,500,100,20,10,5,1];







function nextEventHandler(){
var billInputValue=billInput.value;
var cashInputValue=cashInput.value;
console.log(cashInputValue);


    console.log("click");

if(billInputValue==""){
        errorMsg[0].style.display="block";

}else {
nextBtn.style.display="none";
cashGiven.style.display="block";
errorMsg[0].style.display="none";
returnAmt.style.display="none";


}
}

function clickEventHandler(){
    var billInputValue=billInput.value;
    var cashInputValue=cashInput.value;
    console.log(billInputValue);
    console.log(cashInputValue);
    if(Number(billInputValue) > Number(cashInputValue)){
        errorMsg[2].style.display="block";
        returnAmt.style.display="none";
        errorMsg[3].style.display="none";


    }
    else if(billInputValue==0 && cashInputValue>0){
            errorMsg[1].style.display="block";
            returnAmt.style.display="none";
        

    }
    else if(billInputValue==cashInputValue){
        errorMsg[3].style.display="block";
        returnAmt.style.display="none";
        errorMsg[2].style.display="none";


            
    }
    else{
        returnAmt.style.display="block";
        errorMsg[3].style.display="none";
        errorMsg[2].style.display="none";
        errorMsg[1].style.display="none";
        errorMsg[0].style.display="none";
        



        // calculate(billInputValue,cashInputValue);
        var total=cashInputValue-billInputValue;
        for(var i=0;i<note.length;i++){
            noOfNotes[i].innerText=Math.floor(total/note[i]);
            total=total%note[i];
        }
    }

}





nextBtn.addEventListener("click",nextEventHandler);
checkBtn.addEventListener("click",clickEventHandler);










// console.log(returnAmt);
// console.log(errorMsg);
// console.log(cashGiven);
// console.log(nextBtn);
// console.log(checkBtn);
// console.log(cashGiven);
// console.log(billInput);