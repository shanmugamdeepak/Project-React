import { useState } from "react";
import './App1.css'
function App1(){
     const[color,changecolor]=useState("red");
     function App(event){   
     changecolor(event.target.value)
    }
    return(
    <div class="App1">
        <div class='App' style={{backgroundColor:color}}>
    </div>
    <div>
            <input type="text" class="App2"onChange={App}
            style={{borderColor:color}}></input></div>
</div>
    )
}
export default App1;