
const TxnRecord = props => (
    <tr>
        <td>{props.t.id}</td>
        <td>{props.t.header}</td>
        <td className="text-right">{props.t.type === 'INCOME' ? props.t.amount : ''}</td>
        <td className="text-right">{props.t.type === 'EXPENSE' ? props.t.amount : ''}</td>
        <td>
            <button
                onClick={e => props.remove(props.t.id)}
                className="btn btn-sm btn-danger">
                DELETE
            </button>
        </td>
    </tr>
);

export default TxnRecord;