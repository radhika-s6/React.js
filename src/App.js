import React, { useState } from "react";
import Navbar from './components/Navbar'
// import Form from './components/Form'
import Alert from './components/Alert'
import About from "./components/About";

export default function App()
{
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)
  
  const handleClick=()=>
  {
    if(mode==="dark")
    {
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
    }
    else
    {
      setMode("dark")
      document.body.style.backgroundColor='#053a6e';
      showAlert("dark mode is enabled","success")
    }
  }

  const showAlert=(message, type) =>
  {
    setAlert(
      {msg: message,
      type: type}
    )
    setTimeout(()=>
    {
      setAlert(null);
    }, 3000);
  }

  return(
    <>

    <Navbar mode={mode} toggle={handleClick} />
    <Alert alert={alert} />
    {/* <Form title="Text Utilizer App" mode={mode} toggle={handleClick} showAlert={showAlert} /> */}
    <About/>

    </>
  );
}