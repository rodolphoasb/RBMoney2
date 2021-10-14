// import * as S from './styles'
import Modal from 'react-modal'

type ModalProps = {
  closeModal: () => void
  modalIsOpen: boolean
}

export function ModalComponent({ closeModal, modalIsOpen }: ModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Transactions Modal"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h1>Create New Transaction</h1>
    </Modal>
  )
}
