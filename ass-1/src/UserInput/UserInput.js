import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changed} value={props.oldValue}></input>
        </div>
    );
};

export default userInput;