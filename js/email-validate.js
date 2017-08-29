"use strict";

var Validate = function() {
};

Validate.prototype.isBlank = function(text) {
    return (text === "");
};

Validate.prototype.addComments = function(text) {
    return (text === "");
};

Validate.prototype.isEmail = function(text) {
    if (text.length === 0) return false;
    var parts = text.split("@");
    if (parts.length !== 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    var address =
        "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    var localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    var hostnames =
        "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    var tld = "[a-zA-Z0-9]{2,6}";
    var domainPart = new RegExp("^" + hostnames + tld + "$");
    if (!parts[1].match(domainPart) ) return false;
    return true;
};

//checking for literal expression for phone
		Validate.prototype.isPhone = function(text) {
	var phonePattern = /^\d{3}-\d{3}-\d{4}$/; 
	if ( !text.match(phonePattern)) return false; 
return true;
		
	

};