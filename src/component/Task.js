import React from 'react';

//CSS
import styles from "../App.module.scss";

//ICON
import {FaRegEdit, FaTrashAlt} from "react-icons/fa";




const Task = () => {
    return (
        <div>
            <li>
                <span className={styles.taskID}>1</span>
                <h3>go out</h3>
                <div className={styles.actionBTN}>
                    <span className={styles.edtBTN}><FaRegEdit/></span>
                    <span className={styles.dltBTN}><FaTrashAlt/></span>
                </div>
            </li>
        </div>
    );
};

export default Task;