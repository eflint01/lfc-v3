// JavaScript Document
$(document).ready(function(){
'use strict';
$(function(){
	
	var images = [
		"../images/compu-work-600.jpg", "../images/compu-work-320.jpg", "../images/compu-work.jpg",
        "../images/scanLine_blue.png", "../images/image-one.jpg", "../images/image-three.jpg", 
		"../images/image-two.jpg", "../images/icon_list.png", "../images/image-one-aboutUs.png", 
		"../images/image-two-aboutUs.png", "../images/image-three-aboutUs.png", "../images/faq_001.jpg",
        " ../images/faq_002.jpg", "../images/faq_003.jpg"
	];
	$.preload(images, 1, function(last){
		for (var i = 0; i < this.length; i++) {
			$('<img height="200" src="' + this[i] + '" alt="" />').appendTo('body');
		}
		if (last) {
			alert('All loaded!');
		}
	});
});
	
});