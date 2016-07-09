// TODO: Add IIFE, but leave for console testing in development
'use strict';
console.log('Start... Todo List program');


// Create a function to handle Add Tasks
var addTask = function () {
    // 1. Add
    //     * User writes task 'go shopping'.
    //     * User push add new task button
    //     * Task is added to a incomplete tasks list
    //         * An empty task can't be added to incomplete tasks list
};

// Create a function to handle Edit Tasks
var editTask = function () {
    // 2. Change
    //     * User press button to edit added task
    //     * Task can now be edited
    //     * User writes new text in edit mode
    //     * User push save button to save edit text to added task
    //         * If Edited task is empty inform user that edited task must contain something
    //     * Task can now NOT be edited
};

// Create a function to handle Completed Tasks
var taskCompleted = function () {
    // 3. Mark task as complete
    //     * User push completed task button
    //     * Task is moved from incomplete tasks list to a completed tasks list
    //     * Task is no longer a child of incomplete tasks list
    //     * Task now only have one button, delete task button
};

// Create a function to handle Delete Tasks
var deleteTask = function () {
    // 4. Delete task
    //     * User push delete task button
    //     * Task is removed from parent tasks list
};



// TODO: 5. Add to LocalStorage

console.log('End... - Todo List program');
