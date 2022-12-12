import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!" , "success");
    }

    const handleLoClick = () =>{
        //console.log("Lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!" , "success");
    }

    const handleRepeatClick = () =>{
        //console.log("Lowercase was clicked" +text);
        let newText = text.repeat(2);
        setText(newText);
        props.showAlert("Repeated!" , "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!" , "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!" , "success");
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!" , "success");
    }

    const handleOnChange = (event) =>{
        //console.log("OnChange was clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState(''); //text is state variable & setText is used to set State variable
    //text = "New Text";  //Wrong way to change the State...
    //setText("New Text");  //Correct way to change the State...
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleRepeatClick}>Replace</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            {/* <p>{text.split(" ")[text.split(" ").length - 1] == "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p> */}
            <p><b>{0.008 * text.split(" ").length}</b> Minutes read...</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in TextBox above to Preview it here!!"}</p>
        </div>
        </>
    )
}
