import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="mainContainer">
        <div className="calculateDiv">
          <div>
            <div type="text" className="inputResult">
              {next || operation || total || 0}
            </div>
          </div>
          <div className="pressValue">
            <button type="button" onClick={this.handleClicks}>AC</button>
            <button type="button" onClick={this.handleClicks}>+/-</button>
            <button type="button" onClick={this.handleClicks}>%</button>
            <button type="button" onClick={this.handleClicks} className="orange">+</button>
          </div>
          <div className="pressValue">
            <button type="button" onClick={this.handleClicks}>7</button>
            <button type="button" onClick={this.handleClicks}>8</button>
            <button type="button" onClick={this.handleClicks}>9</button>
            <button type="button" onClick={this.handleClicks} className="orange">x</button>
          </div>
          <div className="pressValue">
            <button type="button" onClick={this.handleClicks}>4</button>
            <button type="button" onClick={this.handleClicks}>5</button>
            <button type="button" onClick={this.handleClicks}>6</button>
            <button type="button" onClick={this.handleClicks} className="orange">-</button>
          </div>
          <div className="pressValue">
            <button type="button" onClick={this.handleClicks}>1</button>
            <button type="button" onClick={this.handleClicks}>2</button>
            <button type="button" onClick={this.handleClicks}>3</button>
            <button type="button" onClick={this.handleClicks} className="orange">+</button>
          </div>
          <div className="pressValue">
            <button type="button" onClick={this.handleClicks} className="zero">0</button>
            <button type="button" onClick={this.handleClicks} className="dot">.</button>
            <button type="button" onClick={this.handleClicks} className="orange equalto">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
