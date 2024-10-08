# Modal
A wrapper class that implements a Modal, which provides a close button and a body for the "payload" of the modal. The wrapper class helps the user perform operations on the elements of the body of the modal.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info

This project was developed to encapsulate a custom Modal. Need was found to repeatedly write and rewrite much of this code to do work with various projects, so in order to follow the principles of encapsulation and writing code as DRYly as possible, the Modal class was found to be clearly necessary.

## Technologies Used

This project is built using es6 class structures, defining private fields that define the various operations of the modal.

## Features

The functions implemented by the wrapper class allow the user to close the modal or interact with the elements contained within its body.
* The closing operation is defined and built into the constructor function.
* The header text can be defined and altered.
* The specified structure of the Modal must be adhered to so that the code wil work properly.
* Modal can be opened from anywhere else in code.

## Setup

Setting up the project involves importing it. First, the modal depends on the following html structure:
```
<html>
   …
   <body>
     ...
	   <div id="modal" class="hidden">
       <div id="modal-header">
			   <div id="modal-header-close">
				    <i class="fa-solid fa-xmark"></i>
			   </div>
			   <div id="modal-header-text”>…</div>
       </div>
		   <div id="modal-body">
         <!— add some element here —>
       </div>
	   </div>
     ...
   </body>
</html>
```

Then, we create a Modal object by instantiating the class.
```
const modal = new Modal(document.querySelector("modal"));
```
Here, we have created a Modal object by passing in the top-level element that contains the modal in the html. We must, next, set the modal to open by some logic contained in the application.
```
modal.open()
```
Additionally, we must style the *modal-body*, first. Then, all we must do is add the *sass mixin* at the *modal id selection*:
```
#modal {
    @include modal($width, $bg-color, $text-color, $centered:true, $height:-1, $bg-body-color, $bg-header-color);
}
```
The *modal mixin* configured in this way gives us a modal that is set to have the *close button* on the left side and centered on the page. Otherwise, the given variables are obvious as to what they do.
## Usage

Once a Modal object is instantiated, we have access to the body of the modal by:
```
modal.body
```
These are the elements that are added at that level in the dom:
```
<div id="modal-body">
  <!— add some element here —>
</div>
```
Then, from there, the child elements to the body can be accessed through dom accessors or through other code written to access such items.
```
const bodyChildren = modal.body.children;
```
Such as, if a form is placed in the body of the modal, the first child of the modal body can be passed to the Form class.
```
const form = new Form(bodyChildren[0]);
```
Furthermore, the header text at the id *modal-header-text* can be accessed by calling the hdrText getter.
```
modal.hdrText;
```
The header text above can be set by calling the hdrText setter property.
```
modal.hdrText = "Send a message.";
```
Also, the status of the modal being closed can be tested.
```
modal.isClosed()
```
The modal can be closed, once it is open, by clicking on the the element at id *modal-header-close*. But, first, the *doOnClose* method must called on the modal object.
```
modal.doOnClose();
```
There is an optional callback function that can be passed to the *doOnClose* method to specify what is to be accomplish when the modal is closed.
## Project Status

This project is completed as long as nothing else can be found to be included in the project to improve the original intention of the project.

## Room for Improvement

There is room for improvement in that the class structures available in javascript work fine for the project currently entails. However, rewriting the project for typescript can only improve the project as the class structures available there are improved over those available in JavaScript.

## Contact
Feel free to contact me @michaelrjamesjr on twitter or on github @micrjames.
