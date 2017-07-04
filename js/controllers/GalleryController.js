app.controller('GalleryController', function() {
	this.current = 1;
	this.setCurrent = function(newGallery) {
		return this.current || 0;
	}
});