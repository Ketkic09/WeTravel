import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const styles = ['btn--primary','btn--outline'];
const sizes = ['btn--medium','btn--large'];
export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ?
    buttonStyle : styles[0];

    const checkButtonSize = sizes.includes(buttonSize) ?
    buttonSize : sizes[0];

    return (
        <Link to='/signup' className='btn-mobile'>
            <button 
            className={`btn ${buttonStyle} ${buttonSize}`}
            onClick={onclick}
            >
                {children}
            </button>
        </Link>
    )
};