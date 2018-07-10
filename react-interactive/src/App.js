import React, { Component } from 'react';
import 'whatwg-fetch';

const SAMPLE_TASKS = [
  {id:1, description:'Learn JSX', complete:true},
  {id:2, description:'Learn about React State', complete:false},
  {id:3, description:'Get some sleep', complete:false} 
];


class App extends Component {
  constructor(props){
    super(props); //pass up to parent

    //initialize state
    this.state = {
      tasks: [] //SAMPLE_TASKS //store the tasks in the STATE, initialize
    };

  }

  componentDidMount() {
    fetch('https://api.github.com/repos/info343-su18/lecture-demos/issues')
      .then((res) => res.json())
      .then((data) => {
        let issueTasks = data.map((issue) => {
          return {
            id: issue.id,
            description: issue.title,
            complete: false
          }
        })
        this.setState({tasks:issueTasks})        
      })
  }

  toggleComplete(taskId){
    let updatedTasks = this.state.tasks.map((task) => {
      if(task.id === taskId)
        task.complete = !task.complete;      
      return task;
    })

    this.setState({tasks: updatedTasks}); //update the state and RE-RENDER
  }

  render() {

    let incomplete = this.state.tasks.filter((task) => !task.complete);
    console.log(incomplete.length);

    //CONDITIONAL RENDERING
    let listToShow = null;
    if(incomplete.length !== 0){ //nothing to do
      listToShow = <TaskList 
        tasks={this.state.tasks} 
        howToToggle={(id) => this.toggleComplete(id)} 
      />
    } else {
      listToShow = <p className="alert-alert-warning">Downloading...</p>
    }

    return (
      <div className="container">
        <p className="lead">Things I have to do ({incomplete.length})</p>
        {listToShow}
        <AddTaskForm />
      </div>
    );
  }
}

class TaskList extends Component {  
  render() {
    //do data processing
    let taskComponents = this.props.tasks
      .filter((task) => !task.complete)
      .map((eachTask) => {
        return (
          <Task 
            key={eachTask.id} 
            task={eachTask} 
            howToToggle={this.props.howToToggle}
          />
        ); //a thing in the array
      })

    return (
      <ol>
        {taskComponents}
      </ol>
    );
  }
}

class Task extends Component {
  //helper method
  getClassName() {
    let className = '';
    if(this.props.task.complete){
      className = 'font-strike';
    }
    return className;    
  }

  //change this in a moment
  handleClick() {
    this.props.howToToggle(this.props.task.id);
  }

  componentDidMount() {
    // console.log("mounting", this.props.task.description);
  }

  componentWillUnmount() {
    // console.log("unmounting", this.props.task.description);
  }

  render() {
    let thisTask = this.props.task; //can give local name for readability
    return (
      <li 
        className={this.getClassName()} 
        onClick={() => this.handleClick()}
        >
          {thisTask.description}
      </li>
    );
  }
}

class AddTaskForm extends Component {
  render() {
    return (
      <form>
        <input 
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          />
        <button className="btn btn-primary">Add task to list</button>
      </form>
    );
  }
}

export default App;