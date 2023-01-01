import React from 'react';

//SCSS
import styles from "./App.module.scss";

//COMPONENT
import Task from "./component/Task";





const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1>Todo List</h1>
                <div className={styles.addNewTask}>
                    <input type="text" placeholder="add something..." />
                    <button type="submit">Add</button>
                </div>
                <div className={styles.allTask}>
                    <ul className={styles.newTask}>
                        <Task/>
                        <Task/>
                        <Task/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;