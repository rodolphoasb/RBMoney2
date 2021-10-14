/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import Modal from 'react-modal'
import { useContext, useState } from 'react'
import { NewTransactionContext } from '../../context/newTransactionContext'

type ModalProps = {
  closeModal: () => void
  modalIsOpen: boolean
}

export function ModalComponent({ closeModal, modalIsOpen }: ModalProps) {
  const { setTransactions, transactions } = useContext(NewTransactionContext)
  const [type, setType] = useState('income')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  function handleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setTransactions([...transactions, { title, amount, category, type }])
    closeModal()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Transactions Modal"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button type="button" className="react-modal-close" onClick={closeModal}>
        <img src="/closeImg.svg" alt="Close Button" />
      </button>
      <S.Container>
        <h1>New Transaction</h1>

        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          placeholder="Amount"
        />

        <S.TransactionTypeContainer>
          <S.RadioBoxButton
            type="button"
            onClick={() => {
              setType('income')
            }}
            isActive={type === 'income'}
            activeColor="green"
          >
            <img src="/IncomeImg.svg" alt="Income" />
            <span>Income</span>
          </S.RadioBoxButton>

          <S.RadioBoxButton
            type="button"
            onClick={() => {
              setType('expense')
            }}
            isActive={type === 'expense'}
            activeColor="red"
          >
            <img src="/OutcomeImg.svg" alt="Expense" />
            <span>Expense</span>
          </S.RadioBoxButton>
        </S.TransactionTypeContainer>

        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Category"
        />
        <button type="submit" onClick={handleFormSubmit}>
          Create
        </button>
      </S.Container>
    </Modal>
  )
}
