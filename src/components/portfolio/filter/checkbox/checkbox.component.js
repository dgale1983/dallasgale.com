import React from 'react';
import './checkbox.scss';

const Checkbox = props => {

    const { checkedValue, label } = props;

    return (
        <div className="checkbox">
            <input className="checkbox__input" id={label} type="checkbox" onChange={ checkedValue }  />
            <label htmlFor={label} className="checkbox__label">
                { label }
            </label>
        </div>
    );
};


export default Checkbox;