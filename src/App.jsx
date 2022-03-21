import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
    someKey: true
  };

  clickPlus = () => {
    this.setState ({count: this.state.count + 1})
  }

  clickMinus = () => {
    this.setState ({count: this.state.count -1})
  }

  clickReset = () => {
    this.setState ({count: this.state.count * 0})
  }

  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <h1>⚡React counter⚡</h1>
          <span className='counter'>{this.state.count}</span>
          <div className='btns'>
            <button className='btn' onClick={this.clickPlus}>Plus</button>
            <button className='btn' onClick={this.clickMinus}>Minus</button>
            <button className='btn' onClick={this.clickReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
