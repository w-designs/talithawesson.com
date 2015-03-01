'use strict';

jQuery(document).ready(function($) {

  // jQuery is now available for use under its own namespace
  //   and can be referenced with $, also the DOM has loaded.

  /**
   *
   * Takes an image and returns its height in pixels.
   *
   */
  var getImageHeight = function(image) {
    return $(image).css('height');
  };

  /**
   *
   * Resizes an array of elements
   *
   */
  var resizeElementHeight = function(arrayOfElements, newHeight) {
    // Iterate over an array of HTMLElements and set their heights
    for (var i = 0; i < arrayOfElements.length; i++) {
      $(arrayOfElements[i]).css('height', newHeight);
    }
  };

  // Invoke our functions with necessary inputs
  resizeElementHeight($('.uniform-height'), getImageHeight('#profile-image'));

});
