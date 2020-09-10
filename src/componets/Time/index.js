import React from 'react';
import classNames from "classnames";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const Time = ({date}) => {
    {formatDistanceToNow(date, {
            addSuffix: true,
            locale: ruLocale
    })}
    
};
        

export default Time;
