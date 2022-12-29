import React, { useState } from "react";

export default function Form(props) {
    
    const [text, setText] = useState("");
    const onTextChange = (event) => {
        setText(event.target.value)
    }

    const handleClickUp = () => {
        let t1 = text.toUpperCase();
        setText(t1);
    }

    const handleClickLow = () => {
        let t1 = text.toLowerCase();
        setText(t1);
    }

    const copyText = () => {
        let t1 = document.getElementById('textarea');
        t1.select();
        navigator.clipboard.writeText(t1.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClear = () => {
        let t1 = " ";
        setText(t1);
    }

    return (
        <>
            <div className="container mt-5" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div>
                    <h1> {props.title} </h1>
                    <textarea className="form-control" id="textarea" rows="10" onChange={onTextChange} style={{ backgroundColor: props.mode === "dark" ? "rgb(6, 75, 144)" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} placeholder="Enter your text" ></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-info mt-2" onClick={handleClickUp}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-info mt-2 mx-2" onClick={handleClickLow}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-info mt-2 mx-2" onClick={copyText}>Copy</button>
                <button disabled={text.length===0} className="btn btn-info mt-2 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-info mt-2 mx-2" onClick={handleClear}>Clear</button>
                </div>
                <div className="container" style={{color:props.mode==="dark"?"White":"Black"}}>
                    <h2 className="mt-5">Text Summary: </h2>
                    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} <b>Words</b> and {text.split("").filter((element)=>{return element.length!==0}).length} <b>Characters</b> </p>
                    <p> {0.08 * text.split(" ").length} Minutes to read </p>
                    <h2 className="mt-4">Preview: </h2>
                    <p>{text}</p>
                </div>
        




        </>
    );
}