
// returns a filtered result set leaving only the tallest element
jQuery.fn.tallest = function() {
  var tallest, height = 0;
	this.each(function(index, el) {
		var h = $(el).height();
		if (height < h) {
			tallest = index;
			height = h;
		}
	});
	return this.filter(function(index) {
		return index === tallest;
	});
};
