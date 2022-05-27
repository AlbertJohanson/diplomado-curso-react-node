import React from 'react';
import {Link , Outlet} from "react-router-dom"
import './App.css';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import ChracterList from './components/CharacterList/ChracterList';
 class App extends React.Component {

 
  printName() {
    alert('My name is: Albert');
  }


  render() {
    return (
      <div className="App">
        <ChracterList />
        <div>
          <CharacterDetail />
        </div>
        {/* <div className='ui pointing menu'>
          <div className='ui container'>
            <Link to='/' className='item'><i className='home icon'></i>Home</Link>
            <Link to="clock" className='item'> Clock App </Link>
            <Link to="friend" className='item'> Friend App </Link>
            <Link to="profile" className='item'> Profile App </Link>
            <Link to="increment" className='item'> Increment App </Link>
            <Link to="picksearch" className='item'> Pick Sear App </Link>
          </div>
        </div>
      <div className='ui container'>
        <h1>Select the app you want to use</h1>
        <Outlet />
      </div> */}


      </div>
    );
  }
}

export default App;
