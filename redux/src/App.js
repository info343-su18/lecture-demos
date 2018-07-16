import React, { Component } from 'react';

const SAMPLE_TASKS = [
  {id:1, description:'Make a task list', complete:true},
  {id:2, description:'Make another one', complete:true},
  {id:3, description:'Make a task list with Redux', complete:false}, 
];


class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      tasks: SAMPLE_TASKS,
      showCompleted: true
    };
  }

  toggleComplete(taskId){
    let updatedTasks = this.state.tasks.map((task) => {
      if(task.id === taskId){
        task.complete = !task.complete; //toggle
      }
      return task;
    })

    this.setState({tasks: updatedTasks}); //update the state and RE-RENDER
  }

  addTask(description){
    let newTask = {
      id:this.state.tasks.length + 1,
      description: description,
      complete: false
    }
    console.log(newTask);

    let updatedTasks = this.state.tasks.concat(newTask);
    this.setState({tasks:updatedTasks});
  }

  toggleShowCompleted() {
    this.setState({showCompleted : !this.state.showCompleted});
  }

  render() {
    return (
      <div className="container">
        <p className="lead">Things I have to do...</p>
        <TaskList
          tasks={this.state.tasks}
          showCompleted={this.state.showCompleted}
          howToToggle={(id) => this.toggleComplete(id)} 
        />
        <AddTaskForm howToAdd={(descr) => this.addTask(descr)} />
        <button 
          className="btn btn-warning mt-2"
          onClick={()=>this.toggleShowCompleted()}
          >
            {this.state.showCompleted ? 'Show Incomplete Tasks' : 'Show All Tasks'}
        </button>
      </div>
    );
  }
}

class TaskList extends Component {
  render() {

    if(this.props.tasks == null) return null;

    let taskComponents = this.props.tasks
      .filter((task) => this.props.showCompleted || !task.complete) 
      .map((eachTask) => {
        return (
          <Task 
            key={eachTask.id} 
            task={eachTask} 
            howToToggle={this.props.howToToggle}
          />
        )
    })

    return (
      <ol>
        {taskComponents}
      </ol>
    );
  }
}

class Task extends Component {

  handleClick() {
    this.props.howToToggle(this.props.task.id);
  }

  render() {
    let className = this.props.task.complete ? 'font-strike' : '';
    return (
      <li className={className} onClick={() => {this.handleClick()} }>
        {this.props.task.description}
      </li>
    );
  }
}

class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {newTask: ''}; //what is typed in
  }

  handleChange(event){
    this.setState({newTask: event.target.value});
  }

  handleClick(event){
    event.preventDefault();
    this.props.howToAdd(this.state.newTask);
    this.setState({value:''}); //reset once finished
  }

  render() {
    return (
      <form>
        <input
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={this.state.newTask}
          onChange={(event) => {this.handleChange(event) } }
          />
        <button
          className="btn btn-primary"
          onClick={(event) => {this.handleClick(event)}}
          >
            Add task to list
        </button>
      </form>
    );
  }
}

export default App;