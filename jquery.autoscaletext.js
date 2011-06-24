(function($) {

	$.fn.hasScrollBar = function() {
		return this.get(0).scrollHeight > this.height();
	};

	$.fn.autoScaleText = function() {
		return this.each(function(index, el) {
			var $el = $(el);

			// toggle on all scrollbars to auto
			$el.css('overflow', 'auto');

			var scaleDown = $el.hasScrollBar();

			// scale the font-size fit the contents
			while ( (scaleDown && $el.hasScrollBar()) || (!scaleDown && !$el.hasScrollBar()) ) {
				var fontSize = parseInt($el.css('font-size'));
				$el.css('font-size', fontSize + (scaleDown ? -1 : 1) + 'px');
				// prevent endless looping in cases where scrollbars never appear
				if (fontSize < 1 || fontSize > 100) {
					break;
				}
			}

			// adjust the font-size back down one step
			// this is required because in the previous loop we scaled it up
			if (!scaleDown) {
				var fontSize = parseInt($el.css('font-size'));
				$el.css('font-size', fontSize - 2 + 'px');
			}

			// to be on the safe side we'll toggle off all scrollbars
			$el.css('overflow', 'hidden');
		});
	};

	$.fn.setVerticalAlignment = function() {
		return this.each(function(index, el) {
			var $el = $(el);
			var margin = ($el.parent().height() - $el.height()) / 2;
			$el.css('margin-top', margin > 0 ? margin : 0);
		});
	};

})(jQuery);