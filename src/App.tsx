import React from 'react';
import './App.css';
import {tasks} from "./task.json";
import TaskForm from "./components/TaskForm";


class App extends React.Component<any, any >{

  constructor(props: any){
    super(props);
    this.state = {
      tasks
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task:any){
    this.setState({
      tasks: [...this.state.tasks, task]
    });
    console.log(typeof this.state);
  }

  deleteTask(i:number){
    this.setState({
      tasks: this.state.tasks.filter((task:Object, index:number) =>{
        return index !== i;
      } )
    })
  }

  render(){
    const tasksHTML = this.state.tasks.map( (task:any,  i:number) => {
      return (
        <div className="col-md-3" key={i}>
            <div className="card  mb-3">
                
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <p><mark>{task.responsible}</mark></p>
                    <p className="badge badge-pill badge-danger">{task.priority}</p>
                    
                    <div className="positionButtom">
                        <div className="buttomEditTask" onClick={this.deleteTask.bind(this, i)}>Delete task</div>
                    </div>
                </div>
            </div>
        </div>
      )
    });

    return (
      <div className="App">

          <nav className="navbar navbar-dark bg-dark">
            Task
            <span className="badge badge-pill badge-light ml-2">{this.state.tasks.length}</span>
          </nav>

        <div className="container allContainer">
            <div className="row posFormTasks"> 

              <div className="posTaskForm">
                  <TaskForm updateTaks={this.addTask}/>
              </div>

              <div className="posTasks">
                  <div className="container">
                      <div className="row mt-4">
                          {tasksHTML}
                      </div>
                  </div>
              </div>
              </div>
        </div>

      </div>

    );
  }
}


export default App;
