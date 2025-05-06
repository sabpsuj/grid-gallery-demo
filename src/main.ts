import "./style.scss";
import "virtual:vite-svg-2-webfont.css";
import { createTrigger } from "./createTrigger";
import { createModal } from "./createModal";

const modalTriggers = document.querySelectorAll(
  "button[data-open-dialog]"
) as NodeListOf<HTMLButtonElement>;

modalTriggers.forEach((trigger) => {
  createTrigger(trigger);
});

const modals = document.querySelectorAll(
  ".modal"
) as NodeListOf<HTMLDialogElement>;

modals.forEach((modal) => {
  createModal(modal);
});
