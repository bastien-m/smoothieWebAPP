var animationVelocity = {

	init: function() {
		this.title = $('.brand-logo');
		this.colors = ['#FF814D', '#FF6667', '#8CFF4D', '#55CFFF'];
	},
	customLogo: function() {
		var self = this;
		var characters = this.title.blast({delimiter: 'character'}).each(function(i, character) {
			var colorIndex = i % self.colors.length;
			character.style.color = self.colors[colorIndex];
		});
	}


}