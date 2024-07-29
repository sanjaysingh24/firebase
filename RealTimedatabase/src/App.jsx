import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StoreProvider} from './Provider/Store'
import Routing from './Routing/Routing'

function App() {
  const [count, setCount] = useState(0);
  const {baba} = useContext(StoreProvider)

  return (
    <>

   <Routing></Routing>
    </>
  )
}

export default App
