export const createModal = (modal: HTMLDialogElement) => {
  const closeButton = modal.querySelector(".modal__close-button");

  if (closeButton) {
    closeButton.addEventListener("click", () => modal.close());
  }

  const iframeElement = modal.querySelector("iframe");
  const videoId = iframeElement?.dataset.videoId;
  const iframeSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : "";

  if (iframeElement && iframeSrc) {
    modal.addEventListener("close", () => {
      iframeElement.src = "";
    });

    modal.addEventListener("open", () => {
      iframeElement.src = iframeSrc;
    });
  }
};
