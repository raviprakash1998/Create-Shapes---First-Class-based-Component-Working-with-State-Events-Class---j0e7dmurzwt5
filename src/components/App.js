import React from 'react'
import '../styles/App.css';

const App = () => {
  let count = 0;
  function shapeCreater() {
    const container = document.getElementById("shapes-holder");
    const valueCheck = document.getElementById("selectName")
    /*retrieves the value of the selected option in the select element
     and assigns it to a variable named valuess. */
    let valuess = valueCheck.value;
    const newShape = document.createElement("div");
    newShape.innerText = count;
    newShape.className = valuess;
    container.append(newShape);
    count++;
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select id='selectName'>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        
        <button onClick={shapeCreater}>Add shape</button>
      </div>
      <div id="shapes-holder">
            
      </div>
    </div>
  )
}


export default App;
