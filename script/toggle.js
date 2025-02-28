// when click onto add money
document.getElementById('add-money-box').addEventListener('click',
    function(){
        document.getElementById('CashOut').style.display = 'none';
        document.getElementById('addMoney').style.display = 'block';
    }
)
// when click onto cashout 
document.getElementById('cashout-box').addEventListener('click',
    function(){
        document.getElementById('CashOut').style.display = 'block';
        document.getElementById('addMoney').style.display = 'none';
    }
)