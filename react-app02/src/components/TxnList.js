import React from 'react'

class TxnList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txns:[
                {id:1,header:'Salary',amount:55000,type:'INCOME'},
                {id:2,header:'Shares Dividant',amount:35000,type:'INCOME'},
                {id:3,header:'Rent',amount:5000,type:'EXPENSE'},
                {id:4,header:'Fuel',amount:4500,type:'EXPENSE'},
                {id:5,header:'Grocessaries',amount:5000,type:'EXPENSE'}
            ],
            totalIncome:90000,
            totalExpense:14500,
            balance:75500,
            txn :{id:0,header:'',amount:0,type:''}
        };
    }

    computeAndUpdate = txns => {
        let incomes = txns.filter(t=>t.type==='INCOME')
        let totalIncome = incomes.length===0?0:incomes.map(t => t.amount).reduce((a1,a2)=>a1+a2);
        let expenses = txns.filter(t=>t.type==='EXPENSE');
        let totalExpense = expenses.length===0?0:expenses.map(t => t.amount).reduce((a1,a2)=>a1+a2);
        let balance = totalIncome-totalExpense;

        this.setState({txns,totalExpense,totalIncome,balance});
    }

    add = () => {
        let txns = [...this.state.txns,{...this.state.txn}];
        this.computeAndUpdate(txns);
        this.setState({txn:{id:0,header:'',amount:0,type:''}})
    }

    remove = (id) => {
        if(!global.confirm("Are you sure of deleting?"))  return;

        let txns = this.state.txns.filter(t => t.id!==id);
        this.computeAndUpdate(txns);
    }

    render(){
        return (
            <section className="col-sm-10 mx-auto m-4">
                <h3>Transactions List</h3>

                <form className="form-inline mb-2" onSubmit={e => {e.preventDefault(); this.add();}}>
                <label>Txn Id:</label>
                    <input type="number" className="form-control mr-2" value={this.state.txn.id}
                    onChange={e => this.setState({txn:{...this.state.txn,id:parseInt(e.target.value??0)}})}/>

                    <label>Header:</label>
                    <input type="text" className="form-control mr-2" value={this.state.txn.header}
                    onChange={e => this.setState({txn:{...this.state.txn,header:e.target.value}})}/>

                    <label>Amount:</label>
                    <input type="decimal" className="form-control mr-2" value={this.state.txn.amount}
                    onChange={e => this.setState({txn:{...this.state.txn,amount:parseFloat(e.target.value??0)}})}/>
                   
                    <label>Type:</label>
                    <select className="form-controll mr-2" value={this.state.txn.type}
                    onChange={e => this.setState({txn:{...this.state.txn,type:e.target.value}})}>
                        <option>--SELECT-----</option>
                        <option value="INCOME">INCOME</option>
                        <option value="EXPENSE">EXPENSE</option>
                    </select>
                    <button className="btn btn-sm btn-info">ADD</button>
                </form>

                {this.state.txns.length===0?
                    <p><strong>No transactions as of now</strong></p> :
                    <table className="table table-border table-hover">
                        <thead>
                            <tr>
                                <th>Txn#</th>
                                <th>Header</th>
                                <th>Credit</th>
                                <th>Debit</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.txns.map( t => (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.header}</td>
                                    <td className="text-right">{t.type==='INCOME'?t.amount:''}</td>
                                    <td className="text-right">{t.type==='EXPENSE'?t.amount:''}</td>
                                    <td>
                                        <button 
                                            onClick={e => this.remove(t.id)}
                                            className="btn btn-sm btn-danger">
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}     
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="2">Total</th>
                                <th className="text-right">{this.state.totalIncome}</th>
                                <th className="text-right">{this.state.totalExpense}</th>
                            </tr>
                            <tr>
                                <th colSpan="3">Balance</th>
                                <th className="text-right">{this.state.balance}</th>
                            </tr>
                        </tfoot>
                    </table>
                }
            </section>
        );
    }
}

export default TxnList;