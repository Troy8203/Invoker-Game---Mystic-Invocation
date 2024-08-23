window.openInstruction =  function openInstruction() {
    const modal = document.querySelector(".modal-instructions");
    modal.classList.add("modal-active");
}

window.closeModal =  function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal-active");
}
