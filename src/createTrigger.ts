export const createTrigger = (trigger: HTMLButtonElement) => {
  const modalId = trigger.dataset.openDialog;
  const modal =
    modalId && (document.getElementById(modalId) as HTMLDialogElement);

  if (modal) {
    trigger.addEventListener("click", () => {
      modal.showModal();
      modal.dispatchEvent(new CustomEvent("open"));
    });
  }
};
