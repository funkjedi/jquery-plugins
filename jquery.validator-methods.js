
// required only if the element and all of its parents are :visible
jQuery.validator.addMethod(
	"required_when_visible",
	function(value, element) {
		var $element = jQuery(element);
		return ($element.is(":visible") && $element.parents(":not(:visible)").length === 0) ?
			jQuery.validator.methods.required.call(this, jQuery.trim(element.value), element) : true;
	},
	jQuery.validator.messages.required
);
