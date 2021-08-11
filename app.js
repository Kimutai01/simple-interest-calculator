document.getElementById('form-group').addEventListener('submit', calculateResults);

function calculateResults(e) {
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let time = document.getElementById('years');
    let monthlyPay = document.getElementById('monthly-payment');
    let totalPay = document.getElementById('total-payment');
    let totalInt = document.getElementById('total-interest')

    let amou = parseInt(amount.value)


    let intr = parseInt(interest.value);

    let year = parseInt(years.value)

    let inter = (intr / 100) * amou;

    let totPay = (amou + inter);

    let monPay = (totPay / year)

    monthlyPay.value = monPay.toFixed(2);
    totalPay.value = totPay.toFixed(2);
    totalInt.value = inter.toFixed(2);




    e.preventDefault()
}

$(document).ready(function(){
    $('#button').click(function(){
        $('.result').fadeIn()
        setTimeout(fadeOut, 8000)
        function fadeOut(){
            $('.result').fadeOut().empty()
        }
    })
})