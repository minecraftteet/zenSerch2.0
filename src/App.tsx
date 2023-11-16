import { useState } from 'react'
import './App.css'
import Icon from './assets/Icon.png'
function App() {
 const [isOpened, setIsOpened] = useState(false);
const[value, setValue] = useState(""); 
    function handlegoogle() {
        window.open('https://google.com/search?q='+value,"_self")
    }
    function handleyoutub(params:type) {
      window.open('https://www.youtube.com/results?search_query='+value,"_self")
    }
    function handleSOF() {
    if (value == "stream" ){
      window.open('https://twitch.tv/codespace25')
    } else { 
      window.open('https://stackoverflow.com/search?q='+value,"_self")
    }
    }
    function toggle() {
    setIsOpened(wasOpened => !wasOpened);
    }
    


    
  return (
    <>
    <div className="box">
      <button  onClick={toggle}>
          🍔
      </button>
      {isOpened && (
        <div className="willy">
          <a onClick={handleyoutub}>youtube</a>
          <dir></dir>
          <a onClick={handleSOF}>stackoverflow</a>
        </div>
      )}
    </div>
    <div className="streamNave">
    <h1>this is a place to see if im live
    </h1>
    </div>


      
    <div>
    <img
    className="Icon"
    src={Icon}
    />
    </div>
     <input value={value} onChange={(e) => {setValue(e.target.value)}} />
     <button onClick={handlegoogle}>Button</button> 
    </>)
}




export default App
