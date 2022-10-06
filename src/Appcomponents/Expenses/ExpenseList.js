import ExpenseItem from "./ExpenseItem";
function ExpenseList(props){
    let filterExpenses=props.filterExpense
    if(filterExpenses.length===0){
    return(<h3 className="css">Details Not Found</h3>)
}
    return(
        <div>
        {filterExpenses.map((user2)=>(
            <ExpenseItem key={user2.id}a={user2.name}b={user2.project}c={user2.amount}>
                </ExpenseItem>))}</div>
    )
}
export default ExpenseList;