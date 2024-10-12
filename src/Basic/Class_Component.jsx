import React from "react";

class Class_Component extends React.Component{
    render(){
        return <div>
            <h2>This is a class based component</h2>
            <h1>My name is {this.props.name}</h1>
            <h3>my age = {this.props.age}</h3>
        </div>
    }
}

export default Class_Component;