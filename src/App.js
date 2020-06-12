import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = {
    advice: '',
  }

  componentDidMount(){
    this.getAdvice();
  }
  getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      this.setState({advice});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="app">
        <div className="card">
    <h1 className="heading">{this.state.advice}</h1>
    <button className="button" onClick={this.getAdvice}>
    <span>Free ki Advice!!</span>
    </button>
        </div>
      </div>
    );
  }

}

export default App;
