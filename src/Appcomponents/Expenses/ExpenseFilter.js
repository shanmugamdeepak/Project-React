// import {useState} from 'react';
import './ExpenseFilter.css'
function ExpenseFilter(props){
    function change(event){
   props.year(event.target.value)
    }

    return(
    <div className='Expensefilter'>
        <div>
            <h3 className="filter">Filter By Year</h3>
            <select className="year" value={props.title} onChange={change}>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>  
            </select>
        </div>
    </div>
    )
}
export default ExpenseFilter;