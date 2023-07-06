import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import { useState } from "react";
import Cookies from "universal-cookie"

const cookies=new Cookies();

function App() {
  const[isAuth,setIsAuth]=useState(cookies.get("auth-token"))
    // if(!isAuth){
    //   return(
    // <div>
    //   <SignUp setIsAuth={setIsAuth}/>
    // </div>
    // )}
    return <div><Dashboard/></div>
  
}

export default App;
