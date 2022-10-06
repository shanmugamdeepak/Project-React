import"./ExpenseDate.css"
function ExpenseDate(props){
    let one=props.a.toLocaleString('en-US',{month:"long"})
    let two=props.a.toLocaleString('en-US',{day:'2-digit'})
    let three=props.a.getFullYear()
return(
        <div>
            <div className="name1">
                <h4>{one}</h4>
                <h3>{two}</h3>
                <h2>{three}</h2>
            </div>
        </div>
    )
    }
export default ExpenseDate;