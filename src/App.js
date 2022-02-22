import logo from './logo.svg';
import React from 'react';

import './App.css';
import Cabecera from './components/Cabecera';
import Cuerpo from './components/Cuerpo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Esto es el titulo pasado con props"}
    this.changeName = this.changeName.bind(this);

  }; 
  render(){
    return (
      <div className="App">
          <Cabecera title={this.state.title}/>
          <Cuerpo changeNameX={this.changeName}/>
      </div>
    );
  }
  changeName(){
    console.log(this)
    this.setState({ title: "Nuevo titulo papi"})
  }
}

export default App;
