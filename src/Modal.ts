class Modal {
  private dialog: HTMLDialogElement;
  private openTriggers: NodeList;
  private closeButton: HTMLButtonElement | null;
  private player: HTMLIFrameElement | null;
  private playerSrc: string | undefined;
  private handleKeyboard: (event: KeyboardEvent) => void;

  constructor(dialog: HTMLDialogElement) {
    this.dialog = dialog;
    this.openTriggers = document.querySelectorAll(
      `[data-open-dialog="${dialog.id}"]`
    );
    this.closeButton = this.dialog.querySelector(".modal__close-button");
    this.player = this.dialog.querySelector(".modal__player");
    this.playerSrc = this.player?.dataset.src;
    this.handleKeyboard = (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    };

    this.openTriggers.forEach((trigger) => {
      trigger.addEventListener("click", this.open.bind(this));
    });

    if (this.closeButton) {
      this.closeButton.addEventListener("click", this.close.bind(this));
    }
  }

  open() {
    this.dialog.showModal();
    document.body.addEventListener("keydown", this.handleKeyboard);

    if (this.player && this.playerSrc) {
      this.player.src = this.playerSrc;
    }
  }

  close() {
    this.dialog.close();
    document.body.removeEventListener("keydown", this.handleKeyboard);

    if (this.player) {
      this.player.src = "";
    }
  }
}

export default Modal;
