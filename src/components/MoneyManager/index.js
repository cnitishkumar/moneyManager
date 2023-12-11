import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: transactionTypeOptions[0].displayText,
    transactionDetailsArray: [],
  }

  onChnageTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    const amount = parseInt(event.target.value)
    this.setState({amount})
  }

  onChangeTransactionType = event => {
    const transactionType = transactionTypeOptions.find(
      each => each.optionId === event.target.value,
    )
    console.log(transactionType.displayText)
    console.log(event.target.value)
    this.setState({transactionType: transactionType.displayText})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, transactionType} = this.state

    if (title !== '' && amount !== '' && amount !== 0 && amount !== 'NaN') {
      const newTransaction = {
        title,
        amount,
        transactionType,
        id: uuidv4(),
      }
      this.setState(prevState => ({
        transactionDetailsArray: [
          ...prevState.transactionDetailsArray,
          newTransaction,
        ],
        amount: '',
        title: '',
      }))
    }
  }

  onDeleteHistory = id => {
    const {transactionDetailsArray} = this.state
    const filteredArray = transactionDetailsArray.filter(each => each.id !== id)

    this.setState({transactionDetailsArray: filteredArray})
  }

  render() {
    const {title, amount, transactionType, transactionDetailsArray} = this.state
    let incomeAmount = 0
    let expensesAmount = 0
    transactionDetailsArray.forEach(each => {
      if (each.transactionType === 'Income') {
        incomeAmount += each.amount
      } else if (each.transactionType === 'Expenses') {
        expensesAmount += each.amount
      }
    })

    console.log(incomeAmount)

    return (
      <div className="bg-container">
        <div className="name-container">
          <h1 className="name">Hi,Rechard</h1>
          <p className="tag-line">
            Welcome back to your{' '}
            <span className="tagline-span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />

        <div className="transaction-history-container">
          <div className="transaction-form-container">
            <h2 className="add-transaction-heading">Add Transaction</h2>
            <form className="my-form" onSubmit={this.addTransaction}>
              <label htmlFor="title" className="form-label-item">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="input"
                onChange={this.onChnageTitle}
                value={title}
              />
              <label htmlFor="amount" className="form-label-item">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="Amount"
                id="amount"
                className="input"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type" className="form-label-item">
                TYPE
              </label>
              <select
                id="type"
                className="input"
                onChange={this.onChangeTransactionType}
                value={transactionType}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h2 className="add-transaction-heading">History</h2>
            <div className="history-header-container">
              <p className="history-title">Title</p>
              <p className="history-title">Amount</p>
              <p className="history-title">Type</p>
            </div>
            <ul className="ul-el">
              {transactionDetailsArray.map(eachItem => (
                <TransactionItem
                  transactionDetails={eachItem}
                  key={eachItem.id}
                  onDeleteHistory={this.onDeleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
