import React,{useState} from 'react';
import Navbar from './Navbar';

export default function About 
() {
  const[mode,setMode]=useState('light');
  const[setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
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
      showAlert("dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("light mode has been enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
    const [mystyle,setMystyle]=useState({
        color:'white',
        backgroundColor:'black'
    })

    const [btntext,setbtnText]=useState('enable dark mode')
    const toggleStyle=()=>{
        if(mystyle.color==='white')
        {
            setMystyle({
                color:'black',
                backgroundColor:'white' 
            })
            setbtnText('enable dark mode')
        }
        else{
            setMystyle({
                color:'white',
                backgroundColor:'black', 
                border:'3 px solide white'
            })
            setbtnText('enable light mode')

        }
    }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/> 

    <div className='container' style={mystyle}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       About Developer 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>This Web-App Develope by <strong>Anis Gupta & Arpan Ghoghari</strong></p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About App
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p> <strong>This is the TextUtil app.</strong> this app is use for apply some Operation on your text for example convert uppercase,lowercase,bold,remove extra space between words and clear text.</p>
      </div>
    </div>
  </div>
 </div>
<div className="container">
<button className="btn btn-warning my-2" onClick={toggleStyle}>{btntext}</button>

</div>
    </div>
    </>
  )
}
