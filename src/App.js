import React from 'react';
import './tailwind.output.css'

function App() {
  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto bg-gray-400 p-10 mt-10">
        <div id="display" className="p-8 bg-white mb-5">
          Test
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div id="seven" className="p-8 bg-white text-center">7</div>
          <div id="eight" className="p-8 bg-white text-center">8</div>
          <div id="nine" className="p-8 bg-white text-center">9</div>
          <div id="add" className="p-8 bg-white text-center">+</div>
          <div id="four" className="p-8 bg-white text-center">4</div>
          <div id="five" className="p-8 bg-white text-center">5</div>
          <div id="six" className="p-8 bg-white text-center">6</div>
          <div id="subtract" className="p-8 bg-white text-center">-</div>
          <div id="one" className="p-8 bg-white text-center">1</div>
          <div id="two" className="p-8 bg-white text-center">2</div>
          <div id="three" className="p-8 bg-white text-center">3</div>
          <div id="multiply" className="p-8 bg-white text-center">x</div>
          <div id="decimal" className="p-8 bg-white text-center">.</div>
          <div id="zero" className="p-8 bg-white text-center">0</div>
          <div id="equals" className="p-8 bg-white text-center">=</div>
          <div id="divide" className="p-8 bg-white text-center">/</div>
        </div>
      </div>
    </div>
  );
}

export default App;
