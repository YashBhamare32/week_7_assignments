import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil';

function App() {
  const[numberOfWords , setNumberOfWords] = useState();
  const[finalPara , setFinalPara] = useState("");
  
  return (
    <div>
      <RecoilRoot>
        <Interface numberOfWords={numberOfWords} setNumberOfWords={setNumberOfWords} finalPara={finalPara} setFinalPara={setFinalPara}/>
      </RecoilRoot>
    </div>
  )
}

function Interface({numberOfWords , setNumberOfWords , finalPara , setFinalPara}){
  const hendleInputChanges = (e)=>{
    setNumberOfWords(e.target.value);
  }
  const paraReturner=()=>{
    console.log({numberOfWords});
    let array=['banana' , 'apple' , 'grapes' , 'berries' , 'watermelon' , 'orange' , 'sweetlime']
    let para=""
    for(let i=0 , j=0 ; i<parseInt(numberOfWords) ; i++){
      para+=array[j];
      if(j==6){
        j=0;
      }else{
        j++;
      }
      para+=" ";
    }

    //append on html
    setFinalPara(para);
  }
  return(
    <div>
      <h1>Para Generator</h1>
      <input onChange={hendleInputChanges} value={numberOfWords} type="text" placeholder='Enter Number of Words' style={{width: "500px", height:"50px"}}></input>
      <button style={{borderRadius:"20px", height:"50px"}} onClick={paraReturner}>Generate</button>
      <div>{finalPara}</div>
    </div>
  )
}


export default App
