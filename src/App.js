import React, { useState } from 'react';
import './tailwind.output.css'

function App() {
  const [display, setDisplay] = useState(['0'])
  // const [operation, setOperation] = useState([])

  // Operation functions

  const multiply = (a,b) => {
    return a * b
  }

  const divide = (a,b) => {
    return a / b
  }

  const add = (a,b) => {
    return a + b
  }

  const subtract = (a,b) => {
    return a - b
  }

  const handleNumberClick = (e) => {
    const number = e.target.textContent
    const lastElement = display[display.length - 1]
    if (display[0] === '0') {
      setDisplay([number])
    } else if (lastElement === '+' || lastElement === '-' ||lastElement === 'x' ||lastElement === '/') {
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
    let result
    if (operator === '=') {
      // Evaluate formula
      const numberArray = display.map(element =>
        element >= 0 ? parseInt(element) : element
      )
      numberArray.forEach((element,index) => {
        switch (element) {
          case '+':
            console.log('Addition detected')
            // If we already have a result, add second number to result
            if (result) {
              console.log(`We have a result, adding ${result} to ${numberArray[index+1]}`)
              result = add(result,numberArray[index+1])
            // If we don't have a result, add first number to second number
            } else {
              console.log(`We don't have a result, adding ${numberArray[index-1]} to ${numberArray[index+1]}`)
              result = add(numberArray[index-1],numberArray[index+1])
            }
            console.log(`Result: ${result}`)
            break;
          case '-':
            console.log('Subtraction detected')
            // If we already have a result, subtract second number from result
            if (result) {
              console.log(`We have a result, subtracting ${numberArray[index+1]} from ${result}`)
              result = subtract(result,numberArray[index+1])
            // If we don't have a result, subtract the second number from the first number
            } else {
              console.log(`We don't have a result, subtracting ${numberArray[index+1]} from ${numberArray[index-1]}`)
              result = subtract(numberArray[index-1],numberArray[index+1])
            }
            console.log(`Result: ${result}`)
            break;
          case 'x':
            console.log('Multiplication detected')
            // If we already have a result, multiply result by second number
            if (result) {
              console.log(`We have a result, multiplying ${result} by ${numberArray[index+1]}`)
              result = multiply(result,numberArray[index+1])
            // If we don't have a result, multiply first number by second number
            } else {
              console.log(`We don't have a result, multiplying ${numberArray[index+1]} by ${numberArray[index-1]}`)
              result = multiply(numberArray[index-1],numberArray[index+1])
            }
            console.log(`Result: ${result}`)
            break;
          default:
            break;
        }
      })
      setDisplay([result.toString()])
    }
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
