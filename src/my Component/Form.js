import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");


  
  const handleUpClick = (e) => {
    console.log("you have clicked here" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };



  const handleLoClick = (e) => {
    console.log("you have clicked here" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");

  };



  const handleAlClick = (e) => {
    console.log("you have clicked here" + text);
    let newText = text.aLtErNaTecAsE();
    setText(newText);
    props.showAlert("Converted to Alternatecase", "success");

  };



  const handleOnChange = (e) => {
    console.log("On Change");
    setText(e.target.value)
  };

  


  return (
    <>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black"}}>
          <h1> {props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8" style={{backgroundColor: props.mode === "dark" ? "#00001c" : "white", color: props.mode === "dark" ? "white" : "black" }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleAlClick}>
          Alternative Text
        </button>
      </div>
      <div className="container"  style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h3>Your text summary</h3>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Enter something in the textbox above to preview it"}</p>
      </div>
    </>
  );
}


export default Form;


// style={{color: props.mode === "dark" ? "white" : "black"}}
// color: props.mode === "dark" ? "white" : "black"