window.openInstruction =  function openInstruction() {
    const modal = document.querySelector(".modal-instructions");
    modal.classList.add("modal-active");
}

window.openSettings =  function openSettings() {
    console.log("clicked settings");
    const modal = document.querySelector(".modal-settings");
    modal.classList.add("modal-active");
}

window.closeModal =  function closeModal() {
    const modal = document.querySelector(".modal-active");
    modal.classList.remove("modal-active");
}

console.log("events.js loaded");