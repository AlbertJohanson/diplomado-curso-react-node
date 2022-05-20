import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';

 class App extends React.Component {

  printName() {
    alert('My name is: Albert');
  }


  render() {
    return (
      <div className="App">
        <Profile printName={this.printName}/>
      </div>
    );
  }
}

export default App;
