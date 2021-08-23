import React from 'react';

class NewTxn extends React.Component{
    constructor(props){
        super(props);
        this.state={id:0,header:'',amount:0,type:''}
    }

    add = () =>{
        this.props.addTxn({
            id:this.state.id,
            header:this.state.header,
            amount:this.state.amount,
            type:this.state.type});
        this.setState({id:0,header:'',amount:0,type:''});
    }

    render(){
        return (
            <form className="form-inline mb-2" onSubmit={e => {e.preventDefault(); this.add();}}>
                <label>Txn Id:</label>
                <input type="number" className="form-control mr-2" value={this.state.id}
                onChange={e => this.setState({id:parseInt(e.target.value??0)})} />

                <label>Header:</label>
                <input type="text" className="form-control mr-2" value={this.state.header}
                onChange={e => this.setState({header:e.target.value})}/>

                <label>Amount:</label>
                <input type="decimal" className="form-control mr-2" value={this.state.amount}
                onChange={e => this.setState({amount:parseFloat(e.target.value??0)})}/>
               
                <label>Type:</label>
                <select className="form-controll mr-2" value={this.state.type}
                onChange={e => this.setState({type:e.target.value})}>
                    <option>--SELECT-----</option>
                    <option value="INCOME">INCOME</option>
                    <option value="EXPENSE">EXPENSE</option>
                </select>
                <button className="btn btn-sm btn-info">ADD</button>
            </form>
        );
    }
}

export default NewTxn;