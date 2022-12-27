import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props)
{
  // const [mode, setMode] = useState("info")
  // const handleClick=()=>
  // {
  //   if (mode==="info"){
  //     setMode("dark")
  //   }
  //   else{
  //     setMode("info")
  //   }
  // }

    return(
        <>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to = "/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form">Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = "/">Contact Us</Link>
        </li>
      </ul>

      <form className='d-flex'>
       
      <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
        <input className='form-check-input' onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault" />
        <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>Enable dark mode</label>
        </div>
      
      </form>
      </div>  
     </div> 
 

</nav>

        </>

    );
}
