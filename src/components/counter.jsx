import React,{Component} from 'react';


class Counter extends Component {
    state={
        count:this.props.value
         };

    styles={
        fontSize:20,
        fontWeight:"bold"
    };

    // constructor(){
    //     super();
    //     this.pressButton=this.pressButton.bind(this);
    // }

    pressButtonIncremenet=()=>{
        //console.log("Pressed!");
        this.setState({count: this.state.count+1});
        }

    render() { 
         let classes="badge m-2 badge-";
         classes+=this.state.count===0?"warning":"primary";
      //   console.log("props", this.props);
               
        return (<div> 
                {this.props.id}
                <span style={this.styles} className={classes}> {this.formatCount()} </span>
        <button 
               onClick={this.pressButtonIncremenet}
               //onClick={()=> this.pressButtonIncremenet(product)}
               style={{fontSize:20}}className="btn btn-secondary btn-sm">
                   Increment
        </button>
        <button 
                onClick={()=>this.props.onDelete(this.props.id)}
                style={{fontSize:20}}className="btn btn-danger m-2 btn-sm">
                Delete
        </button>
               </div>) ;
    }
    formatCount(){
        const {count}=this.state;
        return count===0?"Zero": count;
    }
}
 
export default Counter;