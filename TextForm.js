import React,{useState} from 'react'



export default function Thisfun(props) {
  const handleupClick=()=>{
    console.log("uppercase clicked->"+text)
    let newText=text.toUpperCase();
    setText(newText)

  }
  const handleloClick=()=>{
    console.log("lowercase clicked->"+text)
    let newText=text.toLowerCase();
    setText(newText)

  }
  const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const[text,setText]=useState('');
    return (
        
       <>
       <div>
    <div className="container">
      <h1>{props.heading}</h1>
      
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}rows="8"></textarea>
    </div>
 <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to uppercase</button>
 <button className="btn btn-secondary" onClick={handleloClick}>convert to lowercase</button>
        </div>
        <div className="container" my-3>
          <h1>YOur text summary</h1>
          <p>{text.split(" ").length-1}words and  {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <p>{text}</p>
        </div>
        </>
      )
}


