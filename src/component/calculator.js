import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks = (e) => {
    const { data } = this.state;
    const result = calculate(data, e.target.textContent);
    this.setState({ data: result });
    // this.setState((prevState) => (calculate(prevState, e.target.textContent)));
    // nullState() ? '0' : result
  };

  render() {
    const { total, next, operation } = this.state;
    const nullState = () => !total && !next && !operation;
    const result = () => {
      if (operation) return `${total} ${operation} ${next || ''}`;
      return next || total;
    };
    return (
      <div className="mainContainer">
        <div className="calculateDiv">
          <div>
            <div type="text" className="inputResult">{nullState() ? '0' : result}</div>
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
            <button type="button" onClick={this.handleClicks} className="orange">X</button>
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
