import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-tab">
      <div className="balance-container container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="balance-image"
          alt="balance"
        />
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {incomeAmount - expensesAmount}
          </p>
        </div>
      </div>

      <div className="container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="balance-image"
          alt="income"
        />
        <div>
          <p className="your-balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="balance-image"
          alt="expenses"
        />
        <div>
          <p className="your-balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
