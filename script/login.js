// alert()
document.getElementById('login-btn').addEventListener('click',
    function(event){
        event.preventDefault(); //event er defult bebohar bondho kore dei . jemon eikhane loign a click korle refresh hocchilo eita off kore dise
        const accountNumber = document.getElementById('acc-number').value;
        console.log(accountNumber);
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        console.log(pin);
        if(accountNumber.length==11){
           if(convertedPin === 1234){
            window.location.href='./main.html'
           }
           else{
            alert('need valid pin number')
           }
        }
        else{
           alert('need valid acc number')
        }

    }
) 