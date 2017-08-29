$(document).ready(function() {
    'use strict';
	
	
    function mobileImgSwap() {
        //this function swaps the header image to different resolution
        //depending on screen width
        if ($(window).width() <= 768) {
            $('header').css({
                'background-image': 'url("../images/compu-work-600.jpg")'
			});
        } else if($(window).width() <= 480) {

            $('header').css({
                'background-image' : 'url("../images/compu-work-320.jpg")'
			});

        } else {
            $('header').css({
                'background-image': 'url("../images/compu-work.jpg")'
			});
        }
    }

    function currentStatus() {
        //this function addresses the positioning of the current page indicator arrow	
        var currentPage;
        var currentPageL;
        var firstPosition;
        var firstPositionL;
        var distanceBetween;

        currentPage = $('#currentPage').position();
        currentPageL = currentPage.left + ($('#currentPage').width() / 2) + 8;
        firstPosition = $('.nav-side').position();
        firstPositionL = firstPosition.left;
        distanceBetween = currentPageL - firstPosition.left;
        //console.log('DistanceBetween ' + distanceBetween);

        if (distanceBetween < $('.nav-side').width()) {
            $('.current').css('background-color', '#4c81bc');
        } else {
            $('.current').css('background-color', '#FFFFFF');
        }

        $('.current').css('left', currentPageL + 'px');
    }
    //execute current status to position page indicator
    currentStatus();


    function fixAside() {
        //fixes the height of the aside element on layout width resizes
        var filler;
        var parentHeight = $('header').height() + $('nav').height() + $('main').height();
        //console.log('parentHeight' + ' ' + parentHeight);	

        var asideMinus = $('header').height() +
            $('nav').height() + $('.h2FAQs').height() +
            $('#side-search').height() + $('.nav-side').height() + $('.navFAQs').height() +
            $('#aside-image').height();

        //console.log('asideMinus' + ' ' + asideMinus);
        filler = parentHeight - asideMinus;
        $('.filler').height(filler);
        //console.log('filler' + ' ' + filler);

        //just in case - fail safe for aside image height
        if ($('.container').width() < 960) {
            filler = filler - $('#aside-image').height();
        }
    }

    //execute aside fix on load
    fixAside();
    mobileImgSwap();

    //the lovely condition here was sourced from  >. //http://www.javascriptkit.com/javatutors/navigator.shtml
    if (navigator.appName === 'Microsoft Internet Explorer' || navigator.appName === 'Edge' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie === 1)) {
        $('.current').css('display', 'none');
    }

    //see if first session storage value exists from form submission
    if (sessionStorage.first_name !== undefined) {

        //if sessionStorage.first_name exists change relevant classes
        $('#confModal').removeClass('hide-modal');
        $('#confModal').addClass('show-modal');
        $('#dismiss').removeClass('hide-modal');

        //write storage values to confModal 
        $('#confModal').html(
            '<h2>Email Confirmation</h2><br>' +
            '<p><b>Your message has been sent</p><br><p>Message' + ' ' +
            'Summary:</b></p><br>' + '<br>' +
            '<p><b>First&nbsp;Name:</b>&nbsp;' + sessionStorage.first_name + '<br>' +
            '<b>Last&nbsp;Name:</b>&nbsp;' + sessionStorage.last_name + '<br>' +
            '<b>Email:</b>&nbsp;' + sessionStorage.email + '<br>' +
            '<b>Contact&nbsp;Number:</b>&nbsp;' + sessionStorage.contact_num + '<br>' +
            '<b>Comments:</b> ' + sessionStorage.addComments + '</p><br>'
        );

        //add dismissal glyph
        $('#dismiss').css({
            'display': 'block',
            'font-size': '40px',
            'float': 'right',
            'position': 'absolute',
            'top': '15%',
            'left': '11%',
            'width': '10%',
            'text-align': 'right',
            'padding-left': '10px',
            'box-sizing': 'border-box',
            'margin-left': '63%',
            'font-weight': '600',

        });

        //if sessionStorage for first_name does not exist
        //hide modal and dismiss glyph
    } else {
        $('#confModal').addClass('hide-modal');
        $('#dismiss').addClass('hide-modal');
    }

    //glyph click will hide modal, glpyh
    $('#dismiss').click(function() {
        $('#dismiss').css('display', 'none');
        $('#confModal').removeClass('show-modal');
        $('#confModal').addClass('hide-modal');

        sessionStorage.clear(); //clear storage
    });

    // running aside fix on resize of browser window
    $(window).resize(function() {
        //'use strict';	
        fixAside();
        currentStatus();
        mobileImgSwap();
    });


});