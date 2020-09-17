

var colorlib = {



	Luminance: function(v){



		var getRGB = function(b){
			var a;
			if(b&&b.constructor==Array&&b.length==3)return b;
			if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))return[parseInt(a[1]),parseInt(a[2]),parseInt(a[3])];
			if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];
			if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],
		16)];
			if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];
			return (typeof (colors) != "undefined")?colors[jQuery.trim(b).toLowerCase()]:null
		};
		
		
		function Luminance(color) {
		
			var rgb = getRGB(color);
			if(!rgb) return null;
				return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
				
		}


		var R = Luminance(v);
		return R;


	},
	




	LightOrDark: function(color){


		// Variables for red, green, blue values
		var r, g, b, hsp;
		
		// Check the format of the color, HEX or RGB?
		if (color.match(/^rgb/)) {

			// If HEX --> store the red, green, blue values in separate variables
			color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
			
			r = color[1];
			g = color[2];
			b = color[3];
		} 
		else {
			
			// If RGB --> Convert it to HEX: http://gist.github.com/983661
			color = +("0x" + color.slice(1).replace( 
			color.length < 5 && /./g, '$&$&'));

			r = color >> 16;
			g = color >> 8 & 255;
			b = color & 255;
		}
		
		// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
		hsp = Math.sqrt(
		0.299 * (r * r) +
		0.587 * (g * g) +
		0.114 * (b * b)
		);

		// Using the HSP value, determine whether the color is light or dark
		if(hsp>127.5) {

			return 'light';
		} 
		else {

			return 'dark';
		}




	},
	

	ColorLuminance: function(hex, lum) {

		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if(hex.length < 6) 
		{
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
		

		// convert to decimal and change luminosity
		var rgb = "#", c, i;

		for (i = 0; i < 3; i++) 
		{
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
	
		return rgb;
	}


    


  

}





