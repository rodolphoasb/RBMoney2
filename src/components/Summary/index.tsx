/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import { NewTransactionContext } from '../../context/newTransactionContext'
import { useContext } from 'react'

export function Summary() {
  const { transactions } = useContext(NewTransactionContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.incomes += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.expenses += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      incomes: 0,
      expenses: 0,
      total: 0
    }
  )

  return (
    <S.Container>
      <div>
        <header>
          <p>Income</p>
          <img src="/IncomeImg.svg" alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.incomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src="/OutcomeImg.svg" alt="Outcome" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.expenses)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src="/TotalImg.svg" alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  )
}
