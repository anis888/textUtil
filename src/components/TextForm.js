import React,{useState} from 'react';
import Navbar from './Navbar';

export default function TextForm(props) {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message)=>{
    setAlert({
      msg:message
    })
    setTimeout(()=>{
         setAlert(null);},1500
    );
}
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("dark mode has been enabled");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("light mode has been enabled");
      document.title="TextUtils-Light Mode";
    }
  }

 
    const [isBold, setIsBold] = useState(false);
  
    const ToggleBold = () => {
      setIsBold(!isBold);
      props.showAlert("text bold succesfully")

    };
  
    const textStyle = {
      fontWeight: isBold ? 'bold' : 'normal'
      
    };


    const upperclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase succesfully")
    }

    const lowerclick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("converted to lowercase succesfully")

  }
  const clearText=()=>{
    let newtext='';
    setText(newtext);
    props.showAlert("text clear succesfully")

}
const handleExtraSpace=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("extra space remove succesfully")

}

    const onchange=(event)=>{
        setText(event.target.value);
    }
const [text,setText]=useState("");
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/> 

    <div className='container my-2'>
        <h2>{props.heading}</h2>
  <textarea rows="8" className="form-control" style={textStyle}  onChange={onchange} value={text} id="floatingTextarea"></textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={upperclick}>uppercase</button>
  <button className="btn btn-success mx-2" onClick={lowerclick}>lowercase</button>
  <button className="btn btn-success mx-2" onClick={ToggleBold}>bold</button>
  <button className="btn btn-success mx-2" onClick={clearText}>clear</button>
  <button className="btn btn-success mx-2" onClick={handleExtraSpace}>remove Extra Space</button>

</div>
<div className="container my-3">
  <p>{text.length} characters and {text.split(" ").length} words in text</p>
  <p>{0.08*text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter something in the textbox to preview it here"}</p>
</div>
</>
  )
}
