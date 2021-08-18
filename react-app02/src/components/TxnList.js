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
                {id:5,header:'Grocessaries',amount:5000,type:'EXPENSE'},
                {id:6,header:'Sudexo',amount:5000,type:'EXPENSE'},
                {id:7,header:'Elec.Bill',amount:1200,type:'EXPENSE'},
                {id:8,header:'Bonus',amount:20000,type:'INCOME'},
                {id:9,header:'Mobile Bill',amount:1999,type:'EXPENSE'},
                {id:10,header:'SB Interest',amount:500,type:'INCOME'}
            ]
        };
    }

    render(){
        return (
            <section className="col-sm-8 mx-auto m-4">
                <h3>Transactions List</h3>
                {this.state.txns.length==0?
                    <p><strong>No transactions as of now</strong></p> :
                    <table className="table table-border table-hover">
                        <thead>
                            <tr>
                                <th>Txn#</th>
                                <th>Header</th>
                                <th>Credit</th>
                                <th>Debit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.txns.map( t => (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.header}</td>
                                    <td>{t.type==='INCOME'?t.amount:''}</td>
                                    <td>{t.type==='EXPENSE'?t.amount:''}</td>
                                </tr>
                            ))}     
                        </tbody>
                    </table>
                }
            </section>
        );
    }
}

export default TxnList;