import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
            counters:[
                {id:1, value:1},
                {id:2, value:2},
                {id:3, value:8},
                {id:4, value:5},
            ]
        }


    handleDelete(counterId){
        //console.log("Pressed", counterId);
        const counters=this.state.counters.filter(count=>count.id!==counterId);
        this.setState({counters:counters});
    }
    render() { 
        return (<div>
        { <button
        onClick={this.buttonReset}
         className="btn btn-success m-2 btn-sm " >Reset</button> }
          {this.state.counters.map(counter=>
         ( <Counter key={counter.id}  onDelete={this.handleDelete} value={counter.value} selected={true} id={counter.id} >
            <h4>Counter #{counter.id}</h4>
            </Counter>))}
        </div>
        );
    }
}
 
export default Counters;