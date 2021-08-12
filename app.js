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

    if(isNaN(amou) && isNaN(intr) && isNaN(year)){
       alert('please enter amount, interest and time')
       $(document).ready(function(){
           $('.result').hide()
       })
    }else if(isNaN(amou) && isNaN(intr)){
        alert('please enter amount and interest')
        $(document).ready(function(){
            $('.result').hide()
        })
    }else if(isNaN(amou) && isNaN(year)){
        alert('please enter amount and year')
        $(document).ready(function(){
            $('.result').hide()
        })
    }else if(isNaN(intr) && isNaN(year)){
        alert('please enter interest and year')
        $(document).ready(function(){
            $('.result').hide()
        })
    }else if(isNaN(year)){
        alert('please enter year')
        $(document).ready(function(){
            $('.result').hide()
        })
    }else if(isNaN(amou)){
        alert('please enter amount')
        $(document).ready(function(){
            $('.result').hide()
        })
    } else if(isNaN(intr)){
        alert('please enter interest')
        $(document).ready(function(){
            $('.result').hide()
        })
    }




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