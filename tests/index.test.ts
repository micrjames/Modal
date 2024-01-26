const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom");
import { fireEvent } from "@testing-library/dom";

const { Modal } = require("../Modal");

describe("A Modal.", () => {
   let dom: typeof JSDOM;
   let document: Document;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "index.html"), 'utf8');
	  dom = new JSDOM(html, {runScript: 'dangerously'});
	  document = dom.window.document;

	  // fireEvent.click(...);
   });
   describe("A Modal in the document.", () => {
	  test.todo("Should be defined.");
	  test.todo("Should be in the document.");
   });
});
