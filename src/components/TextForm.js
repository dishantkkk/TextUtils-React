import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=() => {
        let newText=text.toUpperCase();
        setText(newText);   
    }
    const handleLowerClick=() => {
        let newText=text.toLowerCase();
        setText(newText);   
    }
    const handleClearText=() => {
        let newText='';
        setText(newText);   
    }

    const handleOnChange=(e) => {
        setText(e.target.value);
    }
    const [text,setText] = useState("");

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
