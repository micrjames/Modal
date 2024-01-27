const modalHdr = modal.children.namedItem("modal-header");
const modalBody = modal.children.namedItem("modal-body");
const modalCloseBtn = modalHdr.children.namedItem("modal-header-close");

const closeModal = function() {                                                                         
    modal.classList.add("hidden");
    const output = modalBody.children.namedItem("modal-output");
    if(output.textContent) output.textContent = "";
};
const openModal = function() {
    modal.classList.remove("hidden");
};

export { modalCloseBtn, closeModal, openModal, modalBody };  
