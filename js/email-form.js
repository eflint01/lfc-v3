"use strict";
//var x$ = function(id){
//	return document.getElementById(id);
//};


function saveForm(){
	if(typeof(Storage !== 'undefined')){
sessionStorage.first_name = x$('first_name').value;
sessionStorage.last_name = x$('last_name').value;
sessionStorage.email = x$('email').value;
sessionStorage.contact_num = x$('contact_num').value;
sessionStorage.addComments = x$('addComments').value;
	}
else{
	document.write("Your browser does not support Web Storage");
}
	}

var contactForm;

window.onload = function() {
	//create validation object and set field messages
	contactForm = new ContactForm();
	contactForm.resetForm();
	
	x$("send").onclick = function() {
        if ( contactForm.validateForm() ) {
			saveForm(); 
		    x$("contactForm").submit();
			
        }
	};
	
	x$("reset").onclick = function() {
	    contactForm.resetForm();
	};

};
