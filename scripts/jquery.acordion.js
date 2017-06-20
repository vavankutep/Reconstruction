(function($) {
$(document).ready(function() {
  $('.destroy').not(':first').hide();
  $('.destroy'> '.destroy_wall').click (function() {

  var findList = $(this).next('.selected_item_1');
  var findDestroy = $(this).closest('.destroy');

  if (findList.is(':visible')) {
    findList.slideUp(600)
  } else {
     findDestroy.find(' >.selected_item_1').slideUp();
     findList.SlideDown();
      }

  });

});
	})(window.jQuery);
