import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=() => {
        let newText=text.toUpperCase();
        setText(newText);   
        props.showAlert("Converted to upper case","success");
    }
    const handleLowerClick=() => {
        let newText=text.toLowerCase();
        setText(newText);   
        props.showAlert("Converted to lower case","success");
    }
    const handleClearText=() => {
        let newText='';
        setText(newText);   
        props.showAlert("Text cleared","success");
    }

    const handleOnChange=(e) => {
        setText(e.target.value);
    }

    const handleCopy= () => {
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const [text,setText] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter Text Here" 
            style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}} 
            value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
