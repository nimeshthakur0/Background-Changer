import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("");

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className={`color-box ${color}`} />
      <div className="button-container">
        <button className="button red" onClick={function (e) {
          handleColorChange("red");
        }}>Red</button>
        <button className="button yellow" onClick={function (e) {
          handleColorChange("yellow");
        }}>Yellow</button>
        <button className="button black" onClick={function (e) {
          handleColorChange("black");
        }}>Black</button>
        <button className="button purple" onClick={function (e) {
          handleColorChange("purple");
        }}>Purple</button>
        <button className="button green" onClick={function (e) {
          handleColorChange("green");
        }}>Green</button>
        <button className="button blue" onClick={function (e) {
          handleColorChange("blue");
        }}>Blue</button>
        <button className="button default" onClick={function (e) {
          handleColorChange("white");
        }}>Default</button>
      </div>
    </>
  )
}

export default App
