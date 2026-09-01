function createExpenseTracker(userName, initialBudget){
    let count = 0;
    let user = {name: userName, budget: initialBudget};
    let expenses = [];
    const tracker = {
        addingExpense : (id, amount, category, description) => {
            let expenseArr = {id: id, amount: amount, category: category, description: description};
            expenses.push(expenseArr);
            //user.budget -= amount; //this line is so if we want to subtract the amount from the budget each time
            count++;
        },
        removeExpense : (id) => {
            expenses = expenses.filter((expId) => expId.id != id);
        },
        totalExpenses: () => {
            return `Total Expenses Done: ${count}`;
        },
        highestExpense: () => {
            const highestExp = expenses.reduce((current, best) => {
                return current.amount > best.amount ? current : best;
            })
            return console.log("The Highest Expense is:", highestExp);
        },
        lowestExpense: () => {
            const lowestExp = expenses.reduce((current, lowest) => {
                return current.amount < lowest.amount ? current : lowest;
            })
            return console.log("The Lowest Expenses is:", lowestExp);
        },
        updateUser: (newName, newBudget) => {
            user.name = newName;
            user.budget = newBudget;
        },
        expenseByCat: (category) => {
            const expByCat = expenses.filter((expCat) => expCat.category.toLowerCase() === category.toLowerCase());
            return console.log("Expeneses by category", category, ":", expByCat);
        },
        updatingExpenses: (id, amount, category, description) => {
            const index = expenses.findIndex(exp => exp.id === id);
            if (index !== -1) 
                {
                    expenses[index] = 
                    { 
                        ...expenses[index], 
                        amount, 
                        category, 
                        description 
                    };
                }   
        },
        getUserInfo: () =>{
            return {...user};
        },
        getExpenses: () =>{
            return [...expenses]
        }
}
         return tracker;
}


let newExpense = createExpenseTracker("ice", 2000);
console.log(newExpense.getUserInfo()); 
newExpense.addingExpense(1, 300, "Food", "Pizza");
console.log(newExpense.getExpenses());

newExpense.addingExpense(2, 500, "Tech", "PC");
console.log(newExpense.getExpenses());

newExpense.addingExpense(3, 100, "Food", "Chocolate Bar");//adds a new expenses to the expenses array

console.log(newExpense.getExpenses());//shows all the expenses in the expenses array

newExpense.updatingExpenses(1, 700, "Tech", "Headphones");
console.log(newExpense.getExpenses());

newExpense.expenseByCat("tech");//shows expenses in that category

newExpense.highestExpense();//shows highest expense in expenses array

newExpense.lowestExpense();//shows lowest expense in expenses array

newExpense.removeExpense(1);//removes expense with the id: 1
console.log(newExpense.getExpenses());

newExpense.removeExpense(2);//removes expense with id: 2
console.log(newExpense.getExpenses());//shows that we have removed the 2 expenses from the array

console.log(newExpense.totalExpenses());//gives the total count of expenses added to expenses array

