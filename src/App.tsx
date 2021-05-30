import React from 'react';
import './App.css';
import UserList from "./components/user-list";
import TodoList from "./components/todo-list";

function App() {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;
