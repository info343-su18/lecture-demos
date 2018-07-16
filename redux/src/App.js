import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as Action from './store';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    howToToggle: (taskId) => dispatch(Action.toggleTask(taskId)),
    howToAdd: (description) => dispatch(Action.addTask(description)),
    toggleShowCompleted: () => dispatch(Action.toggleShowComplete())
  }
}

let makeConnection = connect(mapStateToProps, mapDispatchToProps);

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = store.getState();
  // }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState(store.getState());
  //   })
  // }

  // toggleComplete(taskId){
  //   store.dispatch(Action.toggleTask(taskId))
  // }

  // addTask(description){
  //   store.dispatch(Action.addTask(description))
  // }

  // toggleShowCompleted() {
  //   store.dispatch(Action.toggleShowComplete());
  // }

  render() {
    return (
      <div className="container">
        <p className="lead">Things I have to do...</p>
        <ConnectedTaskList/>
        <ConnectedTaskForm/>
        <button 
          className="btn btn-warning mt-2"
          onClick={()=>this.props.toggleShowCompleted()}
          >
            {this.props.showCompleted ? 'Show Just Incomplete Tasks' : 'Show All Tasks'}
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

let ConnectedApp = makeConnection(App);
let ConnectedTaskList = makeConnection(TaskList);
let ConnectedTaskForm = makeConnection(AddTaskForm);
let ConnectedTask = makeConnection(Task);

export default ConnectedApp;