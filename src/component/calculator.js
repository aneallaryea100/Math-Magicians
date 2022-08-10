import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="calculateDiv">
          <div>
            <input type="text" className="inputResult" placeholder="0" disabled />
          </div>
          <div className="pressValue">
            <p>AC</p>
            <p>+/-</p>
            <p>%</p>
            <p className="orange">+</p>
          </div>
          <div className="pressValue">
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p className="orange">X</p>
          </div>
          <div className="pressValue">
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p className="orange">-</p>
          </div>
          <div className="pressValue">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p className="orange">+</p>
          </div>
          <div className="pressValue">
            <p className="zero">0</p>
            <p className="dot">.</p>
            <p className="orange equalto">=</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
