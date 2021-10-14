/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export function Summary() {
  return (
    <S.Container>
      <div>
        <header>
          <p>Income</p>
          <img src="/IncomeImg.svg" alt="Income" />
        </header>
        <strong>R$ 6000</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src="/OutcomeImg.svg" alt="Outcome" />
        </header>
        <strong>R$ 1200</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src="/TotalImg.svg" alt="Total" />
        </header>
        <strong>R$ 4800</strong>
      </div>
    </S.Container>
  )
}
