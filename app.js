document.getElementById('form-group').addEventListener('submit', calculateResults);

function calculateResults(e){
    let amount =document.getElementById('amount');
    let interest =document.getElementById('interest');
    let time = document.getElementById('years');
    let monthlyPay = document.getElementById('monthly-payment');
    let totalPay = document.getElementById('total-payment');
    let totalInt =document.getElementById('total-interest')

    let amou = parseInt(amount.value)
    alert(amou)

    let intr = parseInt(interest.value);
    alert(intr)

    let year = parseInt(years.value)
    alert(year)

    let inter=(intr/100) * amou;
    alert(inter)

    let totPay = (amou+ inter);
    alert(totPay)

    let monPay = (totPay/year)
    alert(monPay)

    monthlyPay.value = monPay;
    totalPay.value = totPay;
    totalInt.value = inter;


   

    e.preventDefault()
}