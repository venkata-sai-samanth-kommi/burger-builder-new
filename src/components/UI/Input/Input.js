import React from 'react'
import classes from './Input.css'

const input = (props) => {
    let inputElement = null
    let inputClasses = [classes.InputElement]

    if(props.invalid && props.isTouched)
    {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onFocus={props.changeHandler}
                onChange={props.changeHandler}
                required
            />
            break
        case ('textArea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onFocus={props.changeHandler}
                onChange={props.changeHandler}
                required
            />
            break
        case ('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                onFocus={props.changeHandler}
                onChange={props.changeHandler}
            >
                {props.elementConfig.options.map(option => (<option key={option.value} value={option.value}>{option.displayValue}</option>))}
            </select>
            break
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onFocus={props.changeHandler}
                onChange={props.changeHandler}
                required
            />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input