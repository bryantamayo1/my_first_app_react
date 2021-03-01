import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {tasks} from "./task.json";


class App extends React.Component<any, any >{
  constructor(props: any){
    super(props);
    this.state = {
      tasks
    }
  }

  render(){
    const tasksHTML = this.state.tasks.map( (task:any, i: number) => {
      return (
            <div className="card">
                {task.title}
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      )
    });

    return (
      <div className="App">
          <header className="header">
            Task
            <div>0</div>
          </header>
          {tasksHTML}
          <img src={logo} className="App-logo" alt="logo"/>
      </div>
    );
  }
}


export default App;
