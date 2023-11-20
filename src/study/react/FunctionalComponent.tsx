import React from 'react';

interface Props {
    user : string;
}


export function FunctionalComponent(props: Props){

    const showMessage = ()=>{
        alert('Hello :: '+ props.user);

    }

    const handleClick = ()=>{
        setTimeout(showMessage, 1000);
    }

    return <button onClick={handleClick}>Follow</button>
}


