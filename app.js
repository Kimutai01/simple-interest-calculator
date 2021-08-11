document.getElementById('form-group').addEventListener('submit', calculateResults);

function calculateResults(e){
    let amount =document.getElementById('amount');
    let interest = document.getElementById('interest');
    let time = document.getElementById('years');
    let monthlyPay = document.getElementById('monthly-payment');
    let totalPay = document.getElementById('total-payment');
    let totalInt =document.getElementById('total-interest')

    e.preventDefault()
}