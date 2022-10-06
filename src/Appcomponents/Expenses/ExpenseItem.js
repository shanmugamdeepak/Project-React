import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props){ 
     return(
        <div>
            <Card className="flex-container">
                <ExpenseDate a={props.a}></ExpenseDate>
                <p className="name2">{props.b}</p>
                <p className="name3">Rs.{props.c}</p>
            </Card>
     </div>
    )
    }

export default ExpenseItem;
