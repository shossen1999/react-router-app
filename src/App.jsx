
import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
    
      <h1 className='text-4xl bg-green-300 p-4'>React Router App </h1>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
      
    </>
  )
}

export default App
