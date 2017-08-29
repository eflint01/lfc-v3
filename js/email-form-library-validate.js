"use strict";

var x$ = function(id){
	return document.getElementById(id);
};

var ContactForm = function() { };

ContactForm.prototype = new Validate(); //inherit

// Method to validate individual field
ContactForm.prototype.validateField = function(fieldName, text) {
    var field = fields[fieldName];
    if (field.required) {
        if (this.isBlank(text) ) { throw new Error(field.required); } 
    }
	 if (field.isEmail) {
        if (!this.isEmail(text) ) { throw new Error(field.isEmail); }
    }
	  if (field.isPhone){
		if(!this.isPhone(text)){ throw new Error(field.isPhone); }	
	}
	if (field.addComents){
		if(!this.addComments(text)){ throw new Error(field.addComments); }	
	}
	
   
};

// Error message methods
ContactForm.prototype.setError = function( fieldName, message ) {
    x$(fieldName + "_error").setAttribute("class", "error");
    x$(fieldName + "_error").firstChild.nodeValue = message;
};
ContactForm.prototype.clearError = function( fieldName, message ) {
    x$(fieldName + "_error").setAttribute("class", "");
    x$(fieldName + "_error").firstChild.nodeValue = message || "";
};

// Form methods
ContactForm.prototype.resetForm = function() {
    for ( var fieldName in fields ) {
        this.clearError(fieldName, fields[fieldName].message);
        x$(fieldName).value = ""; //clear corresponding textbox 
    }
};
ContactForm.prototype.validateForm = function() {
    var isOK = true;
    for ( var fieldName in fields ) {
        this.clearError(fieldName);
        try { this.validateField(fieldName, x$(fieldName).value ); } 
        catch (error) {
            isOK = false;
            this.setError( fieldName, error.message);           
        }
    }
    return isOK;
};