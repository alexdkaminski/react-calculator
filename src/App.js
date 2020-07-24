import React, { useState } from 'react';
import './tailwind.output.css'

function App() {
  const [display, setDisplay] = useState(['0'])
  // const [operation, setOperation] = useState([])

  // Operation functions

  const multiply = (a,b) => {
    return a * b;
  }

  const divide = (a,b) => {
      return a / b;
  }

  const add = (a,b) => {
      return a + b;
  }

  const subtract = (a,b) => {
      return a - b;
  }

  const handleNumberClick = (e) => {
    const number = e.target.textContent
    console.log(display)
    const lastElement = display[display.length - 1]
    console.log(lastElement)
    if (display[0] === '0') {
      setDisplay([number])
    } else if (lastElement === '+' || lastElement === '-' ||lastElement === '*' ||lastElement === '/') {
      console.log('operator')
      setDisplay(display.concat(number))
    }
    else {
      const newArray = [...display]
      newArray[[newArray.length - 1]] += number
      setDisplay(newArray)
    }
  }

  const handleOperatorClick = (e) => {
    const operator = e.target.textContent
    setDisplay(display.concat(operator))

    // setOperation([display.join()].concat(operator))
  }

  const handleDecimalClick = (e) => {
  }

  const handleClearClick = () => {
    setDisplay(['0'])
    // setOperation(null)
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto bg-gray-400 p-10 mt-10">
        <div id="display" className="p-8 bg-white mb-5 text-right">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div id="seven" onClick={handleNumberClick} className="p-8 bg-white text-center">7</div>
          <div id="eight" onClick={handleNumberClick} className="p-8 bg-white text-center">8</div>
          <div id="nine" onClick={handleNumberClick} className="p-8 bg-white text-center">9</div>
          <div id="add" onClick={handleOperatorClick} className="p-8 bg-white text-center">+</div>
          <div id="four" onClick={handleNumberClick} className="p-8 bg-white text-center">4</div>
          <div id="five" onClick={handleNumberClick} className="p-8 bg-white text-center">5</div>
          <div id="six" onClick={handleNumberClick} className="p-8 bg-white text-center">6</div>
          <div id="subtract" onClick={handleOperatorClick} className="p-8 bg-white text-center">-</div>
          <div id="one" onClick={handleNumberClick} className="p-8 bg-white text-center">1</div>
          <div id="two" onClick={handleNumberClick} className="p-8 bg-white text-center">2</div>
          <div id="three" onClick={handleNumberClick} className="p-8 bg-white text-center">3</div>
          <div id="multiply" onClick={handleOperatorClick} className="p-8 bg-white text-center">x</div>
          <div id="decimal" onClick={handleDecimalClick} className="p-8 bg-white text-center">.</div>
          <div id="zero" onClick={handleNumberClick} className="p-8 bg-white text-center">0</div>
          <div id="equals" onClick={handleOperatorClick} className="p-8 bg-white text-center">=</div>
          <div id="divide" onClick={handleOperatorClick} className="p-8 bg-white text-center">/</div>
        </div>
        <div id="clear" onClick={handleClearClick} className="mt-4 p-8 bg-white text-center">Clear</div>
      </div>
    </div>
  );
}

export default App;
