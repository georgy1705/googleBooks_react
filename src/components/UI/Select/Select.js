import React from "react";
import classes from './Select.module.scss'


const Select = props => {
    
    const htmlFor = `select-${Math.random()}`
    
    
    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor} style={{color: '#fff', marginRight: 10}}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}



export default Select