import React, {useState} from 'react';
import {v4 as uuid} from "uuid";

//SCSS
import styles from "./App.module.scss";

//COMPONENT
import Task from "./component/Task";


const App = () => {


    const [input, setInput] = useState("");

    const [task, setTask] = useState([{
        id: "",
        number: "",
        data: "",
    }]);

    //Helper Functions


    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const addHandler = (e) => {
        e.preventDefault()

        if (input.length === 0) {
            alert("Oh, so you dont have any...!?")
        } else {
            setTask(prevState => [...prevState, {
                id: uuid(),
                number: task.length,
                data: input,
            }])
        }
        setInput("");
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1>Todo List</h1>
                <div className={styles.addNewTask}>
                    <input
                        type="text"
                        value={input}
                        placeholder="add something..."
                        onChange={inputHandler}
                    />
                    <button
                        onClick={addHandler}
                    >Add
                    </button>
                </div>
                <div className={styles.allTask}>
                    <ul className={styles.newTask}>
                        {task.map(task => <Task key={task.id} number={task.number} data={task.data}/>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;