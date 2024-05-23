import { useState } from 'react'

interface IUseModal {
  showModal: () => void;
  isModalOpen: boolean;
  handleCancel: () => void;
}

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
