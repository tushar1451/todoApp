# Todo App

## Overview

This Todo App is a simple and efficient task management application. Users can add, edit, and delete tasks. The app uses local storage to persist data, ensuring that tasks are retained even after refreshing the browser. It is built using JavaScript, Node.js, and React.

## Features

- **Add Tasks**: Easily add new tasks to your list.
- **Edit Tasks**: Modify existing tasks to update their details.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Toggle Complete**: Mark tasks as completed or incomplete.
- **Local Storage**: Persist tasks across sessions using local storage.

## Technologies Used

- **Front-end**: React, HTML5, CSS3, JavaScript
- **State Management**: React Context API
- **Back-end**: Node.js
- **Other**: Local Storage

## Usage

- **Add a Task**: Enter the task details in the input field and click the "Add" button.
- **Edit a Task**: Click the "Edit" button next to a task, modify the task details, and save.
- **Delete a Task**: Click the "Delete" button next to a task to remove it from the list.
- **Toggle Complete**: Click the checkbox next to a task to mark it as completed or incomplete.


## Components

### App.jsx

- Manages the state of the todo items.
- Handles adding, updating, deleting, and toggling completion of todos.
- Uses local storage to persist data across sessions.

### TodoItem.jsx

- Renders each individual todo item.
- Provides functionality to edit and delete todos.
- Allows toggling the completion status of a todo.

### TodoForm.jsx

- Provides a form to add new todos.
- Captures user input and triggers the addTodo function.

## Context

### TodoContext.js

- Provides a context to manage the state and actions related to todos.
- Makes state and functions available to all components within the provider.


