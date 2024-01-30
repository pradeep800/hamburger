import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const a=["animate-slideIn","animate-slideOut"]
function App() {
  const ref=useRef();
  const [open,setOpen]=useState(false);
  const [firstTime,setFirstTime]=useState(true);
  const [addOneTimeClass,setAddOneTimeClass]=useState(true);
useEffect(()=>{
  if(firstTime){
    setFirstTime(false);
    return;
  }
  else if(open){
    ref.current.classList.remove("animate-slideOut")
    ref.current.classList.add("animate-slideIn")
  }else{
    ref.current.classList.remove("animate-slideIn")
    ref.current.classList.add("animate-slideOut");
 
  }
},[open])
  return (
   <div >
    <div  onClick={()=>{
      console.log("hello world")
      setOpen(!open)
         if(addOneTimeClass)
    setAddOneTimeClass(false);
      }} >|||</div>
    
    <div className=" " >
         <ol ref={ref} className={`fixed   bg-green-300 w-[100%] h-[100%] flex items-center justify-center ${open?"-translate-x-[100%]":"translate-x-0"} ${addOneTimeClass?"!translate-x-[-100%]":""} `}>
  <li>list1</li>
    <li>list2
      <li>list3</li>
      <li>list4</li>
    </li>
   </ol>
 
    </div>
  </div>
  )
}

export default App
