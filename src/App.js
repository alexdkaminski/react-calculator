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

  const isOperator = (a) => {
    if (a === 'x' || a === '/' || a === '+' || a === '-') {
      return true
    } else {
      return false
    }
  }

  const isNegative = (a) => {
    if (a === '-') {
      return true
    } else {
      return false
    }
  }

  const handleNumberClick = (e) => {
    const number = e.target.textContent
    const lastElement = display[display.length - 1]
    if (display.length === 1 && display[0] === '0') {
      setDisplay([number])
    } else if (isOperator(lastElement)) {
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
      let numberArray = display.map(element => {
        if (element.includes('.')) {
          return parseFloat(element)
        } else if (element >= 0) {
          return parseInt(element)
        } else {
          return element
        }
      })

      // Loop through checking for multiplication
      for (let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === 'x') {
          console.log('Multiplication detected')
          // Check for preceding operator
          if (isOperator(numberArray[i-1])) {
            console.log(`Preceding operator found, multiplying ${numberArray[i-2]} by ${numberArray[i+1]}`)
            result = multiply(numberArray[i-2],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-2,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (isNegative(numberArray[i+1])) {
            numberArray[i+2] = -Math.abs(numberArray[i+2])
            console.log('Negative detected')
            console.log(numberArray[i+2])
            result = multiply(numberArray[i-1],numberArray[i+2])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-3,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (!isOperator(numberArray[i+1])) {
            console.log(`Multiplying ${numberArray[i-1]} by ${numberArray[i+1]}`)
            result = multiply(numberArray[i-1],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-1,3,result)
          }
        }
      }

      // Loop through checking for division
      for (let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === '/') {
          console.log('Division detected')
          // Check for preceding operator
          if (isOperator(numberArray[i-1])) {
            console.log(`Dividing ${numberArray[i-2]} by ${numberArray[i+1]}`)
            result = divide(numberArray[i-2],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-2,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (isNegative(numberArray[i+1])) {
            numberArray[i+2] = -Math.abs(numberArray[i+2])
            console.log('Negative detected')
            console.log(numberArray[i+2])
            result = divide(numberArray[i-1],numberArray[i+2])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-3,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (!isOperator(numberArray[i+1])) {
            console.log(`Dividing ${numberArray[i-1]} by ${numberArray[i+1]}`)
            result = divide(numberArray[i-1],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-1,3,result)
            console.log(`New number array: ${numberArray}`)
          }
        }
      }

      // Loop through checking for addition
      for (let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === '+') {
          console.log('Addition detected')
          // Check for preceding operator
          if (isOperator(numberArray[i-1])) {
            console.log(`Adding ${numberArray[i-2]} to ${numberArray[i+1]}`)
            result = add(numberArray[i-2],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-2,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (isNegative(numberArray[i+1])) {
            numberArray[i+2] = -Math.abs(numberArray[i+2])
            console.log('Negative detected')
            console.log(numberArray[i+2])
            result = add(numberArray[i-1],numberArray[i+2])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-3,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (!isOperator(numberArray[i+1])) {
            console.log(`Adding ${numberArray[i-1]} to ${numberArray[i+1]}`)
            result = add(numberArray[i-1],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-1,3,result)
            console.log(`New number array: ${numberArray}`)
          }
        }
      }
      // Loop through checking for subtraction
      for (let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === '-') {
          console.log('Subtraction detected')
          console.log(numberArray)
          console.log(numberArray[i+1])
          // Check if negative
          if (isNegative(numberArray[i-1])) {
            console.log(2)
            numberArray[i+1] = -Math.abs(numberArray[i+1])
            console.log('Negative detected')
            console.log(numberArray[i+1])
            console.log(`Subtracting ${numberArray[i+1]} from ${numberArray[i-2]}`)
            result = subtract(numberArray[i-2],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-3,4,result)
            console.log(`New number array: ${numberArray}`)
          // Check for preceding operator
          } else if (isOperator(numberArray[i-1])) {
            console.log(1)
            console.log(`Subtracting ${numberArray[i+1]} from ${numberArray[i-2]}`)
            result = subtract(numberArray[i-2],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-2,4,result)
            console.log(`New number array: ${numberArray}`)
          } else if (!isOperator(numberArray[i+1])) {
            console.log(3)
            console.log(`Subtracting ${numberArray[i+1]} from ${numberArray[i-1]}`)
            result = subtract(numberArray[i-1],numberArray[i+1])
            console.log(`Result: ${result}`)
            console.log(`Old number array: ${numberArray}`)
            numberArray.splice(i-1,3,result)
            console.log(`New number array: ${numberArray}`)
          }
        }
      }

      setDisplay([result.toString()])
    }
  }

  const handleDecimalClick = (e) => {
    const lastElement = display[display.length - 1]

    if (lastElement !== '+' || lastElement !== '-' ||lastElement !== 'x' ||lastElement !== '/') {
      const newArray = [...display]
      newArray[[newArray.length - 1]] += '.'
      setDisplay(newArray)
    }
  }

  const handleClearClick = () => {
    setDisplay(['0'])
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
