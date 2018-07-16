'use strict';

import {combineReducers} from 'redux';

//Action (types)
const ADD_TASK = 'add_task';
const TOGGLE_TASK = 'toggle_task';
const TOGGLE_SHOW_COMPLETE = 'toggle_show_complete';

//an action
//myAction = {type:ADD_TASK, payload:"Here's the description"}

//Action Creator
export function addTask(description) {
    return {type:ADD_TASK, description:description}
}

export function toggleTask(taskId){
    return {type:TOGGLE_TASK, taskId:taskId};
}

export function toggleShowComplete(){
    return {type:TOGGLE_SHOW_COMPLETE};
}

//Reducers
//state represent the list of tasks []
export function taskReducer(currentState = [], action) {
    switch(action.type) {
        case ADD_TASK:             
            //add that task
            let newTask = {
                id:currentState.length + 1,
                description: action.description,
                complete: false
            }
         
            let updatedTasks = currentState.concat(newTask); //check me
            return updatedTasks;            

        case TOGGLE_TASK:
            //toggle that task
            return updatedTasks = currentState.map((task) => {
                if(task.id === action.taskId){
                    //return a new copy
                    let copy = Object.assign({}, task, {
                        complete: !task.complete
                    })
                    return copy;
                }
                return task;
              })
        default:
            return currentState; //leave unchanged
    }
}

//the "state" is just the where or not completed
export function showCompleteReducer(state = false, action){
    if(action.type === TOGGLE_SHOW_COMPLETE){
        return !state;
    }
    return state;
}

export let appReducer = combineReducers({
    tasks: taskReducer,
    showCompleted: showCompleteReducer
})
