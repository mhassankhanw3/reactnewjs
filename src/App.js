import { useState } from "react";
// import data from './my data'
// import List from './my list'
import Navbar from "./my Component/Navbar";
import Form from "./my Component/Form";
import Alert from "./my Component/Alert";
import About from "./my Component/About";
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";





function App(props) {
const [mode, setMode] = useState('light')
// const [greenMode, setGreenMode] = useState('light')
const [text, setText] = useState("Enable DarkMode")
const [alert, setAlert] = useState(null)

const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}




const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#00001c'
    setText("Enable light Mode")
    showAlert("Dark mode has been Enabled", "success")
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = "white";
    setText("Enable Dark Mode")
    showAlert("light mode has been Enabled", "success")
  }
}

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text}/>
      <Alert  alert={alert}/>
      <div className="container my-3">
         <Routes>
          <Route path="/About" element={<About />} />
          {/* <Route path="/Form" element={<Form title="Enter the Text to analize below" mode={mode} showAlert={showAlert}/>} /> */}
            {/* </Route> */}
            <Route path="/" element={<Form title="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
              
            {/* </Route> */}
          {/* </Route> */}
          {/* <Route path="/Form">
        
          </Route> */}
          
        </Routes>
      </div>
     </Router>
    </>
  )
}

export default App;
