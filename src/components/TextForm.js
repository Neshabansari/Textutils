import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick= () =>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");

    }

    const handleLoClick= () =>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
    const handleclearClick= () =>{
        let newText= '';
        setText(newText)// or write 1 line only as: settext('');
        props.showAlert("text cleared", "success");

    }
    

    const handleOnChange= (event ) =>{
        //console.log("on change");
        setText(event.target.value);
    }


  const [text,  setText] = useState('');
 // text = "new text";     //wrong way to change the state;
  //setText = ("new text");// right way to change the state;

  return (
    <>
    <div className='contanier' style={{color:props.mode==='dark'?'white':'#081833'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#081833'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button> {/* mx-2 is a bootstrap class which gives margin in x-axis  */}
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick} >Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#081833'}} >{/* my-5(BOOTSTRAP CLASS)  is for margin between conver button and your text summary(in y-axis). if i write 6 then more margin...*/}
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes It will take to  read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to previes it here"}</p>
    </div>
    </>
  )
}
