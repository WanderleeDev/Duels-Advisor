import { useState } from 'react'
import useModal from '../../../hooks/useModal'
import { Button, Modal } from 'antd'
enum ContentModal {
  about ='About',
  privacy ='Privacy Policy',
  licensing = 'Licensing',
  contact = 'Contact'
}

export default function Footer () {
  const { handleCancel, isModalOpen, showModal } = useModal()
  const [contentModal, setContentModal] = useState<ContentModal | null>(null)
  const Data1 = () => <h1>one</h1>
  const Data2 = () => <h1>two</h1>
  const Data3 = () => <h1>three</h1>

  function revealModal (content: ContentModal) {
    setContentModal(content)
    showModal()
  }

  return (
    <footer className='bg-white/15 relative z-10 rounded-lg shadow m-4 backdrop-blur-sm'>
      <Modal

        open={isModalOpen}
        centered
        title={contentModal}
        okType='primary'
        onCancel={handleCancel}
      >
        {contentModal === ContentModal.about && <Data1 />}
        {contentModal === ContentModal.contact && <Data2 />}
        {contentModal === ContentModal.licensing && <Data3 />}
        {contentModal === ContentModal.privacy && <Data1 />}
      </Modal>

      <div className='w-full flex mx-auto max-w-screen-xl flex-col-reverse gap-6 p-4 justify-center items-center lg:flex-row lg:justify-between flex-wrap'>
        <p className='text-sm text-gray-200 font-bold tracking-wider flex gap-1'>
          <span className='inline-block'>© 2024 develop by</span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/WanderleeDev'
            className='hover:underline inline-block'
          >
            WanderleeDev
          </a>
        </p>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0'>
          {Object.values(ContentModal).map((content) => (
            <li key={content}>
              <Button
                className='hover:underline me-4 md:me-6 bg-white/60 font-semibold text-red-700 hover:border-red-700 hover:text-red-500'
                key={content}
                onClick={() => revealModal(content)}
              >
                {content}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
