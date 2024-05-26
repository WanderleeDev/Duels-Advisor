import React, { useState } from "react";
import { Button, Modal } from "antd";
import useModal from "../../../hooks/useModal";
import { ContentModal } from "../interfaces/ContentModal.enum";
import LazyComponent from "../../../shared/ui/LazyComponent";
import DevStamp from "./DevStamp";

const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Licensing = React.lazy(() => import("./Licensing"));
const PrivacyPolicy = React.lazy(() => import("./PrivacyPolicy"));

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
        <div className="h-72 overflow-y-scroll u-scrollStyle">
          {contentModal && (
            <LazyComponent>
              {contentModal === ContentModal.about && <About />}
              {contentModal === ContentModal.privacy && <PrivacyPolicy />}
              {contentModal === ContentModal.contact && <Contact />}
              {contentModal === ContentModal.licensing && <Licensing />}
            </LazyComponent>
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
                style={{ color: "#b91c1c" }}
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
