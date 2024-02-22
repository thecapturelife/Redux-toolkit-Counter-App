import {useDispatch , useSelector } from 'react-redux'
import { increment , decrement} from './Features/counterSlice';

function App() {
const {count} =  useSelector((state) => state.counter) 
const dispatch =  useDispatch()
  return (
    <div className="App">
      <h1>color change</h1>
      <h2>Count  : {count} </h2>
      <button style={{  background : count!==0 && count%3===0 && 'red'}} onClick={()=>dispatch(increment())}>increment</button>
      <button style={{ background : count === 0  && "blue" }} onClick={()=>dispatch(decrement())}>decrement</button>
      

    </div>
  );
}

export default App ;