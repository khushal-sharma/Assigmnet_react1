
import { useState } from 'react'
import './App.css'
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp';


function App() {
 const [isLogin, setisLogin]= useState(false);
const [isSignup , setisSigup]= useState(false);

 const toggleState = ()=>{
  setisLogin((prev)=> !prev);
 }

 const toggleNewState = ()=>{
  setisSigup((pre)=>!pre)
 }
  return (
    <div>
      {isLogin?<SignUp/>: <Login toggle={toggleState}/>}

      {isSignup?<Login/>: <SignUp toggle1={toggleNewState}/>}
    </div>
  )
}

export default App
