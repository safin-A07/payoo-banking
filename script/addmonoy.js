document.getElementById('Add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        // AMOUNT calculation
        const amount = document.getElementById('amount').value ;
        const convertedAmount = parseFloat(amount);
        //pin calculation
        const pin = document.getElementById('pin'). value ;
        const convertedPin = parseInt(pin);
        //current balance calculation
        const mainBalance = document.getElementById('main-balance').innerText;
        
        const convertBalance = parseFloat(mainBalance);
        // ----------------------------------------------
        if(amount && pin ){
            if(convertedPin === 1234){
                const sum = convertBalance + convertedAmount ;
                document.getElementById('main-balance').innerText =sum ;
            }
            else{
                alert('enter valid pin');
            }

        }
        else{
            alert("enter amount");
            console.log('Invalid pin');
        }
    }
)