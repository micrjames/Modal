export class Modal {
   private _modal: HTMLElement;
   constructor(modal: HTMLElement) {
	  this._modal = modal;
   }

   get modal(): HTMLElement {
	  return this._modal;
   }
}
