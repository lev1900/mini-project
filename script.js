let tipButton = document.getElementById("btn-tip");
let percentage;
let tipAmount;
let totalBill;

let gradeButton= document.getElementById("btn-grade");
let pointsEarned=document.getElementById("points-earned").value;
let totalPoints=document.getElementById("total-points").value;
let percentGrade;

let payButton= document.getElementById("btn-paycheck");


let gasButton= document.getElementById("btn-gas");


let tipOutPut=document.getElementById("tip-output");




tipButton.addEventListener("click", getTipAmount);

function getTipAmount() {
    let subTotal=document.getElementById("sub-total").value;
       tipAmount = subTotal * percentage;
totalBill = subTotal + tipAmount
tipOutPut.textContent = '';
}


gradeButton.addEventListener("click", getGrade);

function getGrade(){

}