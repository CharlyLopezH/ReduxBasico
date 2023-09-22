import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount,reset } from "./store/slices/contadorSlice";

export const CounterApp=()=> {


    //"theCounter viene del store, se accede por medio del selector"
    const count=useSelector((state)=>state.theCounter.value)
    const dispatch=useDispatch();

    return (
        <>
        <div className="container">
            <h2>Counter Redux</h2>            
            <hr/>
            <h3>Contador: {count}</h3>    
            <button 
            onClick={()=>dispatch(increment())} 
            className="btn btn-success mx-1">Incrementar
            </button>

            <button
            onClick={()=>dispatch(decrement())} 
            className="btn btn-primary mx-1">Decrementar</button>

            <button 
            onClick={()=>dispatch(incrementByAmount(2))}
            className="btn btn-success mx-1">Sumar  + 2</button>

            <button 
            onClick={()=>dispatch(reset())}
            className="btn btn-success mx-1">Reset</button>

        </div>
        </>
    )
}

export default CounterApp