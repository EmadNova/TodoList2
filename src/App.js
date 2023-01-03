import React, {useState} from 'react';
import {v4 as uuid} from "uuid";

//SCSS
import styles from "./App.module.scss";
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer, toast} from "react-toastify";

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

    const addHandler = () => {

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

    const deleteHandler = (index) => {
        let filterTask = task.filter(delTask => delTask.id !== index);

        for (let i = 0; i < filterTask.length; i++) {
            filterTask[i].number = i;
        }

        setTask(
            filterTask,
        )
    }

    const editHandler = (newInput, index) => {
        setTask(task.map(edtTask => {
            if (edtTask.id === index) {
                edtTask.data = newInput
            }
            return edtTask
        }))
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
                    <button onClick={addHandler}>Add</button>
                </div>
                <div className={styles.allTask}>
                    <ul className={styles.newTask}>
                        {task.map((value) =>
                            <Task
                                key={value.id}
                                number={value.number}
                                data={value.data}
                                delete={() => deleteHandler(value.id)}
                                edit={(e) => editHandler(e, value.id)}
                            />)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;