import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [receiveOTP, setReceiveOTP] = useState()
  const[enterOTP , setEnterOTP] = useState();
  useEffect(()=>{
    
  } , [receiveOTP])

  return (
    <div>
      <h1>Login via OTP</h1>
      <EnterNumberComponent />
      <EnterOTPComponent />
    </div>
  )
}

function EnterNumberComponent(){
  return(
    <div>
      <input type="text" placeholder='Enter your mobile number' style={{height:"50px", width:"200px", backgroundColor:"#000000", borderRadius:"10px"}}/><br /><br />
      <button onClick={(e)=>{
        setReceiveOTP(e.target.value);
      }}>Send OTP</button>
    </div>
  )
}

function EnterOTPComponent(){

}

export default App
