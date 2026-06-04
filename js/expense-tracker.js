const saved = localStorage.getItem("expense");
const expenseTracker = saved ? JSON.parse(saved) : [];


// const savedValue = JSON.parse(saved);



//  const expenseTracker = [{
//     name: "Transport",
//     amount: 3,
//     category: "Food",
//     date: "4-6-2026"
// }, {
//     name: "Lunch",
//     amount: 2,
//     category: "Transport",
//     date: "4-6-2026"
// }];




    

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

        // total += amount;

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


     if(inputValue === ""){
        return;
    } else if(amountValue === ""){
        return;
    } else if(categoryValue === ""){
        return;
    } else if(dateValue === ""){
        return;
    } 


    expenseTracker.push({
        name: inputValue,
        amount: amountValue,
        category: categoryValue,
        date: dateValue
    });

    // const jsonString = JSON.stringify(expenseTracker);
    localStorage.setItem("expense", JSON.stringify(expenseTracker));


    inputElement.value = "";
    amountElement.value = "";

    renderExpense();

    // console.log(inputValue,amountValue);

}

