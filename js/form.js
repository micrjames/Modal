import { modalBody } from "./modal.js";

const modalForm = document.forms["form"];

const subject = modalForm.elements["form-subject"];
const email = modalForm.elements["form-email"];
const body = modalForm.elements["form-body"];

const submitModalForm = function(event) {
    event.preventDefault();

    const subjectVal = swapSpaces(subject.value);
    const emailVal = email.value;
    const bodyVal = swapSpaces(body.value);

    location.href = `mailto:${emailVal}?subject=${subjectVal}&body=${bodyVal}`;

	const output = modalBody.children.namedItem("modal-output");
    output.textContent = "Email populated";
    this.reset();
};
modalForm.addEventListener("submit", submitModalForm);

export { modalForm, submitModalForm };
