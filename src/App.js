import React from 'react';
import './App.css';
/* import Clock from './components/features/Clock/Clock';
import { Friend } from './components/Friend/Friend';
import Profile from './components/Profile/Profile';
import  {Effect} from "./components/features/Effect/Effect"; */
import { PickSearch } from './components/features/PickSearch/PickSearch';

 class App extends React.Component {

 
  printName() {
    alert('My name is: Albert');
  }


  render() {
    return (
      <div className="App">
        {/* <Profile printName={this.printName}/> */}
        {/* <Clock /> */}
        {/* <Friend src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Estadio_Mateo_Flores_Guatemala.JPG/1200px-Estadio_Mateo_Flores_Guatemala.JPG"/> */}
        {/* <Effect /> */}
        <PickSearch />
      
      </div>
    );
  }
}

export default App;
