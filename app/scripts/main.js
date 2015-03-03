'use strict';

jQuery(document).ready(function($) {

  // jQuery is now available for use under its own namespace
  //   and can be referenced with $, also the DOM has loaded.

  /**
   *
   * Takes an elementID and returns its height in pixels.
   *
   */
  var getHeight = function(element) {
    return $(element).css('height');
  };

  /**
   *
   * Resizes an array of elements
   *
   */
  var resizeHeight = function(arrayOfElements, newHeight) {
    // Iterate over an array of HTMLElements and set their heights
    for (var i = 0; i < arrayOfElements.length; i++) {
      $(arrayOfElements[i]).css('height', newHeight);
      $(arrayOfElements[i]).addClass('show');
    }
  };

  // Invoke our functions with necessary inputs
  resizeHeight($('.testimonials'), getHeight('.about'));

});
