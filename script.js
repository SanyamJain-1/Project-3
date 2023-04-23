document.getElementById("submitButton").onclick = function(){
    document.getElementById("myCheck").checked ? console.log('Learning JS') :console.log('Busy');

    let paytmWallet = document.getElementById("paytmWallet");
    let UPI = document.getElementById("UPI");
    let debitCard = document.getElementById("debitCard");
    let creditCard = document.getElementById("creditCard");

    if(paytmWallet.checked){
        console.log('You Paid via Paytm')
    }
    else if(UPI.checked){
        console.log('You Paid via UPI')
    }
    else if(debitCard.checked){
        console.log('You Paid via Debit Card')
    }
    else if(creditCard.checked){
        console.log('You Paid via Credit Card')
    }
}
