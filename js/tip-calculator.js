function calculateTip(){
    const billElement = document.querySelector('.bill');
    const tipElement = document.querySelector('.tip');
    const total = document.querySelector('.total');

    const billValue = Number(billElement.value);
    const tipValue = Number(tipElement.value);

    if(!billValue || !tipValue){
        return;
    }

    const tipAmount = billValue * tipValue / 100;
    const totalBill = billValue + tipAmount;

    total.innerHTML = `Total: ${totalBill}`;
    
}

