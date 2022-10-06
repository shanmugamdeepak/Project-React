import {useState} from "react";
import "./ExpensesForm.css"
function ExpensesForm(props){
    const [title,settext]=useState('');
    const [rupee,setamount]=useState('');
    const [day,setdate]=useState('');
    function text(event){
        settext(event.target.value)
    }
    function amount(event){
     setamount(event.target.value)
    }
    function date(event){
        setdate(event.target.value)
    }
    function Expenses(event){
       event.preventDefault();
       settext('');
       setamount('');
       setdate('');
       var abc=[{
        id:Math.floor(Math.random()*1000),
        name:new Date(day),amount:rupee,project:title
       }]
       props.datas(abc)
    }
    function action(){
     props.change()
    }
    return(
        <div className="ExpensesForm">
            <div className="form">
            <form>
                <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <label>Title:</label>
                            <br></br>
                            <input type="text" id="name" onChange={text}value={title}></input>
                        </td>
                        <td><label>Amount:</label>
                        <br></br>
                        <input type="number" id="number"onChange={amount}value={rupee}></input></td>
                    </tr>
                    <tr>
                        <td><label>Date:</label>
                        <br></br>
                        <input type="date" id="date"onChange={date} min="2000-12-31" max="2004-12-31"value={day}></input></td>
                    </tr>
                    <tr>
                        <td></td>
                       <td><button className="design" type="button" onClick={action}>Cancel</button></td>
                         <td><button onClick={Expenses}className="design1">Add Expenses</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
     </div>
    )
}
export default ExpensesForm;