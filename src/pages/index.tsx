import { Header } from '../components/Header'
import Modal from 'react-modal'
import { Dashboard } from 'components/Dashboard'
import { ModalComponent } from '../components/Modal'
import { TransactionsProvider } from '../context/newTransactionContext'
import { useState } from 'react'

Modal.setAppElement('#__next')

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  function handleOpenNewTransactionModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <>
      <TransactionsProvider>
        <Header openNewTransactionModal={handleOpenNewTransactionModal} />
        <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <Dashboard />
      </TransactionsProvider>
    </>
  )
}

export default Home
