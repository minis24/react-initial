import React from 'react';

interface Props {
    user : string;
}


export class ClassComponent extends React.Component<Props,{}>{

    private showMessage = ()=>{
        alert('Hello :: '+ this.props.user);
    }

    private handleClick = ()=>{
        setTimeout(this.showMessage, 1000);
    }

    public render(){
        return <button onClick={this.handleClick}>Class_Follow</button>
    }
    
}


