
import './App.css';
import Expenses from './Appcomponents/Expenses/Expenses';
import NewExpenses from './Appcomponents/NewExpenses/NewExpenses';
import {useState} from 'react'

function App() {
let date=[
  {name:new Date(2003,2,5),project:"House Loan",amount:'2000'},
  {name:new Date(2002,6,3),project:"Bike Loan",amount:'30000'},
  {name:new Date(2000,8,9),project:"Car Loan",amount:'400000'}
]
const[user,setuser]=useState(date)
function deepak(details){
  setuser((user2)=>{
    return[...details,...user2]
})}

return (
  <div>
      <h1 className='name6'>Expense App</h1>
    <div>
        <NewExpenses detail={deepak}></NewExpenses>
  </div>
    <div>
      <Expenses date={user}></Expenses>
  </div>
    
</div>
    )
}

export default App;
