import React, {PureComponent} from "react";

class PureComp extends PureComponent{
    render() {
        return <p>count : {this.props.count}</p>
    }
}

class Test extends React.Component
{
    state = {count : 0};
    render(){
        return <>
        <PureComp count={this.state.count} />
        <button onClick={()=>this.setState({count:this.state.count +1})}>
            Increment
        </button>
        </>
    }
    
}

export default Test