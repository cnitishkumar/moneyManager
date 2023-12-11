import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteHistory} = props
  const {amount, title, transactionType, id} = transactionDetails
  const onClickingDeleteBtn = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="history-title">{title}</p>
      <p className="history-title">Rs{amount}</p>
      <p className="history-title">{transactionType}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onClickingDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
