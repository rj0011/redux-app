import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'

const App = () => {
  const mystate = useSelector((state) => {
      return state.changeNumber
  })
  const dispacth = useDispatch();
  return (
    <>
    <h1>Count-app using React-Redux library</h1>
    <button onClick={ () => dispacth(increment()) }>+</button>
    <input style={{width: 40, textAlign: 'center'}} type='text' value={mystate}/>
    <button onClick={ () => dispacth(decrement()) }>-</button>
    </>
  )
}

export default App