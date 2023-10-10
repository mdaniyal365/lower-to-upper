import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const[text,setText]= useState('Enter the here');
  const handleaupclick=()=>{
    console.log("upper case in clicked" + text);
    let newtext=text.toUpperCase();
  setText(newtext)
  }
  const handleonchange=(event)=>{
    console.log("on change");
  setText(event.target.value)
  }

  return (
    <>
    <h1><div>{props.heading}</div></h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleaupclick}>covert to uppercase</button>
  
    </>
  )
}
