const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom");
import { fireEvent } from "@testing-library/dom";

const { Modal } = require("../Modal");

describe("A Modal.", () => {
   let dom: typeof JSDOM;
   let document: Document;
   let modal: typeof Modal;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "index.html"), 'utf8');
	  dom = new JSDOM(html, {runScript: 'dangerously'});
	  document = dom.window.document;
	  modal = new Modal(document.querySelector("#modal"));

	  // fireEvent.click(...);
   });
   describe("A Modal in the document.", () => {
	  test("Should be defined.", () => {
		 expect(modal.modal).toBeDefined(); 
	  });
	  test.todo("Should be in the document.");
   });
   describe("A Modal with the correct structure.", () => {
	  test.todo("Should have each element defined.");
	  describe("A Modal with the correct structure should have a header.", () => {
		 test.todo("Should have a header in the document.");
		 describe("A Modal with a close button in the header.", () => {
			test.todo("Should be in the document.");
			test.todo("Should close the modal.");
		 });
		 describe("A Modal with text in the header.", () => {
			test.todo("Should not be an empty string.");
			test.todo("Should match the text.");
		 });
	  });
	  describe("A Modal with the correct structure should have a body.", () => {
		 test.todo("Should have a body in the document.");
		 test.todo("Should have at least one child element.");
	  });
   });
   describe("A Modal whose body contains the correct elements.", () => {
	  test.todo("Should have an element defined.");
	  test.todo("Should have an element in the document.");
   });
});
