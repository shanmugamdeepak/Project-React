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
            </div>
        </div>
        )

    }
export default Expenses;
