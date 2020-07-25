import React, { useState } from 'react';
import './tailwind.output.css'

function App() {
  const [display, setDisplay] = useState(['0'])

  // Operation functions

  const multiply = (a, b) => (a * b)

  const divide = (a, b) => (a / b)

  const add = (a, b) => (a + b)

  const subtract = (a, b) => (a - b)

  const isOperator = a => (a === 'x' || a === '/' || a === '+' || a === '-') ? true : false

  const isNumber = a => (Number.isFinite(a))

  const isNegative = a => a === '-' ? true : false

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

          // Check if this operator is followed by a number
          if (isNumber(numberArray[i + 1])) {
            if (isNumber(numberArray[i - 1])) {
              // This operator has a number to the left and right ie. 4x5
              result = multiply(numberArray[i - 1], numberArray[i + 1])
              numberArray.splice(i - 1, 3, result)
            } else if (isNumber(numberArray[i-2])) {
              // This operator has a number two places to the left and one to the right ie. 4+x5
              result = multiply(numberArray[i - 2], numberArray[i + 1])
              numberArray.splice(i - 2, 4, result)
            } else if (isNumber(numberArray[i-3])) {
              // This operator has a number three places to the left and one to the right ie. 4-+x5
              result = multiply(numberArray[i - 3], numberArray[i + 1])
              numberArray.splice(i - 3, 5, result)
            }
            // This operator is followed by a negative symbol then a number ie x-5
          } else if (isNegative(numberArray[i + 1]) && isNumber(numberArray[i + 2])) {
            numberArray[i + 2] = -Math.abs(numberArray[i + 2])
            // This operator has a number to the left and is followed by a negative symbol then a number ie 4x-5
            if (isNumber(numberArray[i - 1])) {
              result = multiply(numberArray[i - 1], numberArray[i + 2])
              numberArray.splice(i - 3, 4, result)
            // This operator has a number two places to the left and is followed by a negative symbol then a number ie 4+x-5
            } else if (isNumber(numberArray[i - 2])) {
              result = multiply(numberArray[i - 2], numberArray[i + 2])
              numberArray.splice(i - 4, 5, result)
            }
          }

          // if (!isOperator(numberArray[i + 1])) {
          //   // if (!isOperator(numberArray[i + 2])) {
          //   // }
          //   console.log('no following')
          //   result = multiply(numberArray[i - 1], numberArray[i + 1])
          //   numberArray.splice(i - 1, 3, result)
          // }
          // if (isOperator(numberArray[i - 1])) {
          //   // Check for second preceding operator
          //   if (isOperator(numberArray[i - 2])) {
          //     result = multiply(numberArray[i - 3], numberArray[i + 1])
          //     numberArray.splice(i - 3, 5, result)
          //   } else {
          //     result = multiply(numberArray[i - 2], numberArray[i + 1])
          //     numberArray.splice(i - 2, 4, result)
          //   }

          // // Check for negative number
          // } else if (isNegative(numberArray[i + 1])) {
          //   numberArray[i + 2] = -Math.abs(numberArray[i + 2])
          //   result = multiply(numberArray[i - 1], numberArray[i + 2])
          //   numberArray.splice(i - 3, 4, result)
          // // Check for no following operator
          // }
        }
     }

      // Loop through checking for division
      for (let i = numberArray.length - 1; i >= 0; i--) {
        if (numberArray[i] === '/') {

           // Check if this operator is followed by a number
           if (isNumber(numberArray[i + 1])) {
            if (isNumber(numberArray[i - 1])) {
              // This operator has a number to the left and right ie. 4/5
              result = divide(numberArray[i - 1], numberArray[i + 1])
              numberArray.splice(i - 1, 3, result)
            } else if (isNumber(numberArray[i-2])) {
              // This operator has a number two places to the left and one to the right ie. 4+x5
              result = divide(numberArray[i - 2], numberArray[i + 1])
              numberArray.splice(i - 2, 4, result)
            } else if (isNumber(numberArray[i-3])) {
              // This operator has a number three places to the left and one to the right ie. 4-+x5
              result = divide(numberArray[i - 3], numberArray[i + 1])
              numberArray.splice(i - 3, 5, result)
            }
            // This operator is followed by a negative symbol then a number ie x-5
          } else if (isNegative(numberArray[i + 1]) && isNumber(numberArray[i + 2])) {
            numberArray[i + 2] = -Math.abs(numberArray[i + 2])
            // This operator has a number to the left and is followed by a negative symbol then a number ie 4x-5
            if (isNumber(numberArray[i - 1])) {
              result = divide(numberArray[i - 1], numberArray[i + 2])
              numberArray.splice(i - 3, 4, result)
            // This operator has a number two places to the left and is followed by a negative symbol then a number ie 4+x-5
            } else if (isNumber(numberArray[i - 2])) {
              result = divide(numberArray[i - 2], numberArray[i + 2])
              numberArray.splice(i - 4, 5, result)
            }
          }

          // // Check for preceding operator
          // if (isOperator(numberArray[i - 1])) {
          //   // Check for second preceding operator
          //   if (isOperator(numberArray[i - 2])) {
          //     result = divide(numberArray[i - 3], numberArray[i + 1])
          //     numberArray.splice(i - 3, 5, result)
          //   } else {
          //     result = divide(numberArray[i - 2], numberArray[i + 1])
          //     numberArray.splice(i - 2, 4, result)
          // }
          // } else if (isNegative(numberArray[i + 1])) {
          //   numberArray[i + 2] = -Math.abs(numberArray[i + 2])
          //   result = divide(numberArray[i - 1], numberArray[i + 2])
          //   numberArray.splice(i - 3, 4, result)
          // } else if (!isOperator(numberArray[i + 1])) {
          //   result = divide(numberArray[i - 1], numberArray[i + 1])
          //   numberArray.splice(i - 1, 3, result)
          // }
        }
      }

      // Loop through checking for addition
      for (let i = 0; i <= numberArray.length; i++) {
        if (numberArray[i] === '+') {
          // Check if this operator is followed by a number
          if (isNumber(numberArray[i + 1])) {
            if (isNumber(numberArray[i - 1])) {
              // This operator has a number to the left and right ie. 4/5
              result = add(numberArray[i - 1], numberArray[i + 1])
              numberArray.splice(i - 1, 3, result)
              i--
            } else if (isNumber(numberArray[i-2])) {
              // This operator has a number two places to the left and one to the right ie. 4+x5
              result = add(numberArray[i - 2], numberArray[i + 1])
              numberArray.splice(i - 2, 4, result)
            } else if (isNumber(numberArray[i-3])) {
              // This operator has a number three places to the left and one to the right ie. 4-+x5
              result = add(numberArray[i - 3], numberArray[i + 1])
              numberArray.splice(i - 3, 5, result)
            }
            // This operator is followed by a negative symbol then a number ie x-5
          } else if (isNegative(numberArray[i + 1]) && isNumber(numberArray[i + 2])) {
            numberArray[i + 2] = -Math.abs(numberArray[i + 2])
            // This operator has a number to the left and is followed by a negative symbol then a number ie 4x-5
            if (isNumber(numberArray[i - 1])) {
              result = add(numberArray[i - 1], numberArray[i + 2])
              numberArray.splice(i - 3, 4, result)
            // This operator has a number two places to the left and is followed by a negative symbol then a number ie 4+x-5
            } else if (isNumber(numberArray[i - 2])) {
              result = add(numberArray[i - 2], numberArray[i + 2])
              numberArray.splice(i - 4, 5, result)
            }
          }

          // // Check for preceding operator
          // if (isOperator(numberArray[i - 1])) {
          //   // Check for second preceding operator
          //   if (isOperator(numberArray[i - 2])) {
          //     result = add(numberArray[i - 3], numberArray[i + 1])
          //     numberArray.splice(i - 3, 5, result)
          //   } else {
          //   result = add(numberArray[i - 2], numberArray[i + 1])
          //   numberArray.splice(i - 2, 4, result)
          // }
          // } else if (isNegative(numberArray[i + 1])) {
          //   numberArray[i + 2] = -Math.abs(numberArray[i + 2])
          //   result = add(numberArray[i - 1], numberArray[i + 2])
          //   numberArray.splice(i - 3, 4, result)
          // } else if (!isOperator(numberArray[i + 1])) {
          //   result = add(numberArray[i - 1], numberArray[i + 1])
          //   numberArray.splice(i - 1, 3, result)
          //   i--
          // }
        // Check if negative
        } else if (numberArray[i] === '-') {
          // Check if this operator is followed by a number
          if (isNumber(numberArray[i + 1])) {
            if (isNumber(numberArray[i - 1])) {
              // This operator has a number to the left and right ie. 4+5
              result = subtract(numberArray[i - 1], numberArray[i + 1])
              numberArray.splice(i - 1, 3, result)
              i--
            } else if (isNumber(numberArray[i-2])) {
              // This operator has a number two places to the left and one to the right ie. 4x+5
              result = subtract(numberArray[i - 2], numberArray[i + 1])
              numberArray.splice(i - 2, 4, result)
            } else if (isNumber(numberArray[i-3])) {
              // This operator has a number three places to the left and one to the right ie. 4-x+5
              result = subtract(numberArray[i - 3], numberArray[i + 1])
              numberArray.splice(i - 3, 5, result)
            }
            // This operator is followed by a negative symbol then a number ie x-5
          } else if (isNegative(numberArray[i + 1]) && isNumber(numberArray[i + 2])) {
            numberArray[i + 2] = -Math.abs(numberArray[i + 2])
            // This operator has a number to the left and is followed by a negative symbol then a number ie 4x-5
            if (isNumber(numberArray[i - 1])) {
              result = subtract(numberArray[i - 1], numberArray[i + 2])
              numberArray.splice(i - 3, 4, result)
            // This operator has a number two places to the left and is followed by a negative symbol then a number ie 4+x-5
            } else if (isNumber(numberArray[i - 2])) {
              result = subtract(numberArray[i - 2], numberArray[i + 2])
              numberArray.splice(i - 4, 5, result)
            }
          }
        }
          // if (isNegative(numberArray[i - 1])) {
          //   // Check for second preceding operator
          //   if (isOperator(numberArray[i - 2])) {
          //     result = subtract(numberArray[i - 3], numberArray[i + 1])
          //     numberArray.splice(i - 3, 5, result)
          //   } else {
          //     numberArray[i + 1] = -Math.abs(numberArray[i + 1])
          //     result = subtract(numberArray[i - 2], numberArray[i + 1])
          //     numberArray.splice(i - 3, 4, result)
          // }
          //   // Check for preceding operator
          // } else if (isOperator(numberArray[i - 1])) {
          //   result = subtract(numberArray[i - 2], numberArray[i + 1])
          //   numberArray.splice(i - 2, 4, result)
          // } else if (!isOperator(numberArray[i + 1])) {
          //   result = subtract(numberArray[i - 1], numberArray[i + 1])
          //   numberArray.splice(i - 1, 3, result)
          //   i--
          // }

      }

      setDisplay([result.toString()])
    }
  }

  const handleDecimalClick = (e) => {
    const lastElement = display[display.length - 1]


    if (!isOperator(lastElement) && lastElement.indexOf('.') <= 0) {

      const newArray = [...display]
      newArray[[newArray.length - 1]] += '.'
      setDisplay(newArray)
    }
  }

  const handleClearClick = () => {
    setDisplay(['0'])
  }

  return (
    <div className="bg-light-blue flex h-screen">
        <div className="max-w-md m-auto container text-3xl">
          <div className="bg-blue-800 p-10 rounded-lg shadow-2xl mx-4">
            <div id="display" className="text-5xl pr-4 bg-white mb-5 text-right overflow-hidden bg-powder-blue">
              {display}
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div id="seven" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">7</div>
              <div id="eight" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">8</div>
              <div id="nine" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">9</div>
              <div id="add" onClick={handleOperatorClick} className="bg-blue-500 hover:bg-blue-400 text-white p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center font-bold">+</div>
              <div id="four" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">4</div>
              <div id="five" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">5</div>
              <div id="six" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">6</div>
              <div id="subtract" onClick={handleOperatorClick} className="bg-blue-500 hover:bg-blue-400 text-white p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center font-bold">-</div>
              <div id="one" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">1</div>
              <div id="two" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">2</div>
              <div id="three" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">3</div>
              <div id="multiply" onClick={handleOperatorClick} className="bg-blue-500 hover:bg-blue-400 text-white p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center font-bold">x</div>
              <div id="decimal" onClick={handleDecimalClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center">.</div>
              <div id="zero" onClick={handleNumberClick} className="bg-gray-300 hover:bg-blue-100 p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center col-span-2">0</div>
              <div id="divide" onClick={handleOperatorClick} className="bg-blue-500 hover:bg-blue-400 text-white p-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-center font-bold">/</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div id="clear" onClick={handleClearClick} className="p-4 bg-red-200 text-center">Clear</div>
              <div id="equals" onClick={handleOperatorClick} className="p-4 bg-green-200 text-center">=</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
