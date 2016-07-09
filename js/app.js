// TODO: Add IIFE, but leave for console testing in development
'use strict';
console.log('Start... Todo List program');
// Get mockup elements from the HTML

// Rewrote element selection to get by form element id and use the .elements property with the name selector to select the input elements name value
var taskInput = document.getElementById('submitForm').elements['task-input'];
// Get Submit button = #submitBtn
var submitButton = document.getElementById('submitBtn');
// Get Complete checkbox
var checkbox = document.querySelector('input[type="checkbox"]');
// Get Edit button
var editButton = document.querySelector('.edit');
// Get Save button (Accessing this with foundations .success class that i will use for my Save Buttons)
var saveButton = document.querySelector('.success');
// Get delete button (Using Foundations .delete class for my Delete Button)
var deleteButton = document.querySelector('.delete')
// Get Incomplete List Items Holder Holder #incompletedList
var incompletedListsHolder = document.getElementById('incompletedList');
// Get Completed List Items Holder #completedList
var completedListsHolder = document.getElementById('completedList');


// Create Elements
var createTodoItem = function () {


    var todoItem = document.createElement('li');
    var input = document.createElement('input');
    var label = document.createElement('label');
    var editBtn = document.createElement('button');
    var deleteBtn = document.createElement('button');

    input.type = 'checkbox';
    label.innerText = taskInput.value;
    editBtn.classList.add('edit', 'button');
    editBtn.innerText = 'Edit';
    deleteBtn.classList.add('alert', 'button');
    deleteBtn.innerText = 'Delete';

    todoItem.appendChild(input);
    todoItem.appendChild(label);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);

    return todoItem;
};

// Create a function to handle Add Tasks
var addTask = function () {
    console.log('addTask function active...');
    var todoItem = createTodoItem();
    incompletedListsHolder.appendChild(todoItem);
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

// Create eventListeners
submitButton.addEventListener('click', addTask);




console.log('End... - Todo List program');
