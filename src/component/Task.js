import React from 'react';

//CSS
import styles from "../App.module.scss";

//ICON
import {FaRegEdit, FaTrashAlt} from "react-icons/fa";




const Task = (props) => {

    return (
        <div>
            {props.data !== "" ?
                <li>
                    <span className={styles.taskID}>{props.number}</span>
                    <h3>{props.data}</h3>
                    <div className={styles.actionBTN}>
                        <span className={styles.edtBTN}><FaRegEdit/></span>
                        <span onClick={props.delete} className={styles.dltBTN}><FaTrashAlt/></span>
                    </div>
                </li>
                : null}
        </div>
    );
};

export default Task;