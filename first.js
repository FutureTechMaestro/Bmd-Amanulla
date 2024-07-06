import React,{useState} from "react";
function Counter (){
    const [count, setCount]=useState(10);
    const inc=()=>{
        setCount(count+1);
    };
    const dec=()=>{
        setCount(count-1);
    };
    return(
        <div>
            <p>counter:{count}</p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>decrement</button>
        </div>
        
    );
};
export default Counter;