export default interface IUseModal {
  showModal: () => void;
  isModalOpen: boolean;
  handleCancel: () => void;
}