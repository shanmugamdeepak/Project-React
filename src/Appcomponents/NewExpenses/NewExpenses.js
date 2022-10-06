import { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css"

function NewExpenses(props){
    function form(data){
    props.detail(data)
    }
    const[set,reset]=useState(false)
    function Add(){
        reset(true)
    }
    function changed(){
        reset(false)
    }


return(
        <div>
            <div>
         {set ? (<ExpensesForm datas={form} change={changed}></ExpensesForm>):
        <button onClick={Add} className='Form'>Add Expenses Form</button>}
    </div></div>
    )
}
export default NewExpenses;