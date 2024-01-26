import { projects, toggleBtn, btnStates, contactEmail } from "./incs.js";
import { removeChildren, setBtnState } from "./utils.js";
import { modalCloseBtn, closeModal, openModal } from "./modal.js";
import { modalForm, submitModalForm } from "./form.js";

setBtnState(toggleBtn, btnStates[0]);
toggleBtn.addEventListener("click", () => { 
   for(const child of projects.children) {
	   if(child.classList.contains("hidden")) {
		   child.classList.remove("hidden"); 
		   removeChildren(toggleBtn);
		   setBtnState(toggleBtn, btnStates[1]);
	   } else {
		   if(child.classList.contains("marked")) {
			  child.classList.add("hidden");
			  removeChildren(toggleBtn);
			  setBtnState(toggleBtn, btnStates[0]);
		   }
	   }
   }
});

modalCloseBtn.addEventListener("click", closeModal);
contactEmail.addEventListener("click", openModal);

modalForm.addEventListener("submit", submitModalForm);
