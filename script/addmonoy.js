document.getElementById('Add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const amount = document.getElementById('amount').value ;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById('pin'). value ;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('main-balance').innerText;
        console.log(mainBalance);
        const convertBalance = parseFloat(mainBalance);
        if(pin===1234){
            const sum = convertBalance + convertedAmount;
            document.getElementById('main-balance').innerText=sum;

        }
        else{
            alert("enter amount");
            console.log('Invalid pin');
        }
    }
)