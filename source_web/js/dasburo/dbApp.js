/*
 * App
 * This file contains the initializer for site
 *
 * Author
 * Markus Bergh
 * 2014
 */

define([
		'jquery',
        'snapsvg',
        'dasburo/dbUtils'
	],

    function($, Snap) {

        var DBMain = function() {

        	var local = null;

            var addListeners = function() {
                var $teaser_popup = $('.intro__popup');

                // Intro teaser
                $('.intro__content .btn').on('click', function(e) {
                    e.preventDefault();

                    $teaser_popup.removeClass('hidden');

                    $('body').addClass('fixed-scroll');
                });

                $('.intro__popup_close').on('click', function(e) {
                    e.preventDefault();

                    $teaser_popup.addClass('hidden');

                    $('body').removeClass('fixed-scroll');
                });
            };

            var handleTeaaserOpen = function() {

            };

        	var setResize = function(callback) {
                resizeHandler(callback);
        	};

            var resizeHandler = function(callback) {
                if(typeof callback == 'function') {
                  callback();
                }

                // Set height of intro (for some content fixes)
                $('section').css({
                    height: $(window).height()
                });

                $('.latest').css({
                    top: $(window).height()
                });

                $('.listen').css({
                    top: parseInt($('.latest').css('top'), 10) + parseInt($('.latest').css('height'), 10)
                });

                $('.signup').css({
                    top: parseInt($('.listen').css('top'), 10) + parseInt($('.listen').css('height'), 10)
                });

                $('main').css({
                    height: parseInt($('.signup').css('top'), 10) + parseInt($('.signup').css('height'), 10)
                })

            };

            this.orientationChanged = function(e) {

            };

            this.initialize = function() {
                var self = this;

                // Touch support check
                var supportsTouch = 'ontouchstart' in window || !!navigator.msMaxTouchPoints;
                if(supportsTouch) {
                    $('html').addClass('touch');
                }

                // Orientation
                window.addEventListener('orientationchange', this.orientationChanged);

                // Resize event
                $(window).smartresize(function() {
                    setResize();
                });

                // Set sections size
                setResize();

                // Teaser
                addListeners();

                return self;
            };

        };

        return DBMain;
	}
);