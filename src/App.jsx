import { useState } from "react"; //import useState hook from React

// Write your Color component here
//const Color = (props) => { //using dot notation use prop as className to access color from props object
  // return <div className = {props.color}></div> 
const Color = ({color, setSelectedColor}) => { //using object deconstruction to access the color from props object
  return (
  <div className = {color} onClick = {() => setSelectedColor(color)}></div> //added onClick property using object deconstruction
  )
}

const App = () => {
const [selectedColor, setSelectedColor] = useState(""); //invoke useState hook and deconstruct selectedColor and setSelectedColor from the returned array
  return (
    <div id = "container">
      <div id = "navbar">
        <div>Currently selected: </div>
        <div className = {selectedColor}>{selectedColor}</div>
      </div>
      <div id = "colors-list">
        <Color color = "green" setSelectedColor = {setSelectedColor}/>
        <Color color = "blue" setSelectedColor = {setSelectedColor}/>
        <Color color = "violet" setSelectedColor = {setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
