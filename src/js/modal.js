function openModal(modalName) {
  const $modal = document.querySelector(`dialog[data-modal=${modalName}]`);
  $modal.showModal();

  const $closeButton = $modal.querySelector("[data-close]");
  $closeButton.addEventListener("click", () => $modal.close());
}

export function initModals() {
  const $triggers = document.querySelectorAll("button[data-trigger]");
  $triggers.forEach(($trigger) => {
    $trigger.addEventListener("click", () => {
      openModal($trigger.getAttribute("data-trigger"));
    });
  });
}
