import React, { Component } from 'react';

import firebase from 'firebase/app';

export default class TaskApp extends Component {
  constructor(props){
    super(props); //pass up to parent

    //initialize state
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    //asynchronously load data!
    let taskRef = firebase.database().ref('tasks');
    taskRef.on('value', (snapshot) => {
      this.setState({
        tasks: snapshot.val()
      })

    }) //"value change" events
  }

  toggleComplete(taskId){
    //toggle task completion
    let localTask = this.state.tasks[taskId];

    let taskRef = firebase.database().ref('tasks').child(taskId);
    taskRef.update({
      complete: !localTask.complete
    })

    console.log(taskId);
  }

  addTask(newDescription) {
    //add additional task
    console.log("adding task");

    //modifying the task
    let tasksRef = firebase.database().ref('tasks');

    let newTask = {
      description: newDescription,
      complete: false
    }

    tasksRef.push(newTask)
      .catch(console.log)
  }

  render() {

    return (
      <div className="container">
        <h2>Things <strong>WE</strong> have to do</h2>
        <TaskList 
          tasks={this.state.tasks} 
          howToToggle={(id) => this.toggleComplete(id)} 
        />
        <AddTaskForm howToAdd={(descr) => this.addTask(descr)} />
      </div>
    );
  }
}

class TaskList extends Component {  
  render() {

    console.log(this.props.tasks);

    if(this.props.tasks == null) return null; //if no tasks, show nothing

    //do data processing
    let keyArray = Object.keys(this.props.tasks);
    let taskArray = keyArray.map((key) => {
      let objAtKey = this.props.tasks[key]
      objAtKey.id = key;
      return objAtKey;
    })

    let taskComponents = taskArray.map((eachTask) => {
      return (
        <Task 
          key={eachTask.id} 
          task={eachTask} 
          howToToggle={this.props.howToToggle}
        />
      );
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

  render() {
    let thisTask = this.props.task; //can give local name for readability
    let className = this.props.task.complete ? 'font-strike' : '';
    return (
      <li className={className} onClick={() => this.handleClick()}>
        {thisTask.description}
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
    let value = event.target.value;
    this.setState({newTask: value})
  }

  handleClick(event){
    event.preventDefault(); //don't actually submit the form
    //take this.state.newTask and add it to the list
    this.props.howToAdd(this.state.newTask);
    this.setState({newTask: ''});
  }

  render() {
    return (
      <form>
        <input 
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={this.state.newTask}
          onChange={(evt) => this.handleChange(evt)}
          />
        <button className="btn btn-primary" onClick={(evt) => this.handleClick(evt)}>
          Add task to list
        </button>
      </form>
    );
  }
}
