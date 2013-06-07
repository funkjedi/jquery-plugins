(function($) {

  function SlidingDrawer(el, opts) {
		this.opts = $.extend({
			content: ".drawer-content",
			handle: ".drawer-handle",
			easing: "swing",
			animationSpeed: 600,
		}, opts);

		this.container = $(el);
		this.handle = this.container.find(this.opts.handle);
		this.content = this.container.find(this.opts.content);

		this.handle.on('click', $.proxy(this.toggle, this));
	}

	SlidingDrawer.prototype = {
		show: function() {
			this.content.slideDown(this.opts.animationSpeed, this.opts.easing);
		},
		hide: function() {
			this.content.slideUp(this.opts.animationSpeed, this.opts.easing);
		},
		toggle: function() {
			this.content.slideToggle(this.opts.animationSpeed, this.opts.easing);
		}
	};


	$.fn.drawer = function (opts) {
		return this.each(function() {
			var el = $(this);

			if (!el.data('drawer')) {
				el.data('drawer', new SlidingDrawer(this, opts));
			}
		});
	};

}(jQuery));
