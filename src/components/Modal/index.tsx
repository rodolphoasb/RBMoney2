/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import Modal from 'react-modal'
import { useState } from 'react'

type ModalProps = {
  closeModal: () => void
  modalIsOpen: boolean
}

export function ModalComponent({ closeModal, modalIsOpen }: ModalProps) {
  const [type, setType] = useState('income')

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

        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Amount" />

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

        <input type="text" placeholder="Category" />
        <button type="submit">Create</button>
      </S.Container>
    </Modal>
  )
}
