import { Header } from '../components/Header'
import { Dashboard } from 'components/Dashboard'
import { ModalComponent } from '../components/Modal'
import { useState } from 'react'

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
      <Header openNewTransactionModal={handleOpenNewTransactionModal} />
      <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <Dashboard />
    </>
  )
}

export default Home
