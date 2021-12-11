import React from "react";
import classes from './InputSearch.module.scss'
import Formsy from "formsy-react";


const InputSearch = props => {
    const htmlFor = `text-${Math.random()}`

    return (
        <div className={classes.InputSearch}>
            <div>
                <Formsy onSubmit={props.onSubmit}>
                    <label htmlFor={htmlFor}></label>
                    <input type="text" onChange={props.onChange}/>
                    <button type="submit" className="fas fa-search"></button>
                </Formsy>
            </div>
            
            
        </div>
    )
}

export default InputSearch