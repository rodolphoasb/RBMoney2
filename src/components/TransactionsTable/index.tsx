import * as S from './styles'

export function TransactionsTable() {
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
          <tr>
            <td>Water</td>
            <td className="withdraw">- 12</td>
            <td>Home Expenses</td>
            <td>10/02/2021</td>
          </tr>

          <tr>
            <td>Donation</td>
            <td className="deposit">1200</td>
            <td>Open Source</td>
            <td>10/10/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}
