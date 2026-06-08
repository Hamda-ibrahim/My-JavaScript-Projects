const saved = localStorage.getItem("expense");
const expenseTracker = saved ? JSON.parse(saved) : [];


renderExpense();

function renderExpense(){
    expenseHTML = "";
    total = 0;

    for (let i = 0; i < expenseTracker.length; i++){
        const expenseObject =expenseTracker[i];
        
        const name = expenseObject.name;

        const amount = expenseObject.amount;
        const category = expenseObject.category;
        const date = expenseObject.date;


        let html = `
                <tr>
                    <div><td>${name}</td></div>
                    <div><td>$${amount}</td></div>
                    <div><td>${category}</td></div>
                    <div><td>${date}</td></div>
                    <td><button onclick="
                    expenseTracker.splice(${i},1);
                    localStorage.setItem('expense', JSON.stringify(expenseTracker));
                    renderExpense();
                    " class="delBtn">Delete</button></td>
                </tr>
                `;

        expenseHTML += html;

        total += Number(amount);
    }

    console.log(expenseHTML,total);
    document.querySelector('.js-expense-res').innerHTML = expenseHTML;

    document.querySelector('.total').innerHTML = "Total Expenses: $" + total;

    

}

// const expense = ['Lunch', 2];

function addExpense(){
    const inputElement = document.querySelector('.expense-input');
    const amountElement = document.querySelector('.amount');
    const categoryInput = document.querySelector('.expense-types');
    const date = document.querySelector('.expense-date');

    let inputValue = inputElement.value;
    let amountValue = amountElement.value;
    let categoryValue = categoryInput.value;
    let dateValue = date.value;
    // console.log(categoryValue);

    if(!inputValue || !amountValue || !categoryValue || !dateValue){
        alert("Please fill in all fields.");
        return;
    }

    expenseTracker.push({
        name: inputValue,
        amount: amountValue,
        category: categoryValue,
        date: dateValue
    });

    localStorage.setItem("expense", JSON.stringify(expenseTracker));


    inputElement.value = "";
    amountElement.value = "";

    renderExpense();

    // console.log(inputValue,amountValue);

}

