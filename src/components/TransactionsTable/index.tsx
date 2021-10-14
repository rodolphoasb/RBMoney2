import * as S from './styles'
import { NewTransactionContext } from '../../context/newTransactionContext'
import { useContext } from 'react'

export function TransactionsTable() {
  const { transactions } = useContext(NewTransactionContext)

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={`${transaction.type + transaction.title}`}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>10/02/2021</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </S.Container>
  )
}
