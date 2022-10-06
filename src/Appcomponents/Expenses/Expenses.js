import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";
function Expenses(props){
    let user2=props.date
    const[title,settitle]=useState("2004");
    function year(detail){
        settitle(detail)
    }
    const filterExpenses=user2.filter((user2)=>{
        return(user2.name.getFullYear().toString()===title);
    })
    return(
        <div>
        <div className="class">
            <ExpenseFilter title={title}year={year}></ExpenseFilter>
            <ExpenseList filterExpense={filterExpenses}></ExpenseList>
            {/* {filterExpenses.length===0?(<h3 className="css">Details Not Found</h3>): */}
            {/* (filterExpenses.map((user2)=>(
                <ExpenseItem a={user2.name}b={user2.project}c={user2.amount}>
                    </ExpenseItem>)))} */}
            {/* <ExpenseItem a={props.date[0].name}b={props.date[0].project}c={props.date[0].amount}></ExpenseItem>
            <ExpenseItem a={props.date[1].name}b={props.date[1].project}c={props.date[1].amount}></ExpenseItem>
            <ExpenseItem a={props.date[2].name}b={props.date[2].project}c={props.date[2].amount}></ExpenseItem> */}
            </div>
            
        </div>
        )

    }
export default Expenses;