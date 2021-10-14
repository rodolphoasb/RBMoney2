import * as S from './styles'

type HeaderProps = {
  openNewTransactionModal: () => void
}

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <h1>RBMoney2</h1>
        <button type="button" onClick={openNewTransactionModal}>
          New Transaction
        </button>
      </S.Content>
    </S.Container>
  )
}
