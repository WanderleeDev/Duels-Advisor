import { useState } from 'react'
import IUseModal from '../shared/interfaces/IUseModal.interface'

function useModal (): IUseModal {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)

  return {
    showModal,
    isModalOpen,
    handleCancel
  }
}

export default useModal
