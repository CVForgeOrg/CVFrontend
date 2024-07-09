import React from 'react';
import "./Input.css";
const Input = (props) => {
    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={"reusableInput"}
                onChange={props.onChange}
                id={props.id}
            />


        </div>
    );
};

export default Input;
