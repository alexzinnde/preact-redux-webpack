import { h } from 'preact'
import { useState } from 'preact/compat'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(20)
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>
        <input type="number" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Add Amount</button>
      </div>
    </div>
  )
}
