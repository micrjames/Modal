export class Modal {
   private _modal: HTMLElement;
   private _els: HTMLCollection;
   private _header: Element;
   private _body: Element;
   private _closeBtn: Element;
   constructor(modal: HTMLElement) {
	  this._modal = modal;
	  this._els = this._modal.children;
	  this._header = this._els[0];
	  this._body = this._els[1];
	  this._closeBtn = this._header.children[0];
	  this._closeBtn.addEventListener("click", () => {
		 this._modal.classList.add("hidden");
	  });
   }
   get header(): Element {
	  return this._header;
   }
   get body(): Element {
	  return this._body;
   }
   get closeBtn(): Element {
	  return this._closeBtn;
   }
   get hdrText(): Element {
	  return this._header.children[1];
   }
   get els(): HTMLCollection {
	  return this._els;
   }
   isClosed(): boolean {
	  return this._modal.classList.contains("hidden");
   }
   open() {
	  this._modal.classList.remove("hidden");
   }
   get modal(): HTMLElement {
	  return this._modal;
   }
}
