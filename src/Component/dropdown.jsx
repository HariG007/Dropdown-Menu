import React from 'react'
import '../Styles/dropdown.css'

export default function Dropdown() {
  return (
    <div style={{marginTop:'300px'}}> 
    <div id='box'>
       <center>
        <h1 style={{color:'White'}}>" Drop-down component using React "</h1>
        <h4 style={{color:'White'}}>Tesla Cars</h4>
       </center>
       <center>
        <select style={{padding:'30px',borderRadius:'16px',color:'White'}}>
          <option  >Select Model</option>
            <option >Model S</option>
            <option >Model Y</option>
            <option >Model X</option>
            <option >Cybertruck</option>
        </select>
        </center>
        <br></br>
        </div>
    </div>
  )
}
