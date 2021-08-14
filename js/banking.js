// handling deposit 
document.getElementById('deposit-btn').addEventListener('click', function() {
    // geting depo input
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;
    const newDepositAmount = parseFloat(depositAmount);

    // geting previous deposit ammount
    const currentDeposit = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(currentDeposit.innerText);

    // calculating total deposit amount
    currentDeposit.innerText = newDepositAmount + previousDepositAmount;

    // handling total account balance
    const getAcBalance = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(getAcBalance.innerText);

    getAcBalance.innerText = previousTotalBalance + newDepositAmount;

    depositInput.value = '';
})

// Handling withdraw

document.getElementById('withdraw-btn').addEventListener('click', function() {
    // get withdraw input
    const getWithdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmount = parseFloat(getWithdrawInput.value);

    // geting total withdraw amount
    const getPreviousWithdrawAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(getPreviousWithdrawAmount.innerText);

    // Calculating total withdraw
    const totalWithdraw = previousWithdrawTotal + newWithdrawAmount;

    // seting total withdraw
    getPreviousWithdrawAmount.innerText = totalWithdraw;

    // get previous total ac balance
    const getPreviousBalance = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(getPreviousBalance.innerText);
    console.log(previousTotalBalance);



    // calculating total balance
    const totalBalance = previousTotalBalance - newWithdrawAmount;

    // update total balance
    getPreviousBalance.innerText = totalBalance;

    // Unset withdraw input
    getWithdrawInput.value = '';


})