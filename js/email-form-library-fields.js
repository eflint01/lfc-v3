//Fields objects using JSON
"use strict";
var fields = {
	
	first_name: {
		required: "*Required!"
	},
	last_name: {
		required: "*Requried!"
	},
	email: {
		required: "*Required!",
		isEmail: "*Invalid email!"
	},
	contact_num: {
		required: "*Required!",
		message: "ex: 123-345-6789",
		isPhone: "Invalid! ex: 123-345-6789"
	},
	addComments: {
		required: "*Required!"
	}
};