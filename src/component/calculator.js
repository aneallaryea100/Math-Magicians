import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  function handleClicks(e) {
    setState((prevState) => ({ ...prevState, ...calculate(prevState, e.target.textContent) }));
  }

  return (
    <div className="mainContainer">
      <div className="calculateDiv">
        <div>
          <div type="text" className="inputResult">
            {state.next || state.operation || state.total || 0}
          </div>
        </div>
        <div className="pressValue">
          <button type="button" onClick={handleClicks}>AC</button>
          <button type="button" onClick={handleClicks}>+/-</button>
          <button type="button" onClick={handleClicks}>%</button>
          <button type="button" onClick={handleClicks} className="orange">+</button>
        </div>
        <div className="pressValue">
          <button type="button" onClick={handleClicks}>7</button>
          <button type="button" onClick={handleClicks}>8</button>
          <button type="button" onClick={handleClicks}>9</button>
          <button type="button" onClick={handleClicks} className="orange">X</button>
        </div>
        <div className="pressValue">
          <button type="button" onClick={handleClicks}>4</button>
          <button type="button" onClick={handleClicks}>5</button>
          <button type="button" onClick={handleClicks}>6</button>
          <button type="button" onClick={handleClicks} className="orange">-</button>
        </div>
        <div className="pressValue">
          <button type="button" onClick={handleClicks}>1</button>
          <button type="button" onClick={handleClicks}>2</button>
          <button type="button" onClick={handleClicks}>3</button>
          <button type="button" onClick={handleClicks} className="orange">+</button>
        </div>
        <div className="pressValue">
          <button type="button" onClick={handleClicks} className="zero">0</button>
          <button type="button" onClick={handleClicks} className="dot">.</button>
          <button type="button" onClick={handleClicks} className="orange equalto">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
