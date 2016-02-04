(function ($) {
  $.fn.breadcrumb = function () {
    var $container = $(this);
    var widths = 0;
    var elements = $container.find('.breadcrumb');
    $.each(elements, function(i, el) {
      widths += $(el).width();
    });
    elements = elements.splice(0, elements.length - 1);

    var render = function() {
      var containerWidth = $container.width();
      // If breadcrumb elements are to long for the container
      if($container.find('.dropdown-container').length === 0 && (containerWidth + 10 < widths)) {
        $(elements).remove();
        // Create dropdown
        var $dropdownContainer = $('<div/>').addClass('dropdown-container');
        $dropdownContainer.append(elements);
        var $dropdown = $('<div/>').addClass('dropdown');
        var $home = $('<a></a>');
        $dropdown.append($home);
        $dropdown.append($dropdownContainer);
        $container.prepend($dropdown);
      } else {
        // Display normal inline breadcrumb
        if($container.find('.dropdown-container').length > 0) {
          $container.find('.dropdown').remove();
          $container.prepend(elements);
        }
      }
    };

    render();

    $(window).resize(function() {
      render();
    });

    return this;
  };
})(jQuery);