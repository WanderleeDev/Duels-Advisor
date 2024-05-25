import { useState } from "react";
import useModal from "../../../hooks/useModal";
import { Button, Modal } from "antd";
import LazyComponent from "../../../shared/ui/LazyComponent";
import { ContentModal } from "../interfaces/ContentModal.enum";
import DevStamp from "./DevStamp";

export default function Footer() {
  const { handleCancel, isModalOpen, showModal } = useModal();
  const [contentModal, setContentModal] = useState<ContentModal | null>(null);

  function revealModal(content: ContentModal) {
    setContentModal(content);
    showModal();
  }

  return (
    <footer className="bg-white/15 relative z-10 rounded-lg shadow m-4 backdrop-blur-sm">
      <Modal
        open={isModalOpen}
        centered
        title={contentModal}
        okType="primary"
        onCancel={handleCancel}
      >
        <div className="max-h-72 overflow-y-scroll u-scrollStyle">
          {contentModal && (
            <LazyComponent
              routeComponent={`/src/pages/Home/components/${contentModal.replace(" ","")}`}
            />
          )}
        </div>
      </Modal>

      <div className="w-full flex mx-auto max-w-screen-xl flex-col-reverse gap-6 p-4 justify-center items-center lg:flex-row lg:justify-between flex-wrap">
        <DevStamp />

        <ul className="grid w-full xs:w-fit xs:grid-cols-2 sm:grid-cols-4 gap-4 flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
          {Object.values(ContentModal).map((content) => (
            <li className="w-full" key={content}>
              <Button
                className="hover:underline me-4 md:me-6 bg-white/60 font-semibold text-red-700 hover:border-red-700 w-full hover:text-red-500 block sm:inline"
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
  );
}
