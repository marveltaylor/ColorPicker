import { useState } from "react"; //import useState hook from React

// Write your Color component here
const Color = (props) => {
  return <div className = {props.color}></div> //using dot notation use prop as className to access color from props object
//  const Color = ({color}) => { //using object deconstruction to access the color from props object
//   return <div className = {color}></div>
//   }
}

const App = () => {
  return (
    <div id = "container">
      <div id = "navbar">
        <div>Currently selected: </div>
        <div className = "red">red</div>
      </div>
      <div id = "colors-list">
        <Color color = "green"/>
        <Color color = "blue"/>
        <Color color = "violet"/>
      </div>
    </div>
  );
};

export default App;
