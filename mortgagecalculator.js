const mortgageOutput = document.getElementById("mortgageOutput");

let missingAmountInput = true;
let monthlyPayment = null;

const amountDefault = 450000;
const interestDefault = 5.3;
const yearsDefault = 30;

loanAmount.value = amountDefault;
annualInterestRate.value = interestDefault;
numberOfYears.value = yearsDefault;

calculateAndPrint();

loanAmount.addEventListener("blur", () => {
    calculateAndPrint();
});
annualInterestRate.addEventListener("blur", () => {
    calculateAndPrint();
});
numberOfYears.addEventListener("blur", () => {
    calculateAndPrint();
});

function calculateAndPrint(){
    loanAmountValue = document.getElementById("loanAmount").value;
    annualInterestRateValue = document.getElementById("annualInterestRate").value;
    numberOfYearsValue = document.getElementById("numberOfYears").value;

    if(!loanAmountValue || loanAmountValue == 0){
        loanAmount.value = amountDefault;
        loanAmountValue = document.getElementById("loanAmount").value;
    }
    if(!annualInterestRateValue || annualInterestRateValue == 0){
        annualInterestRate.value = interestDefault;
        annualInterestRateValue = document.getElementById("annualInterestRate").value;
    }
    if(!numberOfYearsValue || numberOfYearsValue == 0){
        numberOfYears.value = yearsDefault;
        numberOfYearsValue = document.getElementById("numberOfYears").value;
    }

    let r = ((annualInterestRateValue/12)/100);
    let n = (12 * numberOfYearsValue);
 
    let exponentPortion = Math.pow((1 + r), n);

    monthlyPayment = (loanAmountValue * ((r*exponentPortion)/(exponentPortion - 1)));;

    mortgageOutput.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
};

