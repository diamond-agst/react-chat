import React from 'react';
import {Button as BaseButton} from 'antd';
import classNames from 'classnames';

import './Button.scss';

const Button = (props) => {
    return (
        <div>
            <BaseButton className={classNames("button", props.className, 
            {"button__large": props.size === "large"})} {...props}/>
        </div>

    );
}

export default Button;
