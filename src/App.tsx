import React from 'react';
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
        <div className="col-md-3">
            <div className="card">
                
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
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
        </div>

    );
  }
}


export default App;
