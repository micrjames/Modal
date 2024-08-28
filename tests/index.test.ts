const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom");
import { fireEvent } from "@testing-library/dom";

import { Modal } from "../Modal";

describe("A Modal.", () => {
   let dom: typeof JSDOM;
   let document: Document;
   let modal: Modal;
   let modalId: string;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "index.html"), 'utf8');
	  dom = new JSDOM(html, {runScript: 'dangerously'});
	  document = dom.window.document;
	  modalId = "modal";
	  modal = new Modal(document.querySelector(`#${modalId}`));
   });
   describe("A Modal in the document.", () => {
	  test("Should be defined.", () => {
		 expect(modal.modal).toBeDefined(); 
	  });
	  test("Should be in the document.", () => {
		 expect(modal.modal).toBeInTheDocument();
	  });
	  test("Should be initially closed.", () => {
		 expect(modal.isClosed()).toBeTruthy();
	  });
   });
   describe("A Modal with the correct structure.", () => {
	  describe("A Modal with the correct structure should have children.", () => {
		 test("Should have two children.", () => {
			expect(modal.modal.children).toHaveLength(2);
		 });
		 test("Should have each element defined.", () => {
			for(const el of modal.modal.children)
			   expect(el).toBeDefined();
		 });
	  });
	  describe("A Modal with the correct structure should have a header.", () => {
		 test("Should have a header in the document.", () => {
			const header = modal.closeBtn.parentElement;
			expect(header).toBeInTheDocument();
		 });
		 describe("A Modal with a close button in the header.", () => {
			let closeBtn: Element;
			beforeAll(() => {
			   closeBtn = modal.closeBtn;
			   modal.doOnClose();
			});
			test("Should be in the document.", () => {
			   expect(closeBtn).toBeInTheDocument();
			});
			test("Should close the modal if it is opened.", () => {
			   if(modal.isClosed())
				  modal.open();
			   fireEvent.click(closeBtn);
			   expect(modal.isClosed()).toBeTruthy();
			});
			test("Should open the modal if it is closed.", () => {
			   if(modal.isClosed())
				  modal.open();
			   expect(modal.isClosed()).toBeFalsy();
			});
		 });
		 describe("A Modal with text in the header.", () => {
			let hdrText: string;
			let text: string;
			beforeAll(() => {
			   hdrText = modal.hdrText;
			   text = "Send me a Message";
			});
			test("Should be in the document.", () => {
			   const headerTextEl = modal.closeBtn.nextElementSibling;
			   expect(headerTextEl).toBeInTheDocument();
			});
			test("Should be a string.", () => {
			   expect(typeof hdrText).toBe('string');
			});
			test("Should not be an empty string.", () => {
			   expect(hdrText).toBeTruthy(); 
			});
			test("Shoud have given text.", () => {
			   expect(hdrText).toBe(text);
			});
			test("Shoud change the given text.", () => {
			   hdrText = "Send me a message.";
			   expect(hdrText).not.toBe(text);
			});
		 });
	  });
	  describe("A Modal with the correct structure should have a body.", () => {
		 let body: Element;
		 beforeAll(() => {
			body = modal.body;
		 });
		 test("Should be defined.", () => {
			expect(body).toBeDefined();
		 });
		 test("Should have a body in the document.", () => {
			expect(body).toBeInTheDocument();
		 });
		 test("Should have a child element.", () => {
			expect(body.children.length).toBeTruthy();
		 });
	  });
   });
   describe("A Modal whose body contains the correct elements.", () => {
	  test("Should have an element defined.", () => {
		 for(const bodyEl of modal.body.children) {
			expect(bodyEl).toBeDefined();
		 }
	  });
	  test("Should have an element in the document.", () => {
		 for(const bodyEl of modal.body.children) {
			expect(bodyEl).toBeInTheDocument();
		 }
	  });
   });
});
