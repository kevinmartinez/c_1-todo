// TODO: Add IIFE, but leave for console testing in development
'use strict';
console.log('Start... Todo List program');

// Get mockup elements from the HTML

// Get Submit button = #submitBtn
var submitButton = document.getElementById('submitBtn');
console.log(submitButton);
// Get Complete checkbox

// Get Edit button
var editButton = document.querySelector('.edit');
console.log(editButton);
// Get Save button (Accessing this with foundations .success class that i will use for my Save Buttons)
var saveButton = document.querySelector('.success');
console.log(saveButton);
// Get delete button (Using Foundations .delete class for my Delete Button)
var deleteButton = document.querySelector('.delete')

// Get Incomplete List Items Holder Holder #incompletedList
var incompletedListsHolder = document.getElementById('incompletedList');
console.log(incompletedListsHolder);

// Get Completed List Items Holder #completedList
var completedListsHolder = document.getElementById('completedList');
console.log(completedListsHolder);




// Create a function to handle Add Tasks
var addTask = function () {
    console.log('addTask function active...');
    // 1. Add
    //     * User writes task 'go shopping'.
    //     * User push add new task button
    //     * Task is added to a incomplete tasks list
    //         * An empty task can't be added to incomplete tasks list
};

// Create a function to handle Edit Tasks
var editTask = function () {
    console.log('editTask function active...');
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
    console.log('taskCompleted function active...');
    // 3. Mark task as complete
    //     * User push completed task button
    //     * Task is moved from incomplete tasks list to a completed tasks list
    //     * Task is no longer a child of incomplete tasks list
    //     * Task now only have one button, delete task button
};

// Create a function to handle Delete Tasks
var deleteTask = function () {
    console.log('deleteTask function active...');
    // 4. Delete task
    //     * User push delete task button
    //     * Task is removed from parent tasks list
};



// TODO: 5. Add to LocalStorage

console.log('End... - Todo List program');
