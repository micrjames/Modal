export class Modal {
   private _modal: HTMLElement;
   private _els: HTMLCollection;
   private _header: Element;
   private _body: HTMLElement;
   constructor(modal: HTMLElement) {
	  this._modal = modal;
	  this._els = this._modal.children;
	  this._header = this._els[0];
   }
   get header(): Element {
	  return this._header;
   }
   get closeBtn(): Element {
	  return this._header.children[0];
   }
   get hdrText(): Element {
	  return this._header.children[1];
   }
   get els(): HTMLCollection {
	  return this._els;
   }
   get modal(): HTMLElement {
	  return this._modal;
   }
}
