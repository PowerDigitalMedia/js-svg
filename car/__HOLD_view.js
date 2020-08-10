
function SVG_ViewCar(pack){


    var unpack = baselib.ParseIt(pack);


	//========================================================
	var parent_id = unpack['parent_id'];

	var threshold_1 = unpack['threshold_1'];
	var threshold_2 = unpack['threshold_2'];
	var threshold_3 = unpack['threshold_3'];


	var A_threshold = unpack['threshold_1'];
	var B_threshold = unpack['threshold_2'];
	var C_threshold = unpack['threshold_3'];

	var thresh_obj = {

		"threshold_1" : threshold_1,
		"threshold_2" : threshold_2,
		"threshold_3" : threshold_3
	};


	//========================================================

	var stage = document.getElementById('stage');
	var parent = document.getElementById(parent_id);
	//parent.style.backgroundColor = 'aqua';

	//========================================================


	var parent_index = 0;



	//========================================================

	var hierarchy = zoneObj['address_obj']['hierarchy'];
	var params_obj = zoneObj['address_obj']['params_obj'];
	var query_obj = zoneObj['address_obj']['query_obj'];
	
	var params_obj = baselib.ParseIt(params_obj);
	var query_obj = baselib.ParseIt(query_obj);

	//========================================================


	var squashed = false;
	if(parent.offsetWidth < 450) var squashed = true;



	//========================================================


	var browser = detectlib.Browser();
	var mob = detectlib.Mobile();
	var is_mobile = mob['is_mobile'];


	var PREFIX = "sketch_svg_";






    //######################################################################################################
    //######################################################################################################
    //######################################################################################################













    //CONTROLS











    //######################################################################################################
    //######################################################################################################
    //######################################################################################################


/*



		var _id = parent_id + "_cntr";

		
		var cntr_w_int = parent.offsetWidth;
		var cntr_h_int = (15/100) * cntr_w_int;

		//var cntr_marleft_int = (parent.offsetWidth - cntr_w_int)/2;
		var cntr_marleft_int = 0;

		var cntr_id =_id+"_cntr";


			if(document.getElementById(cntr_id))
			{

				var e = document.getElementById(cntr_id);
				parent.removeChild(e);

			}//==


			var cntr = document.createElement('div');
			cntr.setAttribute("id",cntr_id);
		
		parent.appendChild(cntr);


		var cntr = document.getElementById(cntr_id);

			var css = '';
			css += "background-color : lightgray;";
			//css += "background-image : url("+logo_src+");";
			css += "width       	 : "+cntr_w_int+"px;";
			css += "height      	 : auto;";

			css += "padding     	 : 0 0 0 0;";
			css += "margin      	 : 0 0 0 "+cntr_marleft_int+"px;";

			css += "position         : relative;";
			css += "float     	     : left;";

			//css += "position       : absolute;";
			//css += "top     		 : 0px;";
			//css += "left     		 : 0px;";
			//css += "z-index 		 : 1;";

				
			//css += "font-family  	 : Arial, Helvetica, sans-serif;";
			//css += "font-size    	 : 16px;";
			//css += "font-weight  	 : normal;";
			//css += "color       	 : #003366;";
			//css += "text-align   	 : left;";

			//css += "border 		 : 1px solid black;";
			//css += "border-radius  : 5px;";

		cntr.style.cssText = css;
	








		//#################################################################################
		//#################################################################################
		//color picker 1
		
		//<div>
		//<input type="color" value="#ff0000" class="myColorPic">
		//</div>
		

		var cpicker_cls = 'cpicker';
		var cpicker_id = "cpicker1";

			var cpicker = document.createElement("div");
			cpicker.setAttribute("class",cpicker_cls);
			cpicker.setAttribute("id", cpicker_id);
				
		cntr.appendChild(cpicker);

		var cpicker = document.getElementById(cpicker_id);
		cpicker.style.width = "auto";
		cpicker.style.height = "40px";
		//cpicker.style.backgroundColor = "blue";
		cpicker.style.marginLeft = "10px";


			var label_cls = 'label';
			var label_id = cpicker_id + "_label";

				var label = document.createElement("div");
				label.setAttribute("class",label_cls);
				label.setAttribute("id", label_id);
					
			cpicker.appendChild(label);

					var node = document.createTextNode("Choose Car Color");

				label.appendChild(node);

			


			//var inp_id = cpicker_id + "_inp";
			var inp_id = 'car_body_color';
			var inp_cls = 'myColorPic';
			var inp_value = '#ff0000';

			if(zoneObj['car_body_color']
			&& zoneObj['car_body_color'] != undefined
			)
			{
				var inp_value = zoneObj['car_body_color'];
			}//==


				var inp = document.createElement("input");
				inp.setAttribute("type","color");
				inp.setAttribute("class",inp_cls)
				inp.setAttribute("id", inp_id);
				inp.setAttribute("value",inp_value);
				//inp.setAttribute("border", "0");
										
			cpicker.appendChild(inp);


			var inp = document.getElementById(inp_id);
			inp.style.position = 'relative';
			inp.style.cssFloat = 'left';
			inp.style.margin = "7px 0 0 0";
			

			//----------------------------------------------------------------------

			inp.onchange = function(){
			
				console.log(this.value);
				var colorHex = this.value;

				Process_ColorChange({

					'from':'cpicker_inp',
					'id':this.id, 
					'hex':colorHex,
					'organize':{
						'case':'sat',
						'direction':'asc'
					}
				});
				
			
			}
			//------------------------------------------------------------------------








		//#################################################################################
		//#################################################################################
		//color picker 2


		//<div>
		//<input type="color" value="#ff0000" class="myColorPic">
		//</div>
	

		var cpicker_cls = 'cpicker';
		var cpicker_id = "cpicker2";

			var cpicker = document.createElement("div");
			cpicker.setAttribute("class",cpicker_cls);
			cpicker.setAttribute("id", cpicker_id);
				
		cntr.appendChild(cpicker);

		var cpicker = document.getElementById(cpicker_id);
		cpicker.style.width = "auto";
		cpicker.style.height = "40px";
		//cpicker.style.backgroundColor = "blue";
		cpicker.style.marginLeft = "10px";


			var label_cls = 'label';
			var label_id = cpicker_id + "_label";

				var label = document.createElement("div");
				label.setAttribute("class",label_cls);
				label.setAttribute("id", label_id);
					
			cpicker.appendChild(label);

					var node = document.createTextNode("Choose Accent Color");

				label.appendChild(node);

			



			//var inp_id = cpicker_id + "_inp";
			var inp_id = 'car_accent_color';
			var inp_cls = 'myColorPic';
			var inp_value = '#ff0000';

			if(zoneObj['car_accent_color']
			&& zoneObj['car_accent_color'] != undefined
			)
			{
				var inp_value = zoneObj['car_accent_color'];
			}//==
		
	


				var inp = document.createElement("input");
				inp.setAttribute("type","color");
				inp.setAttribute("class",inp_cls)
				inp.setAttribute("id", inp_id);
				inp.setAttribute("value",inp_value);
				//inp.setAttribute("border", "0");
										
			cpicker.appendChild(inp);


			var inp = document.getElementById(inp_id);
			inp.style.position = 'relative';
			inp.style.cssFloat = 'left';
			inp.style.margin = "7px 0 0 0";
			

			//----------------------------------------------------------------------

			inp.onchange = function(){
			
				console.log(this.value);
				var colorHex = this.value;

				Process_ColorChange({

					'from':'cpicker_inp', 
					'id':this.id, 
					'hex':colorHex,
					'organize':{
						'case':'sat',
						'direction':'asc'
					}
				});
				
			
			}
			//------------------------------------------------------------------------




*/








//######################################################################################################
//######################################################################################################
//######################################################################################################













//HONDA CAR











//######################################################################################################
//######################################################################################################
//######################################################################################################







	if(zoneObj['car_body_color']
	&& zoneObj['car_body_color'] != undefined
	)
	{


		switch(zoneObj['car_body_color'])
		{
		case'#000000':

			var carcolor_A = '#000000';//2
			var carcolor_B = '#181B21';//lightest
			var carcolor_C = "#000000";//3

			
	

			//var carcolor_A = colorlib.ColorLuminance(carcolor_C, 0.6); // 20% lighter
			//var carcolor_B = colorlib.ColorLuminance(carcolor_C, 0.8); // 40% lighter


			//var carcolor_A = colorlib.ColorLuminance(carcolor_B, -0.2); // 20% darker
			//var carcolor_C = colorlib.ColorLuminance(carcolor_B, -0.4); // 40% darker


			//alert(carcolor_C+" "+carcolor_A);

		break;
		default:

			var carcolor_A = '#D1D3D4';
			var carcolor_B = zoneObj['car_body_color'];
			var carcolor_C = '#A7A9AC';

			//alert("CARCOLOR A: "+carcolor_A+"\nCARCOLOR C: "+carcolor_C);

			var carcolor_A = colorlib.ColorLuminance(carcolor_B, -0.2); // 20% darker - returns hex
			var carcolor_C = colorlib.ColorLuminance(carcolor_B, -0.4); // 40% darker - returns hex

			var carcolor_D = colorlib.ColorLuminance(carcolor_B, -0.1); // 10% darker - returns hex


			//alert("CARCOLOR A: "+carcolor_A+"\nCARCOLOR C: "+carcolor_C);

		break;
		}//switch
		//=======


	
	}else{
		var carcolor_A = '#D1D3D4';// white: #D1D3D4
		var carcolor_B = '#E6E7E8';// white: #E6E7E8  
		var carcolor_C = '#A7A9AC';// white: #A7A9AC

		var carcolor_D = "#E2E3E4";// white: #E2E3E4 - door handle
	


	}//==





	if(zoneObj['car_accent_color']
	&& zoneObj['car_accent_color'] != undefined
	)
	{
		var caraccent_color = zoneObj['car_accent_color'];
	}else{
		var caraccent_color = '#C6262E';// red: #C6262E
	}//==










	//alert(carcolor_A);




	//====================================================================================
	//====================================================================================
	//====================================================================================









	//SVG








	//====================================================================================
	//====================================================================================
	//====================================================================================






		//====================================================================
		//====================================================================




		//HOLDER

		


		//=====================================================================
		//=====================================================================


		var _id = parent_id + "_top";
		
		var holder_w_int = parent.offsetWidth;
		var holder_h_int = (25/100) * holder_w_int;

		//var holder_marleft_int = (parent.offsetWidth - holder_w_int)/2;
		var holder_marleft_int = 0;

		var holder_id =_id+"_holder";


			if(document.getElementById(holder_id))
			{

				var e = document.getElementById(holder_id);
				parent.removeChild(e);
			}

		
			var holder = document.createElement('div');
			holder.setAttribute("id",holder_id);
		
		parent.appendChild(holder);


		var holder = document.getElementById(holder_id);

			var css = '';
			css += "background-color : black;";
			//css += "background-image : url("+logo_src+");";
			css += "width       	 : "+holder_w_int+"px;";
			css += "height      	 : "+holder_h_int+"px;";

			css += "padding     	 : 0 0 0 0;";
			css += "margin      	 : 0 0 0 "+holder_marleft_int+"px;";

			css += "position         : relative;";
			css += "float     	     : left;";

			//css += "position       : absolute;";
			//css += "top     		 : 0px;";
			//css += "left     		 : 0px;";
			//css += "z-index 		 : 1;";

				
			//css += "font-family  	 : Arial, Helvetica, sans-serif;";
			//css += "font-size    	 : 16px;";
			//css += "font-weight  	 : normal;";
			//css += "color       	 : #003366;";
			//css += "text-align   	 : left;";

			//css += "border 		 : 1px solid black;";
			//css += "border-radius  : 5px;";

		holder.style.cssText = css;
	






		//====================================================================
		//====================================================================




		//SVG - set




		//=====================================================================
		//=====================================================================


		//ATTRIBUTES LIST
		//https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute

		var svg_w_int = holder.offsetWidth;
		var svg_h_int = holder.offsetHeight/1.2;
		//var svg_h_int = (29.5/100) * svg_w_int;	


		//alert(svg_h_int);

		var vb_w_int = holder.offsetWidth;
		var vb_h_int = holder.offsetHeight;
		//var vb_h_int = (30.7/100) * vb_w_int;	


		//var pav = "xMinYMin";
		var pav = "none";



		var svg_id = _id + "_svg";
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");


			svg.setAttributeNS(null,"id",svg_id);
			//svg.setAttributeNS(null,"width",svg_w_int + "px");
			//svg.setAttributeNS(null,"height",svg_h_int + "px");
			svg.setAttributeNS(null,"preserveAspectRatio", pav);
			//svg.setAttributeNS(null,"viewBox","0 0 "+vb_w_int+" "+vb_h_int); //min-x, min-y, width, height
			//svg.setAttributeNS(null,"display","block");

			//svg.setAttributeNS(null,"x",25);
			//svg.setAttributeNS(null,"y",25);
			//svg.setAttributeNS(null,"r",50);
			//svg.setAttributeNS(null,"stroke","none");



			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
	











			//##################################################################################
			//##################################################################################
			//##################################################################################







			// background and line
					






			//##################################################################################
			//##################################################################################
			//##################################################################################

				//------------------------
				//POLYGON
				//------------------------
				var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
				
					polygon.setAttributeNS(null, "fill-rule", "evenodd");
					polygon.setAttributeNS(null, "clip-rule", "evenodd");
					polygon.setAttributeNS(null, "stroke", "#000000");
					polygon.setAttributeNS(null, "stroke-width", "0.216");
					polygon.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					polygon.setAttributeNS(null, "points", "-132.892,36.108 931.719,36.108 931.719,565.566 -132.892,565.566 -132.892,36.108");

				svg.appendChild(polygon);



				//------------------------
				//POLYGON
				//------------------------
				var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
				
					polygon.setAttributeNS(null, "fill-rule", "evenodd");
					polygon.setAttributeNS(null, "clip-rule", "evenodd");
					polygon.setAttributeNS(null, "fill", "#222223");
					//polygon.setAttributeNS(null, "stroke", "#000000");
					//polygon.setAttributeNS(null, "stroke-width", "0.216");
					//polygon.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					polygon.setAttributeNS(null, "points", "928.871,419.133 -129.582,419.133 -129.582,415.379 928.871,415.379 928.871,419.133");

				svg.appendChild(polygon);









			//##################################################################################
			//##################################################################################
			//##################################################################################







			// car body
					






			//##################################################################################
			//##################################################################################
			//##################################################################################




				//=================================================

				//body B

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", carcolor_A);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M161.203,312.068c-49.032,0.021-64.425,48.152-65.755,70.967 c-5.128-0.146-13.889,0.246-18.766,0.111c-17.072-0.473-22.328,2.078-21.155-4.436s1.66-16.41-2.747-17.273 s-5.742-3.992-5.983-12.85s-1.359-12.746-1.265-17.488s8.757-6.164,15.964-9.957c7.207-3.795,5.997-9,7.002-15.949 c0.57-3.945,1.722-8.973,3.125-16.365c1.079-5.689,0.996-8.392,2.852-17.844c1.856-9.452,12.446-21.323,24.968-31.568 c12.522-10.245,24.571-20.872,31.813-26.436c7.241-5.563,6.533-6.717,4.256-10.132c-2.277-3.415-3.691-4.61,0.862-4.61 s20.373-1.609,31.188-1.609c10.815,0,52.837-2.685,75.605-2.685c11.74,0,52.258-1.222,87.296-0.749 c32.914,0.445,60.55,2.576,68.379,3.025c16.166,0.929,25.128,3.618,36.998,9.388c23.191,11.273,78.367,40.788,97.654,52.441 c19.285,11.653,23.555,15.279,28.906,14.186c5.352-1.094,23.166,3.324,40.053,5.665s39.057,5.945,51.578,8.791 c12.523,2.846,42.506,11.51,47.209,13.308s11.094,4.662,14.795,7.792c3.699,3.131,10.705,13.607,12.697,18.16 c1.547,2.48,5.111,7.42,13.863,8.164c8.754,0.744,10.33,3.615,9.926,8.088c-0.406,4.473-0.859,4.039-0.289,8.592 c0.568,4.555,1.668,9.666-0.895,13.367c-2.561,3.699-6.445,4.217-5.592,8.771c0.854,4.553,1.738,15.809,2.021,18.369 c0.285,2.563-0.295,0.504-21.068,1.068c-5.766,0.158-9.518-1.611-12.902-1.428c-2.031,0.109-5.9,5.598-6.563,0.309 c-0.68-26.701-10.598-80.029-67.313-80.932c-50.799-0.809-69.012,52.045-71.148,80.244c-0.16,2.119,0.141,1.986-2.01,2.006 c-122.506,1.127-224.749,0.166-336.384-1.002c-3.068-0.031-2.627,0.088-2.91-2.947C223.301,343.9,210.234,312.049,161.203,312.068 L161.203,312.068z");
				
				svg.appendChild(path);






				//=================================================

				//body B

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", carcolor_B);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M118.346,307.932c-4.268,4.742-11.065,19.918,1.265,12.33 c12.33-7.588,26.557-11.855,43.629-11.381c17.073,0.473,33.671,7.113,39.836,11.381s15.034,0.926,6.593-7.895 c-8.441-8.822-10.11-9.795-13.876-12.081c-3.766-2.287-3.484-5.16,4.578-5.16s86.171,9.01,103.718,9.01s85.359,3.084,98.638,3.557 c44.965,1.605,97.402,2.57,141.467,2.57c7.969,0,65.936-13.58,53.66-5.855c-12.275,7.725-21.707,28.863-16.014,27.156 c5.691-1.707,14.229-10.814,20.49-13.66c6.262-2.848,23.338-11.953,43.828-9.678c20.49,2.277,30.168,8.539,35.859,13.662 c5.691,5.121,8.537,10.244,11.953,8.537s3.984-3.416-0.568-8.537c-4.555-5.123-6.262-8.539-9.107-11.385s-5.123-6.262,1.707-4.553 c6.83,1.707,15.459,6.41,15.459,6.41s-0.783-3.955,2.846-3.955c3.631,0,6.018-0.152,10.422-0.121 c4.406,0.031-5.756-4.922-10.645-7.088c-29.057-12.872-94.258-22.917-113.824-25.641c-19.566-2.723-22.621-4.414-27.973-3.32 c-5.352,1.093-9.508-2.533-28.793-14.186c-19.287-11.653-74.463-41.167-97.654-52.441c-11.869-5.77-20.832-9.723-36.998-10.652 c-7.576-0.435-35.474-1.774-67.214-1.96c-35.969-0.21-76.163,0.293-88.258,0.293c-22.768,0-64.482,2.886-75.297,2.886 c-10.814,0-27.524,1.301-32.078,1.301s-5.492,0.186-2.426,4.39c3.066,4.205,5.103,3.758,0.806,7.134 c-4.296,3.376-23.832,19.538-36.354,29.783c-12.522,10.246-21.858,21.44-23.904,33.932c-2.045,12.492-0.287,5.591-1.746,14.931 c3.858-0.288,16.543,0.942,24.512,0.942s16.601,1.044,20.585,1.898c3.984,0.854,17.928,4.838,12.236,7.684 C124.013,301.018,118.346,307.932,118.346,307.932L118.346,307.932z");
				
				svg.appendChild(path);







				//=================================================

				//body C

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", carcolor_C);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M230.286,361.525c-4.174-0.025-0.617,5.506,10.63,7.832 c11.246,2.328,28.614,6.799,32.363,8.299c3.749,1.5,12.957,1.154,30.201,1.154s217.64-0.174,232.634-0.174 c14.996,0,26.104,1.652,28.406,2.02c2.303,0.365,4.002,1.311,4.676-1.631c0.676-2.941,2.178-9.236,3.352-12.859 c0.668-2.059-0.748-2.58-3.355-2.58L230.286,361.525L230.286,361.525z");
				
				svg.appendChild(path);




				//=================================================

				//body - bottom center

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");	//highlight	
					path.setAttributeNS(null, "fill", carcolor_A);	//actual
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M253.482,388.67c-3.69-0.01-1.273-1.842,1.407-2.426 c2.68-0.586,18.045-3.627,22.583-3.756c6.546-0.188,263.637-0.02,267.194-0.02c3.559,0,18.279,2.65,19.951,3 c1.674,0.35,3.297,0.336,3.209,1.842l-0.264,2.135L253.482,388.67L253.482,388.67z");
				
				svg.appendChild(path);









				//=================================================

				//body accents

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");		//highlight
					path.setAttributeNS(null, "fill", carcolor_A);	//actual
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M87.703,370.979H64.116c-0.417,0-0.759,1.164-0.759,2.586v0.002 c0,1.424,0.341,2.588,0.759,2.588h23.587c0.417,0,0.758-1.164,0.758-2.588v-0.002C88.461,372.143,88.12,370.979,87.703,370.979 L87.703,370.979z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", carcolor_B);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M706.328,380.195c0,2.967,0.498,8.822,0.498,10.51 c0,2.162-0.238,4.201,2.008,4.201c2.311,0,31.053-0.154,39.125-0.154c1.203,0,0.975-1.861,0.879-3.254 c-0.209-3.047-0.463-7.748-0.688-9.672c-0.352-3.025-0.535-4.346-2.578-3.496c-1.711,0-30.457-0.08-38.049-0.244 C705.758,378.047,706.328,378.373,706.328,380.195L706.328,380.195z");
				
				svg.appendChild(path);




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#EBEBEC");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M712.365,393.402c2.094,0,29.627,0,31.398,0 c1.77,0,3.219-0.67,3.219-2.176c0-1.504-0.322-4.982-0.482-5.984c-0.162-1.004-1.449-2.676-1.449-1.338s-0.16,4.313-0.482,5.316 c-0.322,1.002-2.576,2.342-4.992,2.342s-20.447,0-23.508,0.166C713.01,391.896,712.365,393.402,712.365,393.402L712.365,393.402z");
				
				svg.appendChild(path);




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#FFFFFF");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M706.83,380.854c0,0.988,0.238,0.865,0.834,0 c0.594-0.865,0.713-1.484,1.783-1.484c1.072,0,30.342,0.248,32.127,0.248s3.809,0,4.402,0c0.596,0,0.834-0.742,0-0.742 c-0.832,0-11.898,0-13.326,0s-16.182-0.123-17.49-0.123s-7.496,0-7.496,0L706.83,380.854L706.83,380.854z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", carcolor_A);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M731.365,350.232h19.658c0.857,0,1.559,0.746,1.559,1.658v3.646 c0,0.912-0.701,1.658-1.559,1.658h-19.658c-0.857,0-1.559-0.746-1.559-1.658v-3.646 C729.807,350.979,730.508,350.232,731.365,350.232L731.365,350.232z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", carcolor_C);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M731.709,349.793h19.422c0.85,0,1.543,0.711,1.543,1.58v3.477 c0,0.869-0.693,1.58-1.543,1.58h-19.422c-0.848,0-1.541-0.711-1.541-1.58v-3.477C730.168,350.504,730.861,349.793,731.709,349.793 L731.709,349.793z");
				
				svg.appendChild(path);










				//=========================================================

				//door handle

				//=========================================================


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					//path.setAttributeNS(null, "fill", "#E2E3E4");
					path.setAttributeNS(null, "fill", carcolor_D);
					path.setAttributeNS(null, "stroke", "#BCBEC0");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M328.313,286.208h27.548c0.782,0,1.422,0.831,1.422,1.845v2.537c0,1.015-0.64,1.845-1.422,1.845h-27.548 c-0.782,0-1.422-0.83-1.422-1.845v-2.537C326.891,287.039,327.531,286.208,328.313,286.208L328.313,286.208z");
				
				svg.appendChild(path);


	

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", carcolor_A);
					//path.setAttributeNS(null, "stroke", "#BCBEC0");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M333.29,292.613h22.216c0.684,0,1.244,0.56,1.244,1.244v2.311 c0,0.684-0.56,1.244-1.244,1.244H333.29c-0.685,0-1.244-0.56-1.244-1.244v-2.311C332.045,293.173,332.605,292.613,333.29,292.613 L333.29,292.613z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#BCBEC0");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M328.846,293.324c1.077,0,1.955,0.878,1.955,1.955s-0.878,1.955-1.955,1.955c-1.077,0-1.955-0.878-1.955-1.955 S327.769,293.324,328.846,293.324L328.846,293.324z");
				
				svg.appendChild(path);









				//=================================================

				//REAR BUMPER

				//=================================================

				//------------------------
				// PATH 
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#2E2E2F");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M93.943,389.654H57.212c-0.913,0-1.659-0.746-1.659-1.658v-5.213c0-0.912,0.746-1.66,1.659-1.66h36.731 c0.912,0,1.659,0.748,1.659,1.66v5.213C95.602,388.908,94.855,389.654,93.943,389.654L93.943,389.654z");
				
				svg.appendChild(path);








				//=================================================
				
				//SIDE SKIRT

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#2E2E2F");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M162.57,420.928c29.984,0,54.384-24.4,54.384-54.385 c0-29.908-24.4-54.309-54.384-54.309c-29.832,0-54.232,24.4-54.232,54.309C108.338,396.527,132.739,420.928,162.57,420.928 L162.57,420.928z");
				
				svg.appendChild(path);
				



				//------------------------
				//POLYGON
				//------------------------
				var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
				
					polygon.setAttributeNS(null, "fill-rule", "evenodd");
					polygon.setAttributeNS(null, "clip-rule", "evenodd");
					polygon.setAttributeNS(null, "fill", "#414042");
					polygon.setAttributeNS(null, "stroke", "#000000");
					polygon.setAttributeNS(null, "stroke-width", "0.216");
					polygon.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					polygon.setAttributeNS(null, "points", "227.229,388.484 568.178,388.484 568.178,399.504 227.229,399.504 227.229,388.484");

				svg.appendChild(polygon);












	

			//##################################################################################
			//##################################################################################
			//##################################################################################







			// front window
					






			//##################################################################################
			//##################################################################################
			//##################################################################################


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#58595B");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M428.922,204.617c-4.432-2.347-6.967-2.669-6.689-5.045c14.076,1.819,75.717,35.519,82.092,39.192 c6.377,3.674,43.504,26.298,48.152,28.954c4.648,2.655,11.053,3.501,8.918,4.49c-2.133,0.989-10.273,4.879-18.445,5.405 c-6.127-3.779-13.711-9.666-26.092-18.719c-12.383-9.054-50.662-33.182-60.564-39.393 C446.393,213.291,433.352,206.963,428.922,204.617L428.922,204.617z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");	//highlight	
					path.setAttributeNS(null, "fill", "#808285");	//actual
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M471.035,223.033c22.877,10.96,30.803,15.735,35.186,18.26 c6.377,3.673,43.504,26.298,48.152,28.953c4.648,2.656-1.131,2.541-3.168,2.832c-2.037,0.292-40.98-26.414-48.537-31.068 C483.584,230.253,487.76,232.353,471.035,223.033L471.035,223.033z");
				
				svg.appendChild(path);











			//##################################################################################
			//##################################################################################
			//##################################################################################







			// side windows
					






			//##################################################################################
			//##################################################################################
			//##################################################################################






				//=================================================

				// side window

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_A);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M118.571,238.804c14.325-13.897,23.753-22.027,30.014-27.103 c6.261-5.076,12.698-9.586,20.794-10.736s83.677-4.016,105.662-3.945c21.985,0.071,58.698,0,78.051,0.569 c19.353,0.569,33.37,1.209,42.761,1.921c9.392,0.712,25.298,4.158,35.291,9.534s46.215,27.653,59.748,36.887 s41.932,33.139,41.932,33.139s-57.404-1.139-81.311-1.961c-12.514-0.43-98.349-3.421-179.49-6.331 c-73.888-2.65-144.807-6.787-152.02-7.374C104.866,262.172,104.246,252.702,118.571,238.804L118.571,238.804z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M310.047,201.218l11.565,68.433c0,0,109.39,4.578,130.45,5.147 s35.035,0.964,43.572,1.249c0.223-1.904,1.395-1.402-2.59-2.541c-3.984-1.138-5.977-0.569-5.977-2.561s0-11.669,0-13.376 s0-5.407,0-5.407s-0.596-2.562,1.025-3.278c-4.191-2.725-23.023-15.259-32.617-21.197c-5.975-3.699-21.629-13.945-27.891-16.222 c-6.26-2.276-12.236-6.83-34.151-8.538S310.047,201.218,310.047,201.218L310.047,201.218z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M126.608,238.379c-5.295,6.006-19.084,18.627-2.965,20.388 c16.119,1.761,65.15,4.244,78.425,4.244s73.059,1.806,77.8,1.806c4.741,0,13.411-0.136,12.778-7.405 c-0.632-7.27-5.599-45.106-5.915-49.215c-0.316-4.108-0.632-6.637-9.482-6.637s-61.829,1.225-71.311,1.581 c-9.482,0.355-28.446,1.304-33.187,1.62c-4.741,0.316-14.265,6.442-19.006,9.918C149.004,218.155,131.903,232.373,126.608,238.379 L126.608,238.379z");
				
				svg.appendChild(path);











				//=================================================

				// side window - details

				//=================================================


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#BCBEC0");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M328.509,284.813h27c1.65,0,3,1.306,3,2.901 v8.092c0,1.596-1.35,2.901-3,2.901h-27c-1.65,0-3-1.305-3-2.901v-8.092C325.509,286.119,326.859,284.813,328.509,284.813 L328.509,284.813z");
				
				svg.appendChild(path);




				//------------------------
				//POLYGON
				//------------------------
				var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
				
					polygon.setAttributeNS(null, "fill-rule", "evenodd");
					polygon.setAttributeNS(null, "clip-rule", "evenodd");
					polygon.setAttributeNS(null, "fill", "#58595B");
					//polygon.setAttributeNS(null, "stroke", "#000000");
					//polygon.setAttributeNS(null, "stroke-width", "0.216");
					//polygon.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					polygon.setAttributeNS(null, "points", "928.871,436.504 -129.582,436.504 -129.582,423.223 928.871,423.223 928.871,436.504");

				svg.appendChild(polygon);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M509.492,276.15c2.398,0,8.914,0.19,12.326,0.19c3.414,0,5.879-0.19,3.604-2.276c-2.275-2.085-8.189-6.059-11.035-8.714 c-2.844-2.655-0.883,4.79-2.336,7.317C510.541,275.292,507.094,276.15,509.492,276.15L509.492,276.15z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M490.115,248.944c-1.75,0-2.406,0.657-2.406,3.72c0,3.064,0.219,14.224,0.219,15.318s0.875,1.094,3.281,1.313 c2.408,0.219,4.377,0.219,4.377-1.75c0-1.97,0-10.504,0-13.13s0.219-3.501-1.75-4.377 C491.865,249.163,490.115,248.944,490.115,248.944L490.115,248.944z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#58595B");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M314.743,215.804l9.961,53.718l130.915,0.356l6.049-10.672 c0,0-34.508-25.97-43.758-30.594c-9.25-4.625-25.61-10.673-41.267-11.028C360.987,217.227,314.743,215.804,314.743,215.804 L314.743,215.804z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M446.592,275.616l8.02,0.203c0,0,2.643-7.113,3.861-10.569 c1.221-3.455,1.063-4.795,0.859-5.811s-3.705-2.522-5.939-0.489c-2.236,2.032-8.74,16.666-8.74,16.666H446.592L446.592,275.616z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M330.281,244.161c-1.958-6.149-3.763-6.965-6.69-7.202 c-2.927-0.237-5.532,0.01-5.532,1.906c0,1.525,1.005,10.092,2.202,15.772l2.671,12.675c0.165,0.784,1.882,0.537,2.871,0.537 c2.111,0,3.695,0,6.862,0c3.167,0,3.982-1.389,3.764-3.431C335.718,257.769,332.239,250.31,330.281,244.161L330.281,244.161z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M640.229,420.928c29.982,0,54.383-24.4,54.383-54.385 c0-29.908-24.4-54.309-54.383-54.309c-29.832,0-54.232,24.4-54.232,54.309C585.996,396.527,610.396,420.928,640.229,420.928 L640.229,420.928z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#2E2E2F");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M746.977,398.195h-38.361c-0.953,0-1.732-0.746-1.732-1.658v-5.213c0-0.914,0.779-1.66,1.732-1.66h38.361 c0.953,0,1.732,0.746,1.732,1.66v5.213C748.709,397.449,747.93,398.195,746.977,398.195L746.977,398.195z");
				
				svg.appendChild(path);

















			//##################################################################################
			//##################################################################################
			//##################################################################################







			// lights
					






			//##################################################################################
			//##################################################################################
			//##################################################################################



				//=================================================

				//front light

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "1.0001");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M702.441,312.721 c0,1.572-0.027,9.123,0.037,11c0.064,1.875,0.9,2.998,4.049,2.998c3.146,0,18.094,0,20.35,0s3.008-0.234,1.881-2.367 c-1.129-2.133-6.373-10.617-8.037-12.465c-1.666-1.846-2.057-2.334-4.877-2.334s-8.182-0.111-10.25,0.066 C703.525,309.799,702.441,311.148,702.441,312.721L702.441,312.721z");
				
				svg.appendChild(path);


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#A7A9AC");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M702.441,312.721c0.002,1.572-0.027,9.123,0.037,11 c0.064,1.875,0.9,2.998,4.049,2.998c3.146,0,18.094,0,20.35,0s3.008-0.234,1.881-2.367c-1.129-2.133-6.373-10.617-8.037-12.463 c-1.666-1.848-2.057-2.336-4.877-2.336s-8.182-0.111-10.25,0.066C703.525,309.799,702.441,311.148,702.441,312.721L702.441,312.721z");
				
				svg.appendChild(path);



				var carcolor_A = '#D1D3D4';// white: #D1D3D4
				var carcolor_B = '#FFFF00';// white: #E6E7E8  
				var carcolor_C = '#A7A9AC';// white: #A7A9AC





				//=========================================================

				//front light shadow

				//=========================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#E6E7E8");
					//path.setAttributeNS(null, "stroke", "#C6262E");
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M704.25,313.129c0,3.162-0.316,6.639-0.316,8.219 s1.266,2.844,1.266,2.844l3.16-0.314c0,0-2.529-1.266-2.529-3.479c0-2.211,0-5.688,0-5.688L704.25,313.129L704.25,313.129z");
				
				svg.appendChild(path);




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#D1D3D4");
					path.setAttributeNS(null, "stroke-width", "2.0001");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M708.992,312.498 v7.248 M710.176,311.551v7.248 M732.791,350.699v4.643 M707.57,314.156v7.25");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#E6E7E8");
					//path.setAttributeNS(null, "stroke", carcolor_A);
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M711.268,324.762c3.994,0,8.389,0.15,10.385,0.15 c1.998,0,3.596-0.596,3.596-0.596l-0.398-1.488c0,0-1.6,1.189-4.395,1.189c-2.797,0-7.191,0-7.191,0L711.268,324.762 L711.268,324.762z");
				
				svg.appendChild(path);






				//=================================================

				//back light

				//=================================================

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#6D2B2C");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.5");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M74.423,287.404c1.558,0,6.503,0,7.994,0.135c1.49,0.135,5.284,0.542,6.504,5.691c1.219,5.149,2.303,9.079,2.574,10.975 s2.033,8.4-5.149,8.537c-7.181,0.135-13.278,0.135-15.853,0.135c-2.574,0-2.71-2.033-2.303-5.826 c0.406-3.795,2.71-13.55,2.981-16.26S72.864,287.404,74.423,287.404L74.423,287.404z");
				
				svg.appendChild(path);






				//=========================================================

				//back light shadow

				//=========================================================


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#882E30");
					//path.setAttributeNS(null, "stroke", "#C6262E");
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M72.187,290.656c-0.407,1.219-3.252,15.649-3.252,17.479 c0,1.828-0.813,3.455,1.016,3.455s3.455-1.219,4.268-4.064s1.017-7.317,1.423-10.772s1.22-6.504,1.22-6.504s1.219-1.016-1.017-1.016 C73.61,289.233,72.187,290.656,72.187,290.656L72.187,290.656z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#882E30");
					//path.setAttributeNS(null, "stroke", "#C6262E");
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M85.601,297.16c0,2.032,2.032,12.194,2.032,12.194 s0.61,2.439,2.033,0c1.423-2.438,0.813-4.064,0-6.098c-0.813-2.031-1.22-3.251-1.22-4.877S85.601,297.16,85.601,297.16 L85.601,297.16z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#FC0");
					path.setAttributeNS(null, "fill", "#A92930");
					//path.setAttributeNS(null, "stroke", "#C6262E");
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M77.268,290.859c0,0-1.22,9.756-1.22,11.788 c0,2.033-0.813,7.725-0.813,7.725s2.032,0.406,4.064,0.406c2.033,0,5.691,0,5.691,0s1.22-0.609,0.813-3.658 c-0.406-3.049-1.829-9.756-1.829-11.992s2.236-5.081-0.61-5.081c-2.845,0-3.048-0.203-4.268,0 C77.878,290.249,77.268,290.859,77.268,290.859L77.268,290.859z");
				
				svg.appendChild(path);


















			//##################################################################################
			//##################################################################################
			//##################################################################################







			// beltline
					






			//##################################################################################
			//##################################################################################
			//##################################################################################


				//------------------------
				//POLYGON
				//------------------------
				var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
				
					polygon.setAttributeNS(null, "fill-rule", "evenodd");
					polygon.setAttributeNS(null, "clip-rule", "evenodd");					
					polygon.setAttributeNS(null, "fill", "#222223");
					polygon.setAttributeNS(null, "stroke", "#000000");
					polygon.setAttributeNS(null, "stroke-width", "0.216");
					polygon.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					polygon.setAttributeNS(null, "points", "206.34,334.014 594.572,337.643 596.279,345.803 211.463,342.646 206.34,334.014");

				svg.appendChild(polygon);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#808285");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M119.945,330.338l-70.876-0.367c-1.98,0-5.273-0.391-5.188,1.475c0.085,1.865-0.245,5.605,1.037,6.895s8.148,0.891,10.248,0.891 h63.022L119.945,330.338L119.945,330.338z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#ADAFB2");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M704.701,363.879c0.711,2.465,2.064,5.67,2.059,8.096 c3.193,0.01,35.395,0.107,37.023,0.09c0,0,1.539-0.127,0.785-1.941c-0.191-0.494-0.041-1.023,0.322-1.352 c1.564-2.135,5.215-4.961,2.725-4.961S709.789,363.916,704.701,363.879L704.701,363.879z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#ADAFB2");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M686.045,336.15h62.246c1.98,0,5.273-0.391,5.189,1.475 c-0.086,1.865,1.666,5.59,0.385,6.879c-1.283,1.289-8.148,0.893-10.248,0.893h-51.648L686.045,336.15L686.045,336.15z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", carcolor_A);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "d", "M95.579,343.803H51.323c-0.783,0-1.423,0.641-1.423,1.424l0,0 c0,0.783,0.64,1.424,1.423,1.424h44.255c0.783,0,1.423-0.641,1.423-1.424l0,0C97.002,344.443,96.362,343.803,95.579,343.803 L95.579,343.803z");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#6D6E71");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M549.662,288.524 c3.869,25.628,8.039,59.312-1.332,86.265");
				
				svg.appendChild(path);



				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "1.0001");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M688.67,333.664 h54.293 M201.958,332.008l396.659,3.77 M43.526,328.096l78.951,0.002");
				
				svg.appendChild(path);





				//=================================================

				//colorline

				//=================================================


				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", caraccent_color);
					path.setAttributeNS(null, "stroke-width", "2.0001");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M215.048,336.99 l368.704,3.383 M45.19,332.582l69.366,0.238 M694.248,339.227l57.754,0.238");
				
				svg.appendChild(path);



























			//##################################################################################
			//##################################################################################
			//##################################################################################







			// front wheel
					






			//##################################################################################
			//##################################################################################
			//##################################################################################




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M640.305,349.65c9.324,0,16.93,7.605,16.93,16.932 c0,9.324-7.605,16.93-16.93,16.93c-9.326,0-16.932-7.605-16.932-16.93C623.373,357.256,630.979,349.65,640.305,349.65 L640.305,349.65z");
				
				svg.appendChild(path);



			

				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#6D6E71");
					path.setAttributeNS(null, "stroke-width", "0.7971");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M629.092,352.555 c-0.027-3.268-1.881-10.201-5.119-8.387s-1.104-0.135-4.611,3.252c-4.512,4.352-7.371,10.424-7.371,17.162 c0,3.408,0.182,4.23,1.457,7.148c1.623,2.484,5.57-1.717,9.734-4.361C622.334,365.498,629.119,355.822,629.092,352.555 L629.092,352.555z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					//path.setAttributeNS(null, "stroke", "#6D6E71");
					//path.setAttributeNS(null, "stroke-width", "0.7971");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M629.092,352.555c-0.027-3.268-1.881-10.201-5.119-8.387s-1.104-0.135-4.611,3.252 c-4.512,4.352-7.371,10.424-7.371,17.162c0,3.408,0.182,4.23,1.457,7.148c1.623,2.484,5.57-1.717,9.734-4.361 C622.334,365.498,629.119,355.822,629.092,352.555L629.092,352.555z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M640.262,358.133c0.705,0,1.279,0.574,1.279,1.279s-0.574,1.279-1.279,1.279s-1.279-0.574-1.279-1.279 S639.557,358.133,640.262,358.133L640.262,358.133z");
				
				svg.appendChild(path);




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M640.348,375.029c-0.705,0-1.279-0.574-1.279-1.279s0.574-1.279,1.279-1.279c0.703,0,1.279,0.574,1.279,1.279 S641.051,375.029,640.348,375.029L640.348,375.029z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M648.752,366.539c0,0.703-0.574,1.277-1.279,1.277c-0.703,0-1.277-0.574-1.277-1.277c0-0.705,0.574-1.279,1.277-1.279 C648.178,365.26,648.752,365.834,648.752,366.539L648.752,366.539z");
				
				svg.appendChild(path);







				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M631.855,366.623c0-0.703,0.576-1.277,1.279-1.277c0.705,0,1.279,0.574,1.279,1.277c0,0.705-0.574,1.279-1.279,1.279 C632.432,367.902,631.855,367.328,631.855,366.623L631.855,366.623z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M634.141,360.477c0.586-0.586,1.543-0.586,2.129,0c0.586,0.588,0.586,1.543,0,2.131c-0.586,0.586-1.543,0.586-2.129,0 C633.553,362.02,633.553,361.064,634.141,360.477L634.141,360.477z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M646.469,372.686c-0.586,0.586-1.543,0.586-2.129,0c-0.588-0.588-0.588-1.543,0-2.131c0.586-0.586,1.543-0.586,2.129,0 C647.055,371.143,647.055,372.098,646.469,372.686L646.469,372.686z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M646.408,360.416c0.586,0.588,0.586,1.545,0,2.131s-1.543,0.586-2.129,0c-0.588-0.586-0.588-1.543,0-2.131 C644.865,359.83,645.822,359.83,646.408,360.416L646.408,360.416z");
				
				svg.appendChild(path);




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M634.201,372.746c-0.588-0.588-0.588-1.543,0-2.131c0.586-0.586,1.543-0.586,2.129,0c0.586,0.588,0.586,1.543,0,2.131 C635.744,373.332,634.787,373.332,634.201,372.746L634.201,372.746z");
				
				svg.appendChild(path);













				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M620.033,338.93c3.125-2.277,6.738-4.057,10.439-5.189 c3.549-1.197,6.557,0.209,5.693,4.043s-1.684,7.477-2.539,11.279c-0.428,1.9-1.467,3.467-2.873,4.502 c-1.41,1.027-3.217,1.547-5.16,1.381c-3.883-0.33-7.602-0.646-11.518-0.982c-3.916-0.332-4.35-3.625-2.139-6.646 C614.135,344.129,616.922,341.223,620.033,338.93L620.033,338.93z M660.529,338.898c3.117,2.287,5.908,5.189,8.109,8.373 c2.217,3.02,1.787,6.313-2.127,6.652c-3.916,0.34-7.635,0.662-11.518,1c-1.941,0.168-3.75-0.348-5.162-1.373 c-1.406-1.033-2.449-2.6-2.879-4.5c-0.861-3.801-1.688-7.441-2.557-11.273c-0.869-3.834,2.137-5.244,5.688-4.053 C653.785,334.852,657.402,336.627,660.529,338.898L660.529,338.898z M672.918,377.227c-1.207,3.672-3.1,7.229-5.443,10.311 c-2.182,3.043-5.443,3.656-6.982,0.041c-1.539-3.617-3-7.051-4.525-10.639c-0.764-1.793-0.834-3.672-0.299-5.332 c0.545-1.658,1.709-3.135,3.383-4.135c3.346-1.998,6.549-3.914,9.924-5.93c3.373-2.016,5.648,0.402,5.617,4.146 C674.67,369.561,674.105,373.549,672.918,377.227L672.918,377.227z M640.303,400.902c-3.865-0.01-7.832-0.709-11.486-1.982 c-3.57-1.131-5.166-4.043-2.203-6.625c2.961-2.584,5.775-5.037,8.711-7.6c1.469-1.281,3.234-1.93,4.98-1.936 c1.744,0.006,3.51,0.654,4.979,1.936c2.936,2.563,5.75,5.016,8.711,7.6c2.963,2.582,1.367,5.494-2.203,6.625 C648.137,400.193,644.17,400.893,640.303,400.902L640.303,400.902z M607.666,377.156c-1.178-3.682-1.734-7.67-1.648-11.539 c-0.021-3.746,2.258-6.158,5.627-4.137c3.369,2.023,6.57,3.945,9.91,5.951c1.672,1.004,2.832,2.484,3.373,4.143 c0.533,1.662,0.459,3.541-0.309,5.332c-1.533,3.584-3.002,7.016-4.549,10.629c-1.547,3.611-4.809,2.99-6.982-0.059 C610.752,384.391,608.867,380.83,607.666,377.156L607.666,377.156z M640.305,331.945c19.076,0,34.635,15.559,34.635,34.637 c0,19.076-15.559,34.635-34.635,34.635c-19.078,0-34.637-15.559-34.637-34.635C605.668,347.504,621.227,331.945,640.305,331.945 L640.305,331.945z M640.305,331.326c19.418,0,35.254,15.838,35.254,35.256s-15.836,35.254-35.254,35.254 S605.049,386,605.049,366.582S620.887,331.326,640.305,331.326L640.305,331.326z M640.305,328.936 c20.734,0,37.646,16.912,37.646,37.646s-16.912,37.646-37.646,37.646c-20.736,0-37.646-16.912-37.646-37.646 S619.568,328.936,640.305,328.936L640.305,328.936z M640.305,328.172c21.154,0,38.408,17.254,38.408,38.41 c0,21.154-17.254,38.408-38.408,38.408s-38.41-17.254-38.41-38.408C601.895,345.426,619.15,328.172,640.305,328.172L640.305,328.172 z M640.305,324.551c23.148,0,42.029,18.881,42.029,42.031c0,23.148-18.881,42.029-42.029,42.029 c-23.15,0-42.031-18.881-42.031-42.029C598.273,343.432,617.154,324.551,640.305,324.551L640.305,324.551z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "none");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M640.305,351.465c8.326,0,15.117,6.791,15.117,15.117s-6.791,15.117-15.117,15.117 s-15.117-6.791-15.117-15.117S631.979,351.465,640.305,351.465L640.305,351.465z");
				
				svg.appendChild(path);




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M665.629,358.643l0.021-0.063l0.348-0.143c0.061-0.025,0.076-0.018,0.07-0.002 c-0.006,0.014-0.027,0.037-0.094,0.064L665.629,358.643L665.629,358.643z M662.961,359.744l0.021-0.061l0.346-0.145 c0.061-0.025,0.076-0.018,0.07-0.002c-0.004,0.014-0.027,0.037-0.094,0.064L662.961,359.744L662.961,359.744z M664.426,359.318 c0.141-0.059,0.262-0.156,0.291-0.238c0.031-0.092-0.049-0.104-0.199-0.041c-0.135,0.055-0.256,0.152-0.287,0.24 C664.201,359.363,664.281,359.379,664.426,359.318L664.426,359.318z M662.102,359.127l0.51-0.209 c0.096-0.039,0.133-0.08,0.145-0.105c0.01-0.027-0.01-0.045-0.104-0.006l-0.508,0.209L662.102,359.127L662.102,359.127z M666.232,357.732c0.205-0.084,0.396-0.246,0.453-0.393c0.063-0.162-0.043-0.195-0.266-0.104c-0.197,0.082-0.389,0.242-0.449,0.396 C665.914,357.783,666.02,357.82,666.232,357.732L666.232,357.732z M664.219,358.564c0.205-0.084,0.398-0.248,0.453-0.393 c0.063-0.162-0.043-0.197-0.266-0.105c-0.197,0.082-0.389,0.242-0.449,0.396C663.9,358.613,664.008,358.652,664.219,358.564 L664.219,358.564z M666.793,358.447l0.137-0.395l-0.361,0.148l0.047-0.135l1.098-0.453l-0.047,0.135l-0.361,0.15l-0.139,0.395 L666.793,358.447L666.793,358.447z M661.191,360.623l0.494-0.203c0.021,0.008,0.064,0.004,0.145-0.029 c0.109-0.045,0.137-0.076,0.141-0.088c0.004-0.008-0.002-0.014-0.031-0.008c-0.051,0.012-0.105,0.035-0.16,0.055l-0.066,0.025 c-0.254,0.094-0.393,0.135-0.439,0.1c-0.016-0.01-0.018-0.029-0.01-0.057c0.008-0.02,0.023-0.043,0.045-0.068 c0.037-0.043,0.096-0.094,0.207-0.16c0.064-0.039,0.203-0.113,0.41-0.199c0.162-0.066,0.254-0.096,0.305-0.109 c0.168-0.045,0.223-0.021,0.223,0.033l-0.473,0.195c-0.02-0.012-0.063-0.008-0.145,0.025c-0.113,0.047-0.133,0.072-0.137,0.084 s0.004,0.02,0.078-0.006l0.199-0.072c0.178-0.064,0.26-0.088,0.273-0.092c0.143-0.035,0.186-0.006,0.166,0.057 c-0.027,0.074-0.172,0.23-0.689,0.443c-0.107,0.045-0.217,0.084-0.285,0.104C661.232,360.717,661.178,360.686,661.191,360.623 L661.191,360.623z M667.65,357.957l0.494-0.203c0.02,0.008,0.064,0.004,0.143-0.027c0.109-0.045,0.137-0.078,0.141-0.088 s0-0.016-0.031-0.008c-0.049,0.01-0.105,0.033-0.16,0.055l-0.066,0.023c-0.254,0.094-0.391,0.135-0.438,0.102 c-0.016-0.012-0.02-0.031-0.012-0.057c0.008-0.021,0.023-0.045,0.045-0.07c0.037-0.043,0.096-0.092,0.207-0.158 c0.064-0.041,0.205-0.115,0.41-0.199c0.162-0.068,0.256-0.098,0.305-0.111c0.168-0.043,0.223-0.02,0.223,0.033l-0.473,0.195 c-0.018-0.012-0.063-0.008-0.143,0.027c-0.113,0.045-0.135,0.07-0.139,0.082s0.004,0.021,0.08-0.006l0.197-0.072 c0.178-0.064,0.26-0.088,0.275-0.092c0.143-0.035,0.186-0.004,0.164,0.057c-0.025,0.074-0.172,0.232-0.689,0.445 c-0.105,0.045-0.217,0.084-0.285,0.104C667.689,358.051,667.635,358.021,667.65,357.957L667.65,357.957z M663.836,359.443 c0.027-0.082,0.098-0.178,0.24-0.285c0.088-0.064,0.238-0.154,0.457-0.244c0.26-0.105,0.379-0.135,0.428-0.141 c0.135-0.016,0.189,0.029,0.152,0.137c-0.059,0.17-0.26,0.35-0.723,0.541c-0.23,0.096-0.332,0.121-0.434,0.133 C663.865,359.59,663.795,359.561,663.836,359.443L663.836,359.443z M662.473,360.23l0.373-0.152l0.066-0.197 c0.094-0.039,0.189-0.08,0.283-0.117c0.051-0.021,0.104-0.041,0.156-0.064c0.023-0.012,0.197-0.086,0.293-0.154 c0.078-0.057,0.133-0.117,0.15-0.172c0.023-0.063-0.016-0.092-0.096-0.082c-0.029,0.004-0.088,0.014-0.297,0.102l-0.746,0.307 L662.473,360.23L662.473,360.23z M665.141,359.129l0.373-0.152l0.068-0.199l0.193-0.08l0.148,0.109l0.438-0.18l-0.158-0.115 c0.131-0.07,0.236-0.164,0.264-0.242c0.01-0.027,0.008-0.063-0.025-0.076c-0.064-0.025-0.186,0.021-0.307,0.07 c-0.01,0.004-0.012,0.006-0.063,0.025l-0.748,0.309L665.141,359.129L665.141,359.129z M665.391,357.873 c0.055-0.145,0.172-0.309,0.395-0.484c0.131-0.104,0.359-0.244,0.68-0.377c0.381-0.156,0.553-0.189,0.625-0.195 c0.193-0.012,0.256,0.08,0.184,0.27c-0.117,0.303-0.436,0.602-1.113,0.881c-0.34,0.141-0.49,0.174-0.629,0.182 C665.4,358.146,665.311,358.082,665.391,357.873L665.391,357.873z M663.379,358.705c0.055-0.146,0.172-0.311,0.395-0.484 c0.131-0.105,0.359-0.244,0.68-0.377c0.381-0.158,0.551-0.191,0.623-0.195c0.193-0.012,0.258,0.08,0.184,0.27 c-0.117,0.303-0.436,0.6-1.113,0.881c-0.34,0.139-0.488,0.172-0.627,0.18C663.389,358.979,663.299,358.912,663.379,358.705 L663.379,358.705z M661.326,359.941l0.365-0.941l1.098-0.453c0.309-0.127,0.391-0.137,0.434-0.141 c0.115-0.004,0.16,0.053,0.117,0.164c-0.039,0.098-0.127,0.199-0.248,0.291c-0.145,0.111-0.404,0.223-0.438,0.238 c-0.078,0.035-0.154,0.064-0.23,0.096c-0.139,0.057-0.273,0.113-0.412,0.172l-0.139,0.35L661.326,359.941L661.326,359.941z M667.264,357.492l0.367-0.943l0.594-0.244l0.422,0.219l0.184-0.469l0.555-0.229l-0.365,0.941l-0.592,0.244l-0.424-0.223 l-0.184,0.473L667.264,357.492L667.264,357.492z M661.309,360.068l7.85-3.24l0.023,0.057l-7.85,3.24L661.309,360.068 L661.309,360.068z M657.367,361.797l1.557-0.641c0.057,0.041,0.189,0.037,0.441-0.066c0.344-0.143,0.434-0.252,0.451-0.297 c0.014-0.031,0.004-0.059-0.088-0.043c-0.148,0.027-0.326,0.104-0.498,0.166l-0.205,0.074c-0.803,0.289-1.225,0.404-1.352,0.256 c-0.041-0.047-0.043-0.125-0.01-0.221c0.033-0.08,0.094-0.17,0.166-0.26c0.135-0.158,0.328-0.332,0.688-0.559 c0.213-0.137,0.658-0.381,1.305-0.648c0.516-0.211,0.803-0.301,0.953-0.336c0.52-0.121,0.676-0.014,0.645,0.199l-1.488,0.615 c-0.051-0.049-0.178-0.051-0.436,0.055c-0.357,0.148-0.428,0.24-0.443,0.283c-0.018,0.041-0.002,0.084,0.236,0.002l0.619-0.221 c0.561-0.199,0.805-0.26,0.855-0.271c0.436-0.092,0.555,0.039,0.465,0.27c-0.109,0.285-0.615,0.854-2.244,1.525 c-0.338,0.139-0.682,0.256-0.893,0.316C657.438,362.178,657.297,362.041,657.367,361.797L657.367,361.797z");
				
				svg.appendChild(path);








				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M640.305,352.459c7.777,0,14.121,6.344,14.121,14.123 c0,7.777-6.344,14.121-14.121,14.121c-7.779,0-14.123-6.344-14.123-14.121C626.182,358.803,632.525,352.459,640.305,352.459 L640.305,352.459z M647.615,367.311v-1.469l0.004-0.172l0.008-0.174l0.014-0.17l0.018-0.17l0.023-0.166l0.027-0.162l0.033-0.16 l0.037-0.158l0.043-0.154l0.047-0.15l0.051-0.146l0.055-0.143l0.061-0.139l0.064-0.135l0.068-0.129l0.07-0.127l0.076-0.119 l0.082-0.117l0.084-0.109l0.09-0.105l0.094-0.1l0.096-0.092l0.102-0.088l0.107-0.08l0.109-0.072l0.115-0.064l0.119-0.057 l0.123-0.047l0.127-0.037l0.131-0.027l0.133-0.018l0.125-0.006h1.32l0.125,0.006l0.133,0.018l0.131,0.027l0.125,0.037l0.123,0.047 l0.119,0.057l0.115,0.064l0.111,0.072l0.105,0.08l0.102,0.088l0.098,0.092l0.094,0.1l0.088,0.105l0.086,0.109l0.08,0.117 l0.076,0.119l0.072,0.125l0.068,0.131l0.064,0.135l0.059,0.139l0.055,0.143l0.053,0.146l0.047,0.15l0.041,0.154l0.037,0.156 l0.033,0.162l0.029,0.162l0.023,0.168l0.018,0.168l0.014,0.172l0.008,0.172l0.002,0.174v1.467l-0.002,0.172l-0.008,0.174 l-0.014,0.17l-0.018,0.17l-0.023,0.166l-0.029,0.162l-0.033,0.16l-0.037,0.158l-0.041,0.154l-0.047,0.15l-0.053,0.146l-0.055,0.143 l-0.059,0.139l-0.064,0.135l-0.068,0.131l-0.072,0.125l-0.076,0.119l-0.08,0.117l-0.086,0.109l-0.088,0.105l-0.094,0.1l-0.098,0.092 l-0.102,0.088l-0.105,0.08l-0.111,0.072l-0.115,0.064l-0.117,0.057l-0.125,0.047l-0.125,0.037l-0.131,0.027l-0.133,0.018 l-0.125,0.006h-1.322l-0.125-0.006l-0.131-0.018l-0.131-0.027l-0.127-0.037l-0.123-0.047l-0.119-0.057l-0.115-0.064l-0.109-0.072 l-0.107-0.08l-0.102-0.088l-0.096-0.092l-0.094-0.1l-0.09-0.105l-0.084-0.109l-0.08-0.117l-0.078-0.119l-0.07-0.127l-0.068-0.129 l-0.064-0.135l-0.061-0.139l-0.055-0.143l-0.051-0.146l-0.047-0.15l-0.043-0.154l-0.037-0.158l-0.033-0.16l-0.027-0.162 l-0.023-0.166l-0.018-0.17l-0.014-0.17l-0.008-0.174L647.615,367.311L647.615,367.311z M647.832,367.309v-1.465l0.004-0.166 l0.008-0.168l0.012-0.164l0.018-0.162l0.023-0.16l0.027-0.156l0.031-0.152l0.035-0.15l0.041-0.148l0.045-0.143l0.049-0.139 l0.051-0.137l0.057-0.131l0.061-0.127l0.064-0.123l0.068-0.117l0.07-0.113l0.076-0.107l0.078-0.102l0.082-0.098l0.086-0.09 l0.088-0.086l0.092-0.078l0.096-0.072l0.098-0.064l0.102-0.057l0.105-0.049l0.107-0.043l0.109-0.031l0.113-0.025l0.115-0.014 l0.111-0.006h1.311l0.113,0.006l0.113,0.014l0.113,0.025l0.109,0.031l0.109,0.043l0.104,0.049l0.102,0.057l0.1,0.064l0.094,0.072 l0.094,0.078l0.088,0.086l0.086,0.09l0.082,0.098l0.078,0.102l0.074,0.107l0.072,0.113l0.066,0.117l0.064,0.123l0.061,0.127 l0.057,0.131l0.053,0.137l0.049,0.139l0.045,0.143l0.039,0.148l0.037,0.15l0.031,0.152l0.027,0.156l0.021,0.16l0.018,0.162 l0.014,0.164l0.008,0.168l0.002,0.166v1.465l-0.002,0.166l-0.008,0.168l-0.014,0.164l-0.018,0.162l-0.021,0.16l-0.027,0.156 l-0.031,0.152l-0.037,0.15l-0.039,0.148l-0.045,0.143l-0.049,0.139l-0.053,0.137l-0.057,0.131l-0.061,0.127l-0.064,0.123 l-0.066,0.117l-0.072,0.113l-0.074,0.107l-0.078,0.102l-0.082,0.098l-0.086,0.09l-0.088,0.086l-0.092,0.078l-0.096,0.072l-0.1,0.064 l-0.102,0.057l-0.104,0.049l-0.107,0.043l-0.111,0.031l-0.113,0.025l-0.113,0.014l-0.113,0.006h-1.311l-0.111-0.006l-0.115-0.014 l-0.113-0.025l-0.109-0.031l-0.107-0.043l-0.105-0.049l-0.102-0.057l-0.098-0.064l-0.096-0.072l-0.092-0.078l-0.088-0.086 l-0.086-0.09l-0.082-0.098l-0.078-0.102l-0.076-0.107l-0.07-0.113l-0.068-0.117l-0.064-0.123l-0.061-0.127l-0.057-0.131 l-0.051-0.137l-0.049-0.139l-0.045-0.143l-0.041-0.148l-0.035-0.15l-0.031-0.152l-0.027-0.156l-0.023-0.16l-0.018-0.162 l-0.012-0.164l-0.008-0.168L647.832,367.309L647.832,367.309z M648.051,367.307v-1.461c0-1.74,0.859-3.162,1.908-3.162h1.303 c1.051,0,1.91,1.422,1.91,3.162v1.461c0,1.74-0.859,3.162-1.91,3.162h-1.303C648.91,370.469,648.051,369.047,648.051,367.307 L648.051,367.307z M647.301,357.139c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561s-2.561-1.15-2.561-2.561 S645.891,357.139,647.301,357.139L647.301,357.139z M647.301,357.379c1.277,0,2.32,1.043,2.32,2.32s-1.043,2.32-2.32,2.32 s-2.32-1.043-2.32-2.32S646.023,357.379,647.301,357.379L647.301,357.379z M647.301,357.955c0.961,0,1.744,0.783,1.744,1.744 s-0.783,1.744-1.744,1.744s-1.744-0.783-1.744-1.744S646.34,357.955,647.301,357.955L647.301,357.955z M647.301,370.904 c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561s-2.561-1.15-2.561-2.561S645.891,370.904,647.301,370.904L647.301,370.904z M647.301,371.145c1.277,0,2.32,1.041,2.32,2.32c0,1.277-1.043,2.318-2.32,2.318s-2.32-1.041-2.32-2.318 C644.98,372.186,646.023,371.145,647.301,371.145L647.301,371.145z M647.301,371.721c0.961,0,1.744,0.783,1.744,1.744 s-0.783,1.744-1.744,1.744s-1.744-0.783-1.744-1.744S646.34,371.721,647.301,371.721L647.301,371.721z M633.307,357.139 c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561s-2.559-1.15-2.559-2.561S631.896,357.139,633.307,357.139L633.307,357.139z M633.307,357.379c1.279,0,2.32,1.043,2.32,2.32s-1.041,2.32-2.32,2.32c-1.277,0-2.318-1.043-2.318-2.32 S632.029,357.379,633.307,357.379L633.307,357.379z M633.307,357.955c0.961,0,1.744,0.783,1.744,1.744s-0.783,1.744-1.744,1.744 c-0.959,0-1.744-0.783-1.744-1.744S632.348,357.955,633.307,357.955L633.307,357.955z M633.307,370.904 c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561s-2.559-1.15-2.559-2.561S631.896,370.904,633.307,370.904L633.307,370.904z M633.307,371.145c1.279,0,2.32,1.041,2.32,2.32c0,1.277-1.041,2.318-2.32,2.318c-1.277,0-2.318-1.041-2.318-2.318 C630.988,372.186,632.029,371.145,633.307,371.145L633.307,371.145z M633.307,371.721c0.961,0,1.744,0.783,1.744,1.744 s-0.783,1.744-1.744,1.744c-0.959,0-1.744-0.783-1.744-1.744S632.348,371.721,633.307,371.721L633.307,371.721z M639.586,353.279 h1.469l0.172,0.004l0.174,0.008l0.17,0.014l0.17,0.018l0.166,0.023l0.162,0.027l0.16,0.033l0.158,0.037l0.154,0.043l0.15,0.047 l0.146,0.051l0.143,0.055l0.139,0.061l0.135,0.064l0.129,0.068l0.127,0.072l0.119,0.076l0.117,0.08l0.109,0.084l0.105,0.09 l0.1,0.094l0.092,0.096l0.088,0.104l0.08,0.105l0.072,0.109l0.064,0.115l0.057,0.119l0.047,0.123l0.037,0.127l0.027,0.131 l0.018,0.133l0.006,0.125v1.32l-0.006,0.125l-0.018,0.133l-0.027,0.131l-0.037,0.125l-0.047,0.123l-0.057,0.119l-0.064,0.115 l-0.072,0.111l-0.08,0.105l-0.088,0.102l-0.092,0.098l-0.1,0.094l-0.105,0.088l-0.109,0.086l-0.117,0.08l-0.119,0.076l-0.125,0.072 l-0.131,0.068l-0.135,0.064l-0.139,0.059l-0.143,0.055l-0.146,0.053l-0.15,0.047l-0.154,0.041l-0.158,0.037l-0.16,0.033 l-0.162,0.029l-0.166,0.023l-0.17,0.018l-0.172,0.014l-0.172,0.008l-0.174,0.002h-1.467l-0.172-0.002l-0.174-0.008l-0.17-0.014 l-0.17-0.018l-0.166-0.023l-0.162-0.029l-0.16-0.033l-0.158-0.037l-0.154-0.041l-0.15-0.047l-0.146-0.053l-0.143-0.055l-0.139-0.059 l-0.135-0.064l-0.129-0.068l-0.127-0.072l-0.119-0.076l-0.117-0.08l-0.109-0.086l-0.105-0.088l-0.1-0.094l-0.092-0.098l-0.088-0.102 l-0.08-0.105l-0.072-0.111l-0.064-0.115l-0.057-0.119l-0.047-0.123l-0.037-0.125l-0.027-0.131l-0.018-0.133l-0.006-0.125v-1.322 l0.006-0.123l0.018-0.133l0.027-0.131l0.037-0.127l0.047-0.123l0.057-0.119l0.064-0.113l0.072-0.111l0.08-0.107l0.088-0.102 l0.092-0.096l0.1-0.094l0.105-0.09l0.109-0.084l0.117-0.08l0.119-0.076l0.127-0.072l0.129-0.068l0.135-0.064l0.139-0.061 l0.143-0.055l0.146-0.051l0.15-0.047l0.154-0.043l0.158-0.037l0.16-0.033l0.162-0.027l0.166-0.023l0.17-0.018l0.17-0.014 l0.174-0.008L639.586,353.279L639.586,353.279z M639.588,353.498h1.465l0.166,0.002l0.168,0.008l0.164,0.012l0.162,0.018l0.16,0.023 l0.156,0.027l0.152,0.031l0.15,0.035l0.148,0.041l0.143,0.045l0.139,0.047l0.137,0.053l0.131,0.057l0.127,0.061l0.123,0.064 l0.117,0.068l0.113,0.07l0.107,0.076l0.102,0.078l0.098,0.082l0.09,0.084l0.086,0.09l0.078,0.092l0.072,0.096l0.064,0.098 l0.057,0.102l0.049,0.105l0.043,0.107l0.031,0.111l0.025,0.111l0.014,0.115l0.006,0.111v1.311l-0.006,0.113l-0.014,0.113 l-0.025,0.113l-0.031,0.109l-0.043,0.109l-0.049,0.104l-0.057,0.102l-0.064,0.1l-0.072,0.096l-0.078,0.092l-0.086,0.088l-0.09,0.086 l-0.098,0.082l-0.102,0.078l-0.107,0.074l-0.113,0.072l-0.117,0.068l-0.123,0.063l-0.127,0.061l-0.131,0.057l-0.137,0.053 l-0.139,0.049l-0.145,0.045l-0.146,0.039l-0.15,0.037l-0.152,0.031l-0.156,0.027l-0.16,0.021l-0.162,0.018l-0.164,0.014 l-0.168,0.008l-0.166,0.002h-1.465l-0.166-0.002l-0.168-0.008l-0.164-0.014l-0.162-0.018l-0.158-0.021l-0.158-0.027l-0.152-0.031 l-0.15-0.037l-0.148-0.039l-0.143-0.045l-0.139-0.049l-0.137-0.053l-0.131-0.057l-0.127-0.061l-0.123-0.063l-0.117-0.068 l-0.113-0.072l-0.107-0.074l-0.102-0.078l-0.098-0.082l-0.09-0.086l-0.086-0.088l-0.078-0.092l-0.072-0.096l-0.064-0.1l-0.057-0.102 l-0.049-0.104l-0.043-0.109l-0.031-0.109l-0.025-0.113l-0.014-0.113l-0.006-0.111v-1.313l0.006-0.111l0.014-0.115l0.025-0.111 l0.031-0.111l0.043-0.107l0.049-0.105l0.057-0.102l0.064-0.098l0.072-0.096l0.078-0.092l0.086-0.088l0.09-0.086l0.098-0.082 l0.102-0.078l0.107-0.076l0.113-0.07l0.117-0.068l0.123-0.064l0.127-0.061l0.131-0.057l0.137-0.053l0.139-0.047l0.143-0.045 l0.148-0.041l0.15-0.035l0.152-0.031l0.158-0.027l0.158-0.023l0.162-0.018l0.164-0.012l0.168-0.008L639.588,353.498L639.588,353.498 z M639.59,353.715h1.461c1.74,0,3.162,0.859,3.162,1.908v1.303c0,1.051-1.422,1.91-3.162,1.91h-1.461 c-1.74,0-3.162-0.859-3.162-1.91v-1.303C636.428,354.574,637.85,353.715,639.59,353.715L639.59,353.715z M639.586,373.893h1.469 l0.172,0.004l0.174,0.008l0.17,0.014l0.17,0.018l0.166,0.023l0.162,0.027l0.16,0.033l0.158,0.037l0.154,0.043l0.15,0.047 l0.146,0.051l0.143,0.055l0.139,0.061l0.135,0.064l0.129,0.068l0.127,0.072l0.119,0.076l0.117,0.08l0.109,0.084l0.105,0.09 l0.1,0.094l0.092,0.096l0.088,0.104l0.08,0.105l0.072,0.109l0.064,0.115l0.057,0.119l0.047,0.123l0.037,0.127l0.027,0.131 l0.018,0.133l0.006,0.125v1.32l-0.006,0.125l-0.018,0.133l-0.027,0.131l-0.037,0.125l-0.047,0.123l-0.057,0.119l-0.064,0.115 l-0.072,0.111l-0.08,0.105l-0.088,0.102l-0.092,0.098l-0.1,0.094l-0.105,0.088l-0.109,0.086l-0.117,0.08l-0.119,0.076l-0.125,0.072 l-0.131,0.068l-0.135,0.064l-0.139,0.059l-0.143,0.055l-0.146,0.053l-0.15,0.047l-0.154,0.041l-0.158,0.037l-0.16,0.033 l-0.162,0.029l-0.166,0.021l-0.17,0.02l-0.172,0.014l-0.172,0.008l-0.174,0.002h-1.467l-0.172-0.002l-0.174-0.008l-0.17-0.014 l-0.17-0.02l-0.166-0.021l-0.162-0.029l-0.16-0.033l-0.158-0.037l-0.154-0.041l-0.15-0.047l-0.146-0.053l-0.143-0.055l-0.139-0.059 l-0.135-0.064l-0.129-0.068l-0.127-0.072l-0.119-0.076l-0.117-0.08l-0.109-0.086l-0.105-0.088l-0.1-0.094l-0.092-0.098l-0.088-0.102 l-0.08-0.105l-0.072-0.111l-0.064-0.115l-0.057-0.119l-0.047-0.123l-0.037-0.125l-0.027-0.131l-0.018-0.133l-0.006-0.125v-1.322 l0.006-0.125l0.018-0.133l0.027-0.129l0.037-0.127l0.047-0.123l0.057-0.119l0.064-0.113l0.072-0.111l0.08-0.107l0.088-0.102 l0.092-0.096l0.1-0.094l0.105-0.09l0.109-0.084l0.117-0.08l0.119-0.076l0.127-0.072l0.129-0.068l0.135-0.064l0.139-0.061 l0.143-0.055l0.146-0.051l0.15-0.047l0.154-0.043l0.158-0.037l0.16-0.033l0.162-0.027l0.166-0.023l0.17-0.018l0.17-0.014 l0.174-0.008L639.586,373.893L639.586,373.893z M639.588,374.111h1.465l0.166,0.002l0.168,0.008l0.164,0.012l0.162,0.018l0.16,0.023 l0.156,0.027l0.152,0.031l0.15,0.035l0.148,0.041l0.143,0.045l0.139,0.049l0.137,0.051l0.131,0.057l0.127,0.061l0.123,0.064 l0.117,0.068l0.113,0.07l0.107,0.076l0.102,0.078l0.098,0.082l0.09,0.084l0.086,0.09l0.078,0.092l0.072,0.096l0.064,0.098 l0.057,0.102l0.049,0.105l0.043,0.107l0.031,0.111l0.025,0.111l0.014,0.115l0.006,0.111v1.311l-0.006,0.113l-0.014,0.113 l-0.025,0.113l-0.031,0.109l-0.043,0.109l-0.049,0.104l-0.057,0.102l-0.064,0.1l-0.072,0.096l-0.078,0.092l-0.086,0.088l-0.09,0.086 l-0.098,0.082l-0.102,0.078l-0.107,0.074l-0.113,0.072l-0.117,0.068l-0.123,0.063l-0.127,0.061l-0.131,0.057l-0.137,0.053 l-0.139,0.049l-0.145,0.045l-0.146,0.039l-0.15,0.037l-0.152,0.031l-0.156,0.027l-0.16,0.021l-0.162,0.018l-0.164,0.014 l-0.168,0.008l-0.166,0.002h-1.465l-0.166-0.002l-0.168-0.008l-0.164-0.014l-0.162-0.018l-0.158-0.021l-0.158-0.027l-0.152-0.031 l-0.15-0.037l-0.148-0.039l-0.143-0.045l-0.139-0.049l-0.137-0.053l-0.131-0.057l-0.127-0.061l-0.123-0.063l-0.117-0.068 l-0.113-0.072l-0.107-0.074l-0.102-0.078l-0.098-0.082l-0.09-0.086l-0.086-0.088l-0.078-0.092l-0.072-0.096l-0.064-0.1l-0.057-0.102 l-0.049-0.104l-0.043-0.109l-0.031-0.109l-0.025-0.113l-0.014-0.113l-0.006-0.111v-1.313l0.006-0.111l0.014-0.115l0.025-0.111 l0.031-0.111l0.043-0.107l0.049-0.105l0.057-0.102l0.064-0.098l0.072-0.096l0.078-0.092l0.086-0.088l0.09-0.086l0.098-0.082 l0.102-0.078l0.107-0.076l0.113-0.07l0.117-0.068l0.123-0.064l0.127-0.061l0.131-0.057l0.137-0.051l0.139-0.049l0.143-0.045 l0.148-0.041l0.15-0.035l0.152-0.031l0.158-0.027l0.158-0.023l0.162-0.018l0.164-0.012l0.168-0.008L639.588,374.111L639.588,374.111 z M639.59,374.328h1.461c1.74,0,3.162,0.859,3.162,1.908v1.303c0,1.051-1.422,1.91-3.162,1.91h-1.461 c-1.74,0-3.162-0.859-3.162-1.91v-1.303C636.428,375.188,637.85,374.328,639.59,374.328L639.59,374.328z M627.002,367.311v-1.469 l0.004-0.172l0.008-0.174l0.014-0.17l0.018-0.17l0.023-0.166l0.027-0.162l0.033-0.16l0.037-0.158l0.043-0.154l0.047-0.15 l0.051-0.146l0.055-0.143l0.061-0.139l0.064-0.135l0.068-0.129l0.07-0.127l0.078-0.119l0.08-0.117l0.084-0.109l0.09-0.105l0.092-0.1 l0.098-0.092l0.102-0.088l0.107-0.08l0.111-0.072l0.113-0.064l0.119-0.057l0.123-0.047l0.127-0.037l0.131-0.027l0.133-0.018 l0.125-0.006h1.32l0.125,0.006l0.133,0.018l0.129,0.027l0.127,0.037l0.123,0.047l0.119,0.057l0.115,0.064l0.111,0.072l0.105,0.08 l0.102,0.088l0.098,0.092l0.094,0.1l0.088,0.105l0.086,0.109l0.08,0.117l0.076,0.119l0.072,0.125l0.068,0.131l0.064,0.135 l0.059,0.139l0.057,0.143l0.051,0.146l0.047,0.15l0.041,0.154l0.037,0.156l0.033,0.162l0.029,0.162l0.021,0.168l0.02,0.168 l0.014,0.172l0.008,0.172l0.002,0.174v1.467l-0.002,0.172l-0.008,0.174l-0.014,0.17l-0.02,0.17l-0.021,0.166l-0.029,0.162 l-0.033,0.16l-0.037,0.158l-0.041,0.154l-0.047,0.15l-0.051,0.146l-0.057,0.143l-0.059,0.139l-0.064,0.135l-0.068,0.131 l-0.072,0.125l-0.076,0.119l-0.08,0.117l-0.086,0.109l-0.088,0.105l-0.094,0.1l-0.098,0.092l-0.102,0.088l-0.105,0.08l-0.111,0.072 l-0.115,0.064l-0.117,0.057l-0.125,0.047l-0.127,0.037l-0.129,0.027l-0.133,0.018l-0.125,0.006h-1.322l-0.125-0.006l-0.131-0.018 l-0.131-0.027l-0.127-0.037l-0.123-0.047l-0.119-0.057l-0.113-0.064l-0.111-0.072l-0.107-0.08l-0.102-0.088l-0.096-0.092l-0.094-0.1 l-0.09-0.105l-0.084-0.109l-0.08-0.117l-0.078-0.119l-0.07-0.127l-0.068-0.129l-0.064-0.135l-0.061-0.139l-0.055-0.143l-0.051-0.146 l-0.047-0.15l-0.043-0.154l-0.037-0.158l-0.033-0.16l-0.027-0.162l-0.023-0.166l-0.018-0.17l-0.014-0.17l-0.008-0.174 L627.002,367.311L627.002,367.311z M627.219,367.309v-1.465l0.004-0.166l0.008-0.168l0.012-0.164l0.018-0.162l0.023-0.16 l0.027-0.156l0.031-0.152l0.035-0.15l0.041-0.148l0.045-0.143l0.049-0.139l0.051-0.137l0.057-0.131l0.061-0.127l0.064-0.123 l0.068-0.117l0.07-0.113l0.076-0.107l0.078-0.102l0.082-0.098l0.086-0.09l0.088-0.086l0.092-0.078l0.096-0.072l0.098-0.064 l0.102-0.057l0.105-0.049l0.107-0.043l0.111-0.031l0.111-0.025l0.115-0.014l0.111-0.006h1.311l0.113,0.006l0.113,0.014l0.113,0.025 l0.109,0.031l0.109,0.043l0.104,0.049l0.102,0.057l0.1,0.064l0.094,0.072l0.094,0.078l0.088,0.086l0.086,0.09l0.082,0.098 l0.078,0.102l0.074,0.107l0.072,0.113l0.066,0.117l0.064,0.123l0.061,0.127l0.057,0.131l0.053,0.137l0.049,0.139l0.045,0.143 l0.039,0.148l0.037,0.15l0.031,0.152l0.027,0.156l0.021,0.16l0.018,0.162l0.014,0.164l0.008,0.168l0.002,0.166v1.465l-0.002,0.166 l-0.008,0.168l-0.014,0.164l-0.018,0.162l-0.021,0.16l-0.027,0.156l-0.031,0.152l-0.037,0.15l-0.039,0.148l-0.045,0.143 l-0.049,0.139l-0.053,0.137l-0.057,0.131l-0.061,0.127l-0.064,0.123l-0.066,0.117l-0.072,0.113l-0.074,0.107l-0.078,0.102 l-0.082,0.098l-0.086,0.09l-0.088,0.086l-0.092,0.078l-0.096,0.072l-0.1,0.064l-0.102,0.057l-0.104,0.049l-0.107,0.043l-0.111,0.031 l-0.113,0.025l-0.113,0.014l-0.113,0.006h-1.311l-0.111-0.006l-0.115-0.014l-0.111-0.025l-0.111-0.031l-0.107-0.043l-0.105-0.049 l-0.102-0.057l-0.098-0.064l-0.096-0.072l-0.092-0.078l-0.088-0.086l-0.086-0.09l-0.082-0.098l-0.078-0.102l-0.076-0.107 l-0.07-0.113l-0.068-0.117l-0.064-0.123l-0.061-0.127l-0.057-0.131l-0.051-0.137l-0.049-0.139l-0.045-0.143l-0.041-0.148 l-0.035-0.15l-0.031-0.152l-0.027-0.156l-0.023-0.16l-0.018-0.162l-0.012-0.164l-0.008-0.168L627.219,367.309L627.219,367.309z M627.438,367.307v-1.461c0-1.74,0.859-3.162,1.908-3.162h1.303c1.051,0,1.91,1.422,1.91,3.162v1.461c0,1.74-0.859,3.162-1.91,3.162 h-1.303C628.297,370.469,627.438,369.047,627.438,367.307L627.438,367.307z M640.305,359.684c3.799,0,6.896,3.098,6.896,6.898 c0,3.799-3.098,6.896-6.896,6.896c-3.801,0-6.898-3.098-6.898-6.896C633.406,362.781,636.504,359.684,640.305,359.684 L640.305,359.684z M640.305,360.125c3.555,0,6.455,2.9,6.455,6.457c0,3.555-2.9,6.455-6.455,6.455c-3.557,0-6.457-2.9-6.457-6.455 C633.848,363.025,636.748,360.125,640.305,360.125L640.305,360.125z M640.305,360.572c3.309,0,6.008,2.699,6.008,6.01 c0,3.309-2.699,6.008-6.008,6.008c-3.311,0-6.01-2.699-6.01-6.008C634.295,363.271,636.994,360.572,640.305,360.572L640.305,360.572 z");
				
				svg.appendChild(path);



















							

			//##################################################################################
			//##################################################################################
			//##################################################################################







			// Back wheel
					






			//##################################################################################
			//##################################################################################
			//##################################################################################




				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					//path.setAttributeNS(null, "stroke", carcolor_A);
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M162.646,351.721c8.185,0,14.861,6.676,14.861,14.861 c0,8.184-6.676,14.859-14.861,14.859c-8.186,0-14.861-6.676-14.861-14.859C147.785,358.396,154.461,351.721,162.646,351.721 L162.646,351.721z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#6D6E71");
					path.setAttributeNS(null, "stroke-width", "0.6914");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M151.434,355.199 c-0.023-2.834-1.632-8.85-4.44-7.275c-2.809,1.574-0.957-0.115-4,2.82c-3.913,3.775-6.393,9.043-6.393,14.887 c0,2.957,0.158,3.67,1.264,6.201c1.408,2.154,4.831-1.49,8.442-3.783C145.572,366.426,151.457,358.031,151.434,355.199 L151.434,355.199z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					//path.setAttributeNS(null, "stroke", carcolor_A);
					//path.setAttributeNS(null, "stroke-width", "2.0001");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M151.434,355.199c-0.023-2.834-1.632-8.85-4.44-7.275 c-2.809,1.574-0.957-0.115-4,2.82c-3.913,3.775-6.393,9.043-6.393,14.887c0,2.957,0.158,3.67,1.264,6.201 c1.408,2.154,4.831-1.49,8.442-3.783C145.572,366.426,151.457,358.031,151.434,355.199L151.434,355.199z");
				
				svg.appendChild(path);








				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M162.604,358.133c0.704,0,1.279,0.574,1.279,1.279s-0.575,1.279-1.279,1.279c-0.705,0-1.279-0.574-1.279-1.279 S161.899,358.133,162.604,358.133L162.604,358.133z");
				
				svg.appendChild(path);








				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M162.689,375.029c-0.705,0-1.279-0.574-1.279-1.279s0.574-1.279,1.279-1.279s1.279,0.574,1.279,1.279 S163.394,375.029,162.689,375.029L162.689,375.029z");
				
				svg.appendChild(path);







				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M171.095,366.539c0,0.703-0.575,1.277-1.279,1.277c-0.705,0-1.279-0.574-1.279-1.277c0-0.705,0.575-1.279,1.279-1.279 C170.52,365.26,171.095,365.834,171.095,366.539L171.095,366.539z");
				
				svg.appendChild(path);







				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M154.199,366.623c0-0.703,0.575-1.277,1.279-1.277c0.705,0,1.279,0.574,1.279,1.277c0,0.705-0.575,1.279-1.279,1.279 C154.773,367.902,154.199,367.328,154.199,366.623L154.199,366.623z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M156.482,360.477c0.586-0.586,1.543-0.586,2.129,0c0.586,0.588,0.586,1.543,0,2.131c-0.586,0.586-1.543,0.586-2.129,0 C155.896,362.02,155.896,361.064,156.482,360.477L156.482,360.477z");
				
				svg.appendChild(path);








				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M168.811,372.686c-0.586,0.586-1.543,0.586-2.129,0c-0.586-0.588-0.586-1.543,0-2.131c0.586-0.586,1.543-0.586,2.129,0 C169.397,371.143,169.397,372.098,168.811,372.686L168.811,372.686z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M168.75,360.416c0.586,0.588,0.586,1.545,0,2.131s-1.543,0.586-2.129,0s-0.586-1.543,0-2.131 C167.208,359.83,168.164,359.83,168.75,360.416L168.75,360.416z");
				
				svg.appendChild(path);














				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M142.376,338.93c3.125-2.277,6.737-4.057,10.438-5.189 c3.549-1.197,6.556,0.209,5.692,4.043c-0.862,3.834-1.682,7.477-2.538,11.279c-0.427,1.9-1.468,3.467-2.872,4.502 c-1.411,1.027-3.218,1.547-5.16,1.381c-3.884-0.33-7.603-0.646-11.519-0.982c-3.916-0.332-4.35-3.625-2.138-6.646 C136.477,344.129,139.264,341.223,142.376,338.93L142.376,338.93z M182.873,338.898c3.116,2.287,5.908,5.189,8.109,8.373 c2.216,3.02,1.787,6.313-2.128,6.652c-3.916,0.34-7.634,0.662-11.517,1c-1.941,0.168-3.75-0.348-5.163-1.373 c-1.406-1.033-2.449-2.6-2.879-4.5c-0.862-3.801-1.688-7.441-2.556-11.273c-0.869-3.834,2.136-5.244,5.687-4.053 C176.128,334.852,179.745,336.627,182.873,338.898L182.873,338.898z M195.26,377.227c-1.207,3.672-3.1,7.229-5.443,10.311 c-2.182,3.043-5.444,3.656-6.982,0.041c-1.539-3.617-3-7.051-4.526-10.639c-0.763-1.793-0.834-3.672-0.298-5.332 c0.546-1.658,1.709-3.135,3.383-4.135c3.346-1.998,6.549-3.914,9.923-5.93c3.373-2.016,5.648,0.402,5.618,4.146 C197.013,369.561,196.448,373.549,195.26,377.227L195.26,377.227z M162.646,400.902c-3.865-0.01-7.833-0.709-11.488-1.982 c-3.57-1.131-5.165-4.043-2.203-6.625c2.962-2.584,5.775-5.037,8.712-7.6c1.468-1.281,3.234-1.93,4.979-1.936 c1.745,0.006,3.51,0.654,4.979,1.936c2.938,2.563,5.75,5.016,8.712,7.6c2.962,2.582,1.367,5.494-2.203,6.625 C170.479,400.193,166.511,400.893,162.646,400.902L162.646,400.902z M130.009,377.156c-1.18-3.682-1.736-7.67-1.649-11.539 c-0.022-3.746,2.258-6.158,5.626-4.137c3.37,2.023,6.57,3.945,9.911,5.951c1.671,1.004,2.831,2.484,3.374,4.143 c0.532,1.662,0.458,3.541-0.309,5.332c-1.534,3.584-3.003,7.016-4.549,10.629c-1.546,3.611-4.808,2.99-6.983-0.059 C133.094,384.391,131.209,380.83,130.009,377.156L130.009,377.156z M162.646,331.945c19.077,0,34.636,15.559,34.636,34.637 c0,19.076-15.559,34.635-34.636,34.635s-34.636-15.559-34.636-34.635C128.01,347.504,143.57,331.945,162.646,331.945 L162.646,331.945z M162.646,331.326c19.417,0,35.255,15.838,35.255,35.256s-15.837,35.254-35.255,35.254 c-19.418,0-35.255-15.836-35.255-35.254S143.229,331.326,162.646,331.326L162.646,331.326z M162.646,328.936 c20.734,0,37.646,16.912,37.646,37.646s-16.912,37.646-37.646,37.646c-20.735,0-37.646-16.912-37.646-37.646 S141.912,328.936,162.646,328.936L162.646,328.936z M162.646,328.172c21.155,0,38.409,17.254,38.409,38.41 c0,21.154-17.254,38.408-38.409,38.408s-38.409-17.254-38.409-38.408C124.238,345.426,141.492,328.172,162.646,328.172 L162.646,328.172z M162.646,324.551c23.149,0,42.03,18.881,42.03,42.031c0,23.148-18.881,42.029-42.03,42.029 s-42.03-18.881-42.03-42.029C120.616,343.432,139.497,324.551,162.646,324.551L162.646,324.551z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M162.646,351.465c8.326,0,15.117,6.791,15.117,15.117s-6.791,15.117-15.117,15.117 c-8.326,0-15.117-6.791-15.117-15.117S154.32,351.465,162.646,351.465L162.646,351.465z");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					//path.setAttributeNS(null, "fill", carcolor_B);
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M187.972,358.643l0.021-0.063l0.346-0.143c0.061-0.025,0.077-0.018,0.072-0.002 c-0.006,0.014-0.029,0.037-0.096,0.064L187.972,358.643L187.972,358.643z M185.302,359.744l0.021-0.061l0.346-0.145 c0.062-0.025,0.077-0.018,0.071-0.002c-0.004,0.014-0.029,0.037-0.093,0.064L185.302,359.744L185.302,359.744z M186.769,359.318 c0.14-0.059,0.261-0.156,0.29-0.238c0.031-0.092-0.048-0.104-0.2-0.041c-0.135,0.055-0.256,0.152-0.286,0.24 C186.543,359.363,186.625,359.379,186.769,359.318L186.769,359.318z M184.445,359.127l0.509-0.209 c0.095-0.039,0.133-0.08,0.144-0.105c0.009-0.027-0.009-0.045-0.102-0.006l-0.509,0.209L184.445,359.127L184.445,359.127z M188.575,357.732c0.206-0.084,0.397-0.246,0.454-0.393c0.063-0.162-0.044-0.195-0.266-0.104c-0.199,0.082-0.39,0.242-0.451,0.396 C188.256,357.783,188.362,357.82,188.575,357.732L188.575,357.732z M186.562,358.564c0.206-0.084,0.397-0.248,0.453-0.393 c0.063-0.162-0.043-0.197-0.266-0.105c-0.199,0.082-0.39,0.242-0.45,0.396C186.243,358.613,186.349,358.652,186.562,358.564 L186.562,358.564z M189.135,358.447l0.137-0.395l-0.362,0.148l0.047-0.135l1.098-0.453l-0.046,0.135l-0.363,0.15l-0.137,0.395 L189.135,358.447L189.135,358.447z M183.534,360.623l0.494-0.203c0.021,0.008,0.064,0.004,0.145-0.029 c0.109-0.045,0.136-0.076,0.141-0.088c0.003-0.008-0.001-0.014-0.031-0.008c-0.05,0.012-0.105,0.035-0.16,0.055l-0.067,0.025 c-0.254,0.094-0.392,0.135-0.439,0.1c-0.015-0.01-0.019-0.029-0.01-0.057c0.007-0.02,0.022-0.043,0.044-0.068 c0.038-0.043,0.097-0.094,0.207-0.16c0.065-0.039,0.205-0.113,0.41-0.199c0.163-0.066,0.255-0.096,0.304-0.109 c0.169-0.045,0.223-0.021,0.223,0.033l-0.473,0.195c-0.018-0.012-0.061-0.008-0.143,0.025c-0.113,0.047-0.133,0.072-0.137,0.084 c-0.004,0.012,0.003,0.02,0.079-0.006l0.198-0.072c0.179-0.064,0.259-0.088,0.274-0.092c0.144-0.035,0.186-0.006,0.165,0.057 c-0.025,0.074-0.171,0.23-0.688,0.443c-0.108,0.045-0.219,0.084-0.286,0.104C183.575,360.717,183.52,360.686,183.534,360.623 L183.534,360.623z M189.993,357.957l0.494-0.203c0.021,0.008,0.064,0.004,0.143-0.027c0.109-0.045,0.137-0.078,0.141-0.088 c0.003-0.01,0-0.016-0.031-0.008c-0.049,0.01-0.106,0.033-0.16,0.055l-0.067,0.023c-0.254,0.094-0.392,0.135-0.438,0.102 c-0.016-0.012-0.019-0.031-0.011-0.057c0.007-0.021,0.023-0.045,0.045-0.07c0.038-0.043,0.096-0.092,0.207-0.158 c0.065-0.041,0.205-0.115,0.41-0.199c0.163-0.068,0.255-0.098,0.305-0.111c0.167-0.043,0.223-0.02,0.222,0.033l-0.473,0.195 c-0.018-0.012-0.061-0.008-0.143,0.027c-0.113,0.045-0.133,0.07-0.137,0.082s0.003,0.021,0.079-0.006l0.199-0.072 c0.178-0.064,0.259-0.088,0.273-0.092c0.143-0.035,0.187-0.004,0.166,0.057c-0.026,0.074-0.172,0.232-0.689,0.445 c-0.107,0.045-0.218,0.084-0.286,0.104C190.032,358.051,189.978,358.021,189.993,357.957L189.993,357.957z M186.178,359.443 c0.028-0.082,0.097-0.178,0.241-0.285c0.087-0.064,0.238-0.154,0.457-0.244c0.259-0.105,0.378-0.135,0.427-0.141 c0.136-0.016,0.19,0.029,0.153,0.137c-0.06,0.17-0.261,0.35-0.723,0.541c-0.23,0.096-0.333,0.121-0.434,0.133 C186.208,359.59,186.137,359.561,186.178,359.443L186.178,359.443z M184.814,360.23l0.373-0.152l0.067-0.197 c0.093-0.039,0.188-0.08,0.283-0.117c0.051-0.021,0.103-0.041,0.156-0.064c0.024-0.012,0.198-0.086,0.293-0.154 c0.078-0.057,0.132-0.117,0.151-0.172c0.022-0.063-0.016-0.092-0.097-0.082c-0.03,0.004-0.087,0.014-0.297,0.102l-0.746,0.307 L184.814,360.23L184.814,360.23z M187.483,359.129l0.373-0.152l0.068-0.199l0.193-0.08l0.147,0.109l0.438-0.18l-0.158-0.115 c0.132-0.07,0.236-0.164,0.263-0.242c0.01-0.027,0.009-0.063-0.024-0.076c-0.065-0.025-0.186,0.021-0.307,0.07 c-0.01,0.004-0.012,0.006-0.063,0.025l-0.747,0.309L187.483,359.129L187.483,359.129z M187.733,357.873 c0.056-0.145,0.171-0.309,0.396-0.484c0.131-0.104,0.359-0.244,0.68-0.377c0.38-0.156,0.551-0.189,0.624-0.195 c0.193-0.012,0.256,0.08,0.184,0.27c-0.118,0.303-0.437,0.602-1.114,0.881c-0.339,0.141-0.489,0.174-0.628,0.182 C187.742,358.146,187.652,358.082,187.733,357.873L187.733,357.873z M185.721,358.705c0.056-0.146,0.171-0.311,0.395-0.484 c0.132-0.105,0.359-0.244,0.68-0.377c0.38-0.158,0.551-0.191,0.623-0.195c0.193-0.012,0.258,0.08,0.185,0.27 c-0.119,0.303-0.436,0.6-1.115,0.881c-0.339,0.139-0.487,0.172-0.626,0.18C185.73,358.979,185.641,358.912,185.721,358.705 L185.721,358.705z M183.669,359.941l0.366-0.941l1.097-0.453c0.308-0.127,0.391-0.137,0.433-0.141 c0.116-0.004,0.16,0.053,0.118,0.164c-0.04,0.098-0.126,0.199-0.25,0.291c-0.143,0.111-0.403,0.223-0.437,0.238 c-0.078,0.035-0.153,0.064-0.23,0.096c-0.139,0.057-0.274,0.113-0.413,0.172l-0.138,0.35L183.669,359.941L183.669,359.941z M189.607,357.492l0.366-0.943l0.594-0.244l0.422,0.219l0.183-0.469l0.556-0.229l-0.366,0.941l-0.592,0.244l-0.423-0.223 l-0.183,0.473L189.607,357.492L189.607,357.492z M183.651,360.068l7.85-3.24l0.023,0.057l-7.85,3.24L183.651,360.068 L183.651,360.068z M179.71,361.797l1.555-0.641c0.056,0.041,0.191,0.037,0.441-0.066c0.345-0.143,0.436-0.252,0.453-0.297 c0.012-0.031,0.003-0.059-0.088-0.043c-0.15,0.027-0.327,0.104-0.499,0.166l-0.206,0.074c-0.803,0.289-1.225,0.404-1.352,0.256 c-0.041-0.047-0.043-0.125-0.01-0.221c0.032-0.08,0.095-0.17,0.167-0.26c0.135-0.158,0.329-0.332,0.687-0.559 c0.213-0.137,0.659-0.381,1.305-0.648c0.516-0.211,0.802-0.301,0.954-0.336c0.519-0.121,0.676-0.014,0.645,0.199l-1.49,0.615 c-0.05-0.049-0.176-0.051-0.434,0.055c-0.358,0.148-0.429,0.24-0.445,0.283c-0.017,0.041-0.001,0.084,0.237,0.002l0.619-0.221 c0.561-0.199,0.805-0.26,0.856-0.271c0.436-0.092,0.554,0.039,0.464,0.27c-0.11,0.285-0.615,0.854-2.244,1.525 c-0.338,0.139-0.682,0.256-0.893,0.316C179.781,362.178,179.64,362.041,179.71,361.797L179.71,361.797z");
				
				svg.appendChild(path);





				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#414042");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M162.646,352.459c7.778,0,14.122,6.344,14.122,14.123 c0,7.777-6.344,14.121-14.122,14.121c-7.779,0-14.122-6.344-14.122-14.121C148.524,358.803,154.868,352.459,162.646,352.459 L162.646,352.459z M169.958,367.311v-1.469l0.003-0.172l0.008-0.174l0.013-0.17l0.018-0.17l0.023-0.166l0.028-0.162l0.033-0.16 l0.037-0.158l0.042-0.154l0.047-0.15l0.051-0.146l0.055-0.143l0.06-0.139l0.064-0.135l0.068-0.129l0.072-0.127l0.076-0.119 l0.081-0.117l0.085-0.109l0.088-0.105l0.093-0.1l0.098-0.092l0.102-0.088l0.106-0.08l0.111-0.072l0.115-0.064l0.119-0.057 l0.123-0.047l0.126-0.037l0.13-0.027l0.133-0.018l0.125-0.006h1.32l0.125,0.006l0.132,0.018l0.13,0.027l0.126,0.037l0.123,0.047 l0.119,0.057l0.115,0.064l0.11,0.072l0.106,0.08l0.102,0.088l0.098,0.092l0.093,0.1l0.089,0.105l0.085,0.109l0.081,0.117 l0.076,0.119l0.072,0.125l0.068,0.131l0.064,0.135l0.06,0.139l0.056,0.143l0.051,0.146l0.046,0.15l0.042,0.154l0.038,0.156 l0.032,0.162l0.028,0.162l0.023,0.168l0.018,0.168l0.013,0.172l0.008,0.172l0.002,0.174v1.467l-0.002,0.172l-0.008,0.174 l-0.013,0.17l-0.019,0.17l-0.023,0.166l-0.028,0.162l-0.032,0.16l-0.038,0.158l-0.042,0.154l-0.046,0.15l-0.051,0.146l-0.056,0.143 l-0.06,0.139l-0.064,0.135l-0.068,0.131l-0.072,0.125l-0.076,0.119l-0.081,0.117l-0.085,0.109l-0.089,0.105l-0.093,0.1l-0.097,0.092 l-0.102,0.088l-0.106,0.08l-0.111,0.072l-0.115,0.064l-0.119,0.057l-0.123,0.047l-0.127,0.037l-0.13,0.027l-0.133,0.018 l-0.125,0.006h-1.322l-0.125-0.006l-0.133-0.018l-0.13-0.027l-0.126-0.037l-0.124-0.047l-0.119-0.057l-0.115-0.064l-0.111-0.072 l-0.106-0.08l-0.102-0.088l-0.097-0.092l-0.093-0.1l-0.089-0.105l-0.085-0.109l-0.08-0.117l-0.077-0.119l-0.072-0.127l-0.068-0.129 l-0.064-0.135l-0.06-0.139l-0.055-0.143l-0.051-0.146l-0.047-0.15l-0.042-0.154l-0.037-0.158l-0.033-0.16l-0.028-0.162L170,367.996 l-0.018-0.17l-0.013-0.17l-0.008-0.174L169.958,367.311L169.958,367.311z M170.175,367.309v-1.465l0.003-0.166l0.007-0.168 l0.013-0.164l0.018-0.162l0.022-0.16l0.027-0.156l0.032-0.152l0.036-0.15l0.041-0.148l0.044-0.143l0.049-0.139l0.053-0.137 l0.057-0.131l0.06-0.127l0.064-0.123l0.067-0.117l0.071-0.113l0.075-0.107l0.079-0.102l0.082-0.098l0.085-0.09l0.089-0.086 l0.092-0.078l0.095-0.072l0.099-0.064l0.102-0.057l0.105-0.049l0.107-0.043l0.11-0.031l0.113-0.025l0.115-0.014l0.111-0.006h1.312 l0.112,0.006l0.114,0.014l0.113,0.025l0.11,0.031l0.107,0.043l0.105,0.049l0.102,0.057l0.099,0.064l0.095,0.072l0.092,0.078 l0.089,0.086l0.085,0.09l0.082,0.098l0.079,0.102l0.075,0.107l0.071,0.113l0.068,0.117l0.064,0.123l0.061,0.127l0.057,0.131 l0.052,0.137l0.049,0.139l0.044,0.143l0.04,0.148l0.036,0.15l0.031,0.152l0.027,0.156l0.022,0.16l0.018,0.162l0.012,0.164 l0.008,0.168l0.002,0.166v1.465l-0.002,0.166l-0.008,0.168l-0.012,0.164l-0.018,0.162l-0.022,0.16l-0.027,0.156l-0.031,0.152 l-0.036,0.15l-0.04,0.148l-0.044,0.143l-0.049,0.139l-0.052,0.137l-0.057,0.131l-0.061,0.127l-0.064,0.123l-0.068,0.117 l-0.071,0.113l-0.075,0.107l-0.079,0.102l-0.082,0.098l-0.085,0.09l-0.089,0.086l-0.092,0.078l-0.095,0.072l-0.099,0.064 l-0.102,0.057l-0.105,0.049l-0.107,0.043l-0.11,0.031l-0.113,0.025l-0.114,0.014l-0.112,0.006h-1.312l-0.111-0.006l-0.115-0.014 l-0.113-0.025l-0.11-0.031l-0.107-0.043l-0.105-0.049l-0.101-0.057l-0.099-0.064l-0.095-0.072l-0.092-0.078l-0.088-0.086 l-0.085-0.09l-0.082-0.098l-0.079-0.102l-0.075-0.107l-0.071-0.113l-0.067-0.117l-0.064-0.123l-0.06-0.127l-0.057-0.131 l-0.053-0.137l-0.049-0.139l-0.044-0.143l-0.041-0.148l-0.036-0.15l-0.032-0.152l-0.027-0.156l-0.022-0.16l-0.018-0.162 l-0.013-0.164l-0.007-0.168L170.175,367.309L170.175,367.309z M170.393,367.307v-1.461c0-1.74,0.859-3.162,1.909-3.162h1.302 c1.05,0,1.91,1.422,1.91,3.162v1.461c0,1.74-0.859,3.162-1.91,3.162h-1.302C171.252,370.469,170.393,369.047,170.393,367.307 L170.393,367.307z M169.643,357.139c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561s-2.561-1.15-2.561-2.561 S168.233,357.139,169.643,357.139L169.643,357.139z M169.643,357.379c1.278,0,2.32,1.043,2.32,2.32s-1.042,2.32-2.32,2.32 s-2.32-1.043-2.32-2.32S168.365,357.379,169.643,357.379L169.643,357.379z M169.643,357.955c0.96,0,1.744,0.783,1.744,1.744 s-0.784,1.744-1.744,1.744c-0.961,0-1.744-0.783-1.744-1.744S168.682,357.955,169.643,357.955L169.643,357.955z M169.643,370.904 c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561s-2.561-1.15-2.561-2.561S168.233,370.904,169.643,370.904L169.643,370.904z M169.643,371.145c1.278,0,2.32,1.041,2.32,2.32c0,1.277-1.042,2.318-2.32,2.318s-2.32-1.041-2.32-2.318 C167.323,372.186,168.365,371.145,169.643,371.145L169.643,371.145z M169.643,371.721c0.96,0,1.744,0.783,1.744,1.744 s-0.784,1.744-1.744,1.744c-0.961,0-1.744-0.783-1.744-1.744S168.682,371.721,169.643,371.721L169.643,371.721z M155.65,357.139 c1.41,0,2.561,1.15,2.561,2.561s-1.15,2.561-2.561,2.561c-1.411,0-2.561-1.15-2.561-2.561S154.239,357.139,155.65,357.139 L155.65,357.139z M155.65,357.379c1.278,0,2.32,1.043,2.32,2.32s-1.042,2.32-2.32,2.32c-1.278,0-2.32-1.043-2.32-2.32 S154.372,357.379,155.65,357.379L155.65,357.379z M155.65,357.955c0.96,0,1.744,0.783,1.744,1.744s-0.784,1.744-1.744,1.744 c-0.961,0-1.744-0.783-1.744-1.744S154.689,357.955,155.65,357.955L155.65,357.955z M155.65,370.904c1.41,0,2.561,1.15,2.561,2.561 s-1.15,2.561-2.561,2.561c-1.411,0-2.561-1.15-2.561-2.561S154.239,370.904,155.65,370.904L155.65,370.904z M155.65,371.145 c1.278,0,2.32,1.041,2.32,2.32c0,1.277-1.042,2.318-2.32,2.318c-1.278,0-2.32-1.041-2.32-2.318 C153.33,372.186,154.372,371.145,155.65,371.145L155.65,371.145z M155.65,371.721c0.96,0,1.744,0.783,1.744,1.744 s-0.784,1.744-1.744,1.744c-0.961,0-1.744-0.783-1.744-1.744S154.689,371.721,155.65,371.721L155.65,371.721z M161.929,353.279 h1.467l0.172,0.004l0.174,0.008l0.171,0.014l0.169,0.018l0.166,0.023l0.163,0.027l0.161,0.033l0.157,0.037l0.154,0.043l0.15,0.047 l0.147,0.051l0.143,0.055l0.139,0.061l0.135,0.064l0.13,0.068l0.125,0.072l0.121,0.076l0.116,0.08l0.11,0.084l0.105,0.09l0.1,0.094 l0.092,0.096l0.087,0.104l0.08,0.105l0.073,0.109l0.065,0.115l0.056,0.119l0.047,0.123l0.038,0.127l0.027,0.131l0.017,0.133 l0.005,0.125v1.32l-0.005,0.125l-0.017,0.133l-0.027,0.131l-0.038,0.125l-0.047,0.123l-0.056,0.119l-0.065,0.115l-0.073,0.111 l-0.08,0.105l-0.087,0.102l-0.093,0.098l-0.1,0.094l-0.104,0.088l-0.111,0.086l-0.116,0.08l-0.121,0.076l-0.125,0.072l-0.13,0.068 l-0.135,0.064l-0.139,0.059l-0.143,0.055l-0.147,0.053l-0.15,0.047l-0.154,0.041l-0.157,0.037l-0.16,0.033l-0.164,0.029 l-0.167,0.023l-0.168,0.018l-0.171,0.014l-0.173,0.008l-0.172,0.002h-1.467l-0.172-0.002l-0.173-0.008l-0.171-0.014l-0.169-0.018 l-0.166-0.023l-0.164-0.029l-0.16-0.033l-0.158-0.037l-0.153-0.041l-0.15-0.047l-0.147-0.053l-0.143-0.055l-0.139-0.059 l-0.134-0.064l-0.13-0.068l-0.125-0.072l-0.121-0.076l-0.116-0.08l-0.11-0.086l-0.105-0.088l-0.099-0.094l-0.093-0.098l-0.087-0.102 l-0.08-0.105l-0.073-0.111l-0.064-0.115l-0.057-0.119l-0.047-0.123l-0.038-0.125l-0.028-0.131l-0.017-0.133l-0.005-0.125v-1.322 l0.005-0.123l0.017-0.133l0.028-0.131l0.038-0.127l0.047-0.123l0.057-0.119l0.064-0.113l0.073-0.111l0.08-0.107l0.086-0.102 l0.093-0.096l0.099-0.094l0.105-0.09l0.11-0.084l0.116-0.08l0.121-0.076l0.125-0.072l0.13-0.068l0.134-0.064l0.139-0.061 l0.143-0.055l0.147-0.051l0.15-0.047l0.154-0.043l0.158-0.037l0.16-0.033l0.163-0.027l0.166-0.023l0.169-0.018l0.171-0.014 l0.173-0.008L161.929,353.279L161.929,353.279z M161.931,353.498h1.464l0.167,0.002l0.167,0.008l0.165,0.012l0.162,0.018 l0.159,0.023l0.157,0.027l0.154,0.031l0.15,0.035l0.147,0.041l0.143,0.045l0.14,0.047l0.135,0.053l0.132,0.057l0.127,0.061 l0.123,0.064l0.118,0.068l0.113,0.07l0.107,0.076l0.103,0.078l0.097,0.082l0.091,0.084l0.084,0.09l0.079,0.092l0.071,0.096 l0.065,0.098l0.057,0.102l0.05,0.105l0.042,0.107l0.033,0.111l0.024,0.111l0.014,0.115l0.005,0.111v1.311l-0.005,0.113l-0.014,0.113 l-0.024,0.113l-0.033,0.109l-0.042,0.109l-0.05,0.104l-0.057,0.102l-0.065,0.1l-0.071,0.096l-0.079,0.092l-0.084,0.088l-0.091,0.086 l-0.096,0.082l-0.103,0.078l-0.107,0.074l-0.113,0.072l-0.118,0.068l-0.123,0.063l-0.127,0.061l-0.132,0.057l-0.135,0.053 l-0.14,0.049l-0.144,0.045l-0.147,0.039l-0.15,0.037l-0.153,0.031l-0.157,0.027l-0.159,0.021l-0.162,0.018l-0.165,0.014 l-0.167,0.008l-0.168,0.002h-1.463l-0.167-0.002l-0.167-0.008l-0.165-0.014l-0.162-0.018l-0.159-0.021l-0.157-0.027l-0.153-0.031 l-0.15-0.037l-0.147-0.039l-0.144-0.045l-0.139-0.049l-0.136-0.053l-0.131-0.057l-0.127-0.061l-0.123-0.063l-0.117-0.068 l-0.113-0.072l-0.107-0.074l-0.102-0.078l-0.097-0.082l-0.09-0.086l-0.084-0.088l-0.079-0.092l-0.072-0.096l-0.065-0.1l-0.057-0.102 l-0.049-0.104l-0.042-0.109l-0.033-0.109l-0.024-0.113l-0.014-0.113l-0.005-0.111v-1.313l0.005-0.111l0.014-0.115l0.024-0.111 l0.033-0.111l0.042-0.107l0.049-0.105l0.057-0.102l0.065-0.098l0.072-0.096l0.079-0.092l0.084-0.088l0.091-0.086l0.097-0.082 l0.102-0.078l0.107-0.076l0.113-0.07l0.118-0.068l0.123-0.064l0.127-0.061l0.131-0.057l0.136-0.053l0.139-0.047l0.144-0.045 l0.147-0.041l0.15-0.035l0.153-0.031l0.157-0.027l0.159-0.023l0.162-0.018l0.165-0.012l0.167-0.008L161.931,353.498L161.931,353.498 z M161.932,353.715h1.461c1.739,0,3.163,0.859,3.163,1.908v1.303c0,1.051-1.423,1.91-3.163,1.91h-1.461 c-1.74,0-3.163-0.859-3.163-1.91v-1.303C158.769,354.574,160.192,353.715,161.932,353.715L161.932,353.715z M161.929,373.893h1.467 l0.172,0.004l0.174,0.008l0.171,0.014l0.169,0.018l0.166,0.023l0.163,0.027l0.161,0.033l0.157,0.037l0.154,0.043l0.15,0.047 l0.147,0.051l0.143,0.055l0.139,0.061l0.135,0.064l0.13,0.068l0.125,0.072l0.121,0.076l0.116,0.08l0.11,0.084l0.105,0.09l0.1,0.094 l0.092,0.096l0.087,0.104l0.08,0.105l0.073,0.109l0.065,0.115l0.056,0.119l0.047,0.123l0.038,0.127l0.027,0.131l0.017,0.133 l0.005,0.125v1.32l-0.005,0.125l-0.017,0.133l-0.027,0.131l-0.038,0.125l-0.047,0.123l-0.056,0.119l-0.065,0.115l-0.073,0.111 l-0.08,0.105l-0.087,0.102l-0.093,0.098l-0.1,0.094l-0.104,0.088l-0.111,0.086l-0.116,0.08l-0.121,0.076l-0.125,0.072l-0.13,0.068 l-0.135,0.064l-0.139,0.059l-0.143,0.055l-0.147,0.053l-0.15,0.047l-0.154,0.041l-0.157,0.037l-0.16,0.033l-0.164,0.029 l-0.167,0.021l-0.168,0.02l-0.171,0.014l-0.173,0.008l-0.172,0.002h-1.467l-0.172-0.002l-0.173-0.008l-0.171-0.014l-0.169-0.02 l-0.166-0.021l-0.164-0.029l-0.16-0.033l-0.158-0.037l-0.153-0.041l-0.15-0.047l-0.147-0.053l-0.143-0.055l-0.139-0.059 l-0.134-0.064l-0.13-0.068l-0.125-0.072l-0.121-0.076l-0.116-0.08l-0.11-0.086l-0.105-0.088l-0.099-0.094l-0.093-0.098l-0.087-0.102 l-0.08-0.105l-0.073-0.111l-0.064-0.115l-0.057-0.119l-0.047-0.123l-0.038-0.125l-0.028-0.131l-0.017-0.133l-0.005-0.125v-1.322 l0.005-0.125l0.017-0.133l0.028-0.129l0.038-0.127l0.047-0.123l0.057-0.119l0.064-0.113l0.073-0.111l0.08-0.107l0.086-0.102 l0.093-0.096l0.099-0.094l0.105-0.09l0.11-0.084l0.116-0.08l0.121-0.076l0.125-0.072l0.13-0.068l0.134-0.064l0.139-0.061 l0.143-0.055l0.147-0.051l0.15-0.047l0.154-0.043l0.158-0.037l0.16-0.033l0.163-0.027l0.166-0.023l0.169-0.018l0.171-0.014 l0.173-0.008L161.929,373.893L161.929,373.893z M161.931,374.111h1.464l0.167,0.002l0.167,0.008l0.165,0.012l0.162,0.018 l0.159,0.023l0.157,0.027l0.154,0.031l0.15,0.035l0.147,0.041l0.143,0.045l0.14,0.049l0.135,0.051l0.132,0.057l0.127,0.061 l0.123,0.064l0.118,0.068l0.113,0.07l0.107,0.076l0.103,0.078l0.097,0.082l0.091,0.084l0.084,0.09l0.079,0.092l0.071,0.096 l0.065,0.098l0.057,0.102l0.05,0.105l0.042,0.107l0.033,0.111l0.024,0.111l0.014,0.115l0.005,0.111v1.311l-0.005,0.113l-0.014,0.113 l-0.024,0.113l-0.033,0.109l-0.042,0.109l-0.05,0.104l-0.057,0.102l-0.065,0.1l-0.071,0.096l-0.079,0.092l-0.084,0.088l-0.091,0.086 l-0.096,0.082l-0.103,0.078l-0.107,0.074l-0.113,0.072l-0.118,0.068l-0.123,0.063l-0.127,0.061l-0.132,0.057l-0.135,0.053 l-0.14,0.049l-0.144,0.045l-0.147,0.039l-0.15,0.037l-0.153,0.031l-0.157,0.027l-0.159,0.021l-0.162,0.018l-0.165,0.014 l-0.167,0.008l-0.168,0.002h-1.463l-0.167-0.002l-0.167-0.008l-0.165-0.014l-0.162-0.018l-0.159-0.021l-0.157-0.027l-0.153-0.031 l-0.15-0.037l-0.147-0.039l-0.144-0.045l-0.139-0.049l-0.136-0.053l-0.131-0.057l-0.127-0.061l-0.123-0.063l-0.117-0.068 l-0.113-0.072l-0.107-0.074l-0.102-0.078l-0.097-0.082l-0.09-0.086l-0.084-0.088l-0.079-0.092l-0.072-0.096l-0.065-0.1l-0.057-0.102 l-0.049-0.104l-0.042-0.109l-0.033-0.109l-0.024-0.113l-0.014-0.113l-0.005-0.111v-1.313l0.005-0.111l0.014-0.115l0.024-0.111 l0.033-0.111l0.042-0.107l0.049-0.105l0.057-0.102l0.065-0.098l0.072-0.096l0.079-0.092l0.084-0.088l0.091-0.086l0.097-0.082 l0.102-0.078l0.107-0.076l0.113-0.07l0.118-0.068l0.123-0.064l0.127-0.061l0.131-0.057l0.136-0.051l0.139-0.049l0.144-0.045 l0.147-0.041l0.15-0.035l0.153-0.031l0.157-0.027l0.159-0.023l0.162-0.018l0.165-0.012l0.167-0.008L161.931,374.111L161.931,374.111 z M161.932,374.328h1.461c1.739,0,3.163,0.859,3.163,1.908v1.303c0,1.051-1.423,1.91-3.163,1.91h-1.461 c-1.74,0-3.163-0.859-3.163-1.91v-1.303C158.769,375.188,160.192,374.328,161.932,374.328L161.932,374.328z M149.345,367.311v-1.469 l0.003-0.172l0.008-0.174l0.014-0.17l0.018-0.17l0.023-0.166l0.028-0.162l0.033-0.16l0.038-0.158l0.042-0.154l0.047-0.15 l0.051-0.146l0.055-0.143l0.06-0.139l0.064-0.135l0.068-0.129l0.072-0.127l0.077-0.119l0.081-0.117l0.085-0.109l0.088-0.105 l0.093-0.1l0.098-0.092l0.102-0.088l0.106-0.08l0.111-0.072l0.115-0.064l0.119-0.057l0.123-0.047l0.126-0.037l0.13-0.027 l0.133-0.018l0.125-0.006H153l0.125,0.006l0.132,0.018l0.13,0.027l0.126,0.037l0.124,0.047l0.119,0.057l0.115,0.064l0.11,0.072 l0.106,0.08l0.102,0.088l0.098,0.092l0.093,0.1l0.089,0.105l0.085,0.109l0.081,0.117l0.076,0.119l0.072,0.125l0.068,0.131 l0.064,0.135l0.06,0.139l0.056,0.143l0.051,0.146l0.047,0.15l0.042,0.154l0.038,0.156l0.033,0.162l0.028,0.162l0.023,0.168 l0.019,0.168l0.013,0.172l0.008,0.172l0.002,0.174v1.467l-0.002,0.172l-0.008,0.174l-0.013,0.17l-0.019,0.17l-0.023,0.166 l-0.028,0.162l-0.033,0.16l-0.038,0.158l-0.042,0.154l-0.047,0.15l-0.051,0.146l-0.056,0.143l-0.06,0.139l-0.064,0.135l-0.068,0.131 l-0.072,0.125l-0.076,0.119l-0.081,0.117l-0.085,0.109l-0.089,0.105l-0.093,0.1l-0.098,0.092l-0.102,0.088l-0.106,0.08l-0.111,0.072 l-0.115,0.064l-0.119,0.057l-0.123,0.047l-0.127,0.037l-0.13,0.027l-0.133,0.018L153,370.904h-1.321l-0.125-0.006l-0.133-0.018 l-0.13-0.027l-0.127-0.037l-0.123-0.047l-0.119-0.057l-0.114-0.064l-0.111-0.072l-0.107-0.08l-0.101-0.088l-0.098-0.092l-0.093-0.1 l-0.089-0.105l-0.084-0.109l-0.081-0.117l-0.077-0.119l-0.072-0.127l-0.068-0.129l-0.064-0.135l-0.06-0.139l-0.055-0.143 l-0.051-0.146l-0.047-0.15l-0.042-0.154l-0.038-0.158l-0.033-0.16l-0.028-0.162l-0.023-0.166l-0.018-0.17l-0.014-0.17l-0.008-0.174 L149.345,367.311L149.345,367.311z M149.562,367.309v-1.465l0.003-0.166l0.008-0.168l0.013-0.164l0.018-0.162l0.022-0.16 l0.027-0.156l0.031-0.152l0.036-0.15l0.04-0.148l0.044-0.143l0.049-0.139l0.053-0.137l0.056-0.131l0.061-0.127l0.064-0.123 l0.067-0.117l0.071-0.113l0.075-0.107l0.079-0.102l0.082-0.098l0.085-0.09l0.088-0.086l0.092-0.078l0.095-0.072l0.099-0.064 l0.102-0.057l0.104-0.049l0.107-0.043l0.11-0.031l0.113-0.025l0.115-0.014l0.111-0.006h1.312l0.112,0.006l0.114,0.014l0.113,0.025 l0.11,0.031l0.107,0.043l0.105,0.049l0.102,0.057l0.099,0.064l0.095,0.072l0.092,0.078l0.088,0.086l0.085,0.09l0.082,0.098 l0.079,0.102l0.075,0.107l0.071,0.113l0.068,0.117l0.064,0.123l0.061,0.127l0.057,0.131l0.052,0.137l0.049,0.139l0.044,0.143 l0.04,0.148l0.036,0.15l0.031,0.152l0.027,0.156l0.022,0.16l0.018,0.162l0.012,0.164l0.008,0.168l0.002,0.166v1.465l-0.002,0.166 l-0.008,0.168l-0.012,0.164l-0.018,0.162l-0.022,0.16l-0.027,0.156l-0.031,0.152l-0.036,0.15l-0.04,0.148l-0.044,0.143l-0.049,0.139 l-0.052,0.137l-0.057,0.131l-0.061,0.127l-0.064,0.123l-0.068,0.117l-0.071,0.113l-0.075,0.107l-0.079,0.102l-0.082,0.098 l-0.085,0.09l-0.088,0.086l-0.092,0.078l-0.095,0.072l-0.099,0.064l-0.102,0.057l-0.105,0.049l-0.107,0.043l-0.11,0.031 l-0.113,0.025l-0.114,0.014l-0.112,0.006h-1.312l-0.111-0.006l-0.115-0.014l-0.113-0.025l-0.11-0.031l-0.107-0.043l-0.104-0.049 l-0.102-0.057l-0.099-0.064l-0.095-0.072l-0.092-0.078l-0.088-0.086l-0.085-0.09l-0.082-0.098l-0.079-0.102l-0.075-0.107 l-0.071-0.113l-0.067-0.117l-0.064-0.123l-0.061-0.127l-0.056-0.131l-0.053-0.137l-0.049-0.139l-0.044-0.143l-0.04-0.148 l-0.036-0.15l-0.031-0.152l-0.027-0.156l-0.022-0.16l-0.018-0.162l-0.013-0.164l-0.008-0.168L149.562,367.309L149.562,367.309z M149.779,367.307v-1.461c0-1.74,0.859-3.162,1.909-3.162h1.302c1.05,0,1.91,1.422,1.91,3.162v1.461c0,1.74-0.859,3.162-1.91,3.162 h-1.302C150.638,370.469,149.779,369.047,149.779,367.307L149.779,367.307z M162.646,359.684c3.799,0,6.898,3.098,6.898,6.898 c0,3.799-3.099,6.896-6.898,6.896c-3.8,0-6.898-3.098-6.898-6.896C155.749,362.781,158.847,359.684,162.646,359.684L162.646,359.684 z M162.646,360.125c3.556,0,6.456,2.9,6.456,6.457c0,3.555-2.9,6.455-6.456,6.455c-3.556,0-6.456-2.9-6.456-6.455 C156.19,363.025,159.09,360.125,162.646,360.125L162.646,360.125z M162.646,360.572c3.31,0,6.009,2.699,6.009,6.01 c0,3.309-2.699,6.008-6.009,6.008s-6.009-2.699-6.009-6.008C156.638,363.271,159.337,360.572,162.646,360.572L162.646,360.572z");
				
				svg.appendChild(path);









				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#BCBEC0");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M58.85,360.539c2.212,0,35.537-0.039,37.118-0.039 c1.58,0,1.758,0.988,0.494,3.832s-2.212,4.426-6.953,4.109c-4.741-0.316-24.021-0.316-27.182-0.316s-3.477-2.529-5.057-4.426 C55.689,361.803,58.85,360.539,58.85,360.539L58.85,360.539z");
				
				svg.appendChild(path);









				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					//path.setAttributeNS(null, "fill-rule", "evenodd");
					//path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "none");
					path.setAttributeNS(null, "stroke", "#000000");
					path.setAttributeNS(null, "stroke-width", "0.216");
					path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M731.732,351.32 v3.107 M733.922,350.699v4.643 M735.053,350.699v4.643 M736.305,350.699v4.643 M737.713,350.699v4.643 M739.043,350.699v4.643 M740.373,350.699v4.643 M741.781,350.699v4.643 M743.346,350.699v4.643 M744.912,350.699v4.643 M746.477,350.699v4.643 M748.119,350.699v4.643 M749.762,350.699v4.643");
				
				svg.appendChild(path);






				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#58595B");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M520.588,350.992c-0.008,0.949,1.594,1.65,3.287,1.654 l12.984,0.021c1.105,0.002,2.588-0.443,2.998-0.793c0.262-0.225,0.201-0.41-0.42-0.414l-3.594-0.025 c-0.609-0.002-0.758-0.02-0.861,0.211c-0.139,0.313-0.693,0.471-1.541,0.521h-6.596c-1.373,0-1.906-0.373-1.939-1.07 c-0.031-0.699,0.471-1.193,1.801-1.195l6.492-0.016c0.408,0,1.59,0.156,1.717,0.441c0.096,0.219,0.109,0.197,0.598,0.199 l3.844,0.006c0.539,0.002,0.697,0.021,0.699-0.223c0.008-1.035-3.402-0.992-4.992-0.996l-10.891-0.033 C521.949,349.275,520.598,350.041,520.588,350.992L520.588,350.992z M519.795,351.002l0.082,0.41l0.25,0.389l0.393,0.348 l0.512,0.299l0.611,0.244l0.689,0.184l0.75,0.115l0.75,0.039l13.063,0.023l0.529-0.023l0.555-0.068l0.531-0.1l0.502-0.125 l0.467-0.143l0.418-0.158l0.365-0.176l0.277-0.186l0.139-0.139l0.094-0.143l0.031-0.166l-0.074-0.186l-0.227-0.174l-0.334-0.117 l-0.357-0.057l-0.328-0.016l-3.627-0.025l-0.215-0.002l-0.207,0.002l-0.23,0.008l-0.287,0.035l-0.299,0.088l-0.223,0.129 l-0.119,0.131l-0.053,0.096l-0.043,0.066l-0.033,0.029l-0.045,0.025l-0.068,0.025l-0.105,0.029l-0.15,0.029l-0.195,0.023 l-0.205,0.016l-6.502,0.002l-0.373-0.014l-0.24-0.031l-0.16-0.041l-0.113-0.053l-0.102-0.076l-0.09-0.115l-0.066-0.162l-0.031-0.205 l0.012-0.211l0.053-0.18l0.088-0.143l0.107-0.102l0.121-0.068l0.143-0.049l0.201-0.033l0.328-0.018l6.416-0.014l0.113,0.004 l0.162,0.014l0.203,0.027l0.203,0.037l0.174,0.041l0.107,0.037l0.021,0.01l0.008,0.008l0.021,0.047l0.061,0.1l0.135,0.125 l0.266,0.121l0.309,0.057l0.227,0.012h0.17h0.166l3.838,0.008h0.191h0.195l0.236-0.012l0.305-0.047l0.313-0.115l0.182-0.16 l0.064-0.145l0.014-0.139l-0.051-0.254l-0.168-0.24l-0.268-0.209l-0.342-0.172l-0.387-0.133l-0.416-0.104l-0.432-0.078l-0.445-0.059 l-0.451-0.045l-0.453-0.031l-0.447-0.02l-0.436-0.014l-0.418-0.008l-0.393-0.004l-0.359-0.002h-0.318l-10.908-0.031l-0.461,0.008 l-0.461,0.031l-0.439,0.049l-0.418,0.07l-0.395,0.088l-0.365,0.105l-0.336,0.123l-0.307,0.139l-0.271,0.15l-0.238,0.164 l-0.201,0.176l-0.168,0.184l-0.131,0.191l-0.096,0.199l-0.057,0.205L519.795,351.002L519.795,351.002z M498.758,349.908l0.014,2.084 c0.004,0.678,0.004,0.676,1.273,0.676h1.859c1.494,0,1.461,0.018,1.475-0.609c0.014-0.738-0.277-0.621,1.43-0.619l6.432,0.01 c1.875,0.002,1.57-0.021,1.619,0.619c0.055,0.717,0.01,0.59,1.697,0.592c0.502,0,0.996,0.002,1.498,0.002 c1.764,0,1.672,0.121,1.648-0.682l-0.057-2.107c-0.018-0.619,0.188-0.539-1.563-0.568c-0.49-0.01-0.955-0.006-1.436-0.006 c-1.6,0.002-1.709-0.002-1.725,0.59c-0.027,1,0.318,0.855-1.754,0.854l-6.479-0.006c-1.531-0.002-1.32,0.109-1.299-0.854 c0.016-0.584,0.014-0.58-1.547-0.58l-2-0.004C498.75,349.299,498.752,349.295,498.758,349.908L498.758,349.908z M513.578,353.051 l0.439-0.004l0.545-0.004h0.182h0.186l0.188,0.002h0.186h0.188h0.188h0.189h0.182l0.574,0.004l0.459,0.004l0.449-0.016l0.523-0.098 l0.35-0.236l0.09-0.238l0.01-0.223l-0.008-0.266l-0.057-2.105v-0.201l-0.006-0.178l-0.078-0.215l-0.33-0.223l-0.484-0.096 l-0.416-0.023l-0.447-0.008l-0.572-0.008l-0.186-0.002l-0.188-0.002h-0.186l-0.184-0.002l-0.182,0.002h-0.178h-0.178h-0.18 l-0.549,0.002l-0.465,0.008l-0.439,0.033l-0.459,0.09l-0.365,0.188l-0.168,0.219l-0.055,0.207l-0.016,0.221l0.002,0.332l0.002,0.15 l-0.283-0.002l-0.674-0.004l-6.488-0.008l-0.496,0.004h-0.025l0.006-0.152l0.012-0.316l0.002-0.207l-0.023-0.195l-0.117-0.215 l-0.33-0.205l-0.459-0.104l-0.432-0.033l-0.445-0.008l-0.531-0.002l-2.004-0.002h-0.387l-0.361,0.012l-0.406,0.047l-0.414,0.137 l-0.227,0.211l-0.068,0.191l-0.018,0.184v0.213l0.014,2.084l0.006,0.234l0.021,0.203l0.082,0.205l0.248,0.217l0.432,0.139 l0.432,0.047l0.4,0.012l0.443,0.002h1.861h0.508l0.43-0.008l0.43-0.033l0.459-0.113l0.307-0.211l0.102-0.213l0.027-0.195 l0.006-0.219l-0.006-0.242h0.078l0.557,0.004l6.436,0.01l0.596,0.002l0.229,0.004v0.025l0.006,0.217l0.021,0.246l0.041,0.211 l0.141,0.23l0.395,0.203l0.496,0.072L513.578,353.051L513.578,353.051z M482.928,352.197l6.859-0.029 c1.299-0.004,1.961-0.553,1.977-1.105s-0.57-1.1-2.082-1.182l-7.217,0.014c-1.529,0.004-2.254,0.414-2.199,1.186 C480.32,351.85,481.404,352.203,482.928,352.197L482.928,352.197z M479.408,352.664h12.684c2.553,0,3.777-0.641,3.789-1.539 c0.01-0.9-1.596-1.775-4.695-1.789c-3.865-0.014-7.732-0.016-11.6-0.023c-1.971-0.006-3.012,0.832-3.037,1.672 S477.447,352.664,479.408,352.664L479.408,352.664z M482.945,351.813l-0.467-0.012l-0.379-0.037l-0.307-0.059l-0.244-0.074 l-0.188-0.094l-0.146-0.117l-0.105-0.154l-0.051-0.205l0.014-0.213l0.064-0.174l0.104-0.127l0.127-0.09l0.162-0.068l0.223-0.055 l0.309-0.039l0.438-0.018l7.105-0.012l0.367,0.035l0.291,0.061l0.223,0.074l0.174,0.092l0.137,0.109l0.1,0.125l0.059,0.143 l0.016,0.152l-0.025,0.15l-0.068,0.143l-0.107,0.129l-0.139,0.105l-0.162,0.084l-0.188,0.059l-0.221,0.041l-0.322,0.018 L482.945,351.813L482.945,351.813z M479.385,353.047h12.719l0.506-0.008l0.49-0.023l0.465-0.041l0.439-0.059l0.41-0.074l0.383-0.092 l0.354-0.107l0.318-0.125l0.285-0.139l0.248-0.15l0.209-0.164l0.168-0.174l0.129-0.182l0.092-0.189l0.055-0.193l0.02-0.201 l-0.021-0.207l-0.068-0.207l-0.113-0.205l-0.162-0.197l-0.207-0.191l-0.25-0.18l-0.295-0.17l-0.336-0.158l-0.375-0.145l-0.416-0.127 l-0.453-0.111l-0.488-0.094l-0.523-0.076l-0.559-0.055l-0.59-0.035l-0.609-0.014l-0.377-0.002h-0.363l-0.361-0.002l-0.363-0.002 h-0.363l-0.363-0.002h-0.361h-0.365l-0.361-0.002h-0.361l-0.363-0.002h-0.363h-0.363l-0.361-0.002h-0.363h-0.363l-1.086-0.002 l-0.363-0.002h-0.363h-0.361h-0.363l-0.363-0.002h-0.361h-0.363l-0.361-0.002h-0.361l-0.363-0.002h-0.363h-0.361l-0.387-0.002 l-0.426,0.012l-0.426,0.033l-0.406,0.059l-0.379,0.078l-0.352,0.098l-0.32,0.115l-0.285,0.129l-0.256,0.143l-0.225,0.152 l-0.193,0.16l-0.162,0.17l-0.133,0.172l-0.104,0.18l-0.076,0.182l-0.047,0.184l-0.021,0.184l0.008,0.186l0.035,0.184l0.061,0.18 l0.086,0.18l0.117,0.174l0.146,0.17l0.176,0.162l0.207,0.154l0.242,0.145l0.275,0.133l0.311,0.117l0.342,0.1l0.373,0.082 l0.402,0.059l0.424,0.035L479.385,353.047L479.385,353.047z M458.889,350.352l-0.012,1.359c-0.006,0.559,0.15,0.463,1.57,0.467 l6.301,0.012c1.738-0.014,2.213-0.797,2.236-1.135c0.021-0.338-0.602-1.139-2.193-1.166l-6.352,0.016 C458.949,349.906,458.893,349.881,458.889,350.352L458.889,350.352z M455.371,349.311l14.867,0.014c0.436,0,0.84,0.023,1.242,0.115 c1.131,0.26,2.229,0.893,2.191,1.572c-0.043,0.791-0.828,1.443-2.355,1.615c-0.375,0.041-0.73,0.041-1.107,0.041l-14.48,0.008 c-1.172,0-0.977-0.211-0.977-0.479l-0.002-2.547C454.748,349.379,455.137,349.311,455.371,349.311L455.371,349.311z M467.637,350.457l-0.242-0.092l-0.283-0.063l-0.385-0.029l-6.283,0.014l-0.488,0.002l-0.271,0.004l-0.002,0.064l-0.014,1.35 l0.006,0.09h0.289l0.482-0.004l6.252,0.012l0.439-0.027l0.297-0.059l0.232-0.086l0.189-0.109l0.148-0.127l0.105-0.135l0.061-0.125 l0.02-0.088l-0.014-0.08l-0.059-0.119l-0.111-0.137l-0.164-0.137L467.637,350.457L467.637,350.457z M455.34,348.926l14.906,0.016 h0.184l0.189,0.006l0.193,0.008l0.197,0.016l0.201,0.02l0.201,0.027l0.203,0.033l0.215,0.045l0.502,0.135l0.484,0.174l0.445,0.205 l0.396,0.234l0.338,0.26l0.26,0.285l0.164,0.309l0.047,0.316l-0.061,0.344l-0.143,0.322l-0.23,0.305l-0.322,0.281l-0.42,0.252 l-0.514,0.213l-0.602,0.162l-0.654,0.105l-0.205,0.02l-0.174,0.014l-0.168,0.01l-0.162,0.006l-0.158,0.004h-0.152l-0.146,0.002 h-0.146l-14.502,0.008l-0.461-0.012l-0.432-0.045l-0.408-0.102l-0.309-0.172l-0.129-0.189l-0.021-0.148l0.008-0.109l0.004-0.092 l-0.002-2.559l0.027-0.148l0.098-0.156l0.164-0.137l0.213-0.109l0.238-0.076l0.234-0.047l0.223-0.025L455.34,348.926L455.34,348.926 z");
				
				svg.appendChild(path);











				//------------------------
				// PATH
				//------------------------
				var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				
					path.setAttributeNS(null, "fill-rule", "evenodd");
					path.setAttributeNS(null, "clip-rule", "evenodd");
					path.setAttributeNS(null, "fill", "#58595B");
					//path.setAttributeNS(null, "stroke", "#000000");
					//path.setAttributeNS(null, "stroke-width", "0.216");
					//path.setAttributeNS(null, "stroke-miterlimit", "2.6131");
					//path.setAttributeNS(null, "stroke-linecap", "round");
					path.setAttributeNS(null, "d", "M454.531,354.666l3.451,3.627c0.607,0.637,0.396,0.629,1.031,0.006 l3.02-2.965c0.457-0.449,0.381-0.439,1.012-0.438c0.617,0.002,0.6,0.021,0.076-0.432c-0.633-0.549-0.391-0.475-1.213-0.477 c-0.887,0-0.545-0.064-1.145,0.543l-1.602,1.631c-0.705,0.715-0.484,0.721-1.152,0l-1.508-1.633 c-0.615-0.664-0.428-0.543-1.559-0.549C453.672,353.977,453.709,353.803,454.531,354.666L454.531,354.666z M464.039,354.465 c0.596,0.533,0.371,0.451,1.314,0.453c0.26,0.002,0.52,0,0.779-0.004c0.967-0.008,0.828-0.154,0.826,0.844l-0.002,0.945 c-0.004,1.309-0.27,1.068,1.004,1.078c1.273,0.012,1.072,0.24,1.072-1.068v-0.951c0-1.055-0.271-0.855,0.963-0.855h1.205 c0.736,0,0.654,0.135,0.67-0.432c0.014-0.566,0.02-0.498-0.686-0.5l-6.977-0.014C463.449,353.959,463.379,353.875,464.039,354.465 L464.039,354.465z M472.688,354.813v2.049c0.123,0.512,0.537,0.859,1.09,0.922l6.291-0.002c0.537,0,0.49,0.129,0.521-0.412 c0.025-0.445-0.004-0.416-0.559-0.416h-5.264c-0.088-0.029-0.15-0.102-0.191-0.193c-0.191-0.443,0.066-0.438,0.389-0.438h4.799 c0.488,0,0.418,0.021,0.41-0.354c-0.006-0.396,0.057-0.342-0.453-0.344l-4.789-0.014c-0.453-0.002-0.443,0.117-0.449-0.35 c-0.004-0.471-0.008-0.346,0.447-0.348l5.068-0.006c0.578-0.002,0.592,0.006,0.6-0.438c0.008-0.525,0.061-0.494-0.629-0.492 l-6.688,0.018C472.52,353.998,472.688,353.844,472.688,354.813L472.688,354.813z M482.377,353.984 c-0.693,0.133-1.137,1.021-1.115,2.014s0.316,1.637,1.09,1.768l6.387,0.023c0.543,0.002,0.539,0.041,0.541-0.412 c0.002-0.479-0.027-0.416-0.588-0.414l-4.994,0.016c-0.377-0.023-0.611-0.404-0.643-1.006s0.281-1.025,0.576-1.066l5.094,0.016 c0.609,0.002,0.555,0.068,0.555-0.471c0-0.578,0.021-0.475-0.594-0.473L482.377,353.984L482.377,353.984z");
				
				svg.appendChild(path);





		holder.appendChild(svg);





		//====================================================================
		//====================================================================




		//SVG - sizing

		


		//=====================================================================
		//=====================================================================


		var svg = document.getElementById(svg_id);

			//-----------------------------------

			var par_id = svg.parentNode.id;
			var par = document.getElementById(par_id);

			var par_w_int = par.offsetWidth;
			var par_h_int = par.offsetHeight;

			//------------------------------------

			var box = svg.getBBox(); // <- get the visual boundary required to view all children

			var box_x = box.x;
			var box_y = box.y;
			var box_w = box.width;
			var box_h = box.height;

			//-----------------------------------
			//NOTE 
			// - works in opposite way
			// - do plus to lessen the x y w h of svg
			// - do minus to increase the x y w h of svg

			var vb_diff = 6;

			var vb_x = box_x - (vb_diff/2);
			var vb_y = box_y;//set manually according to holder size
			var vb_w = box_w + vb_diff;
			var vb_h = box_h + vb_diff;


			var viewBox= [vb_x, vb_y, vb_w, vb_h];
			var viewBox = viewBox.join(" ");


		svg.setAttribute("viewBox", viewBox);


		//--------------------------------------
		var perc = parseFloat(vb_h) / parseFloat(vb_w);
		var perc = perc * 100;
		var numb = (perc/100) * par_w_int;
		var numb = numb - vb_diff;

		if(box_h > numb)
		{
			var par_h = box_h;
		}else{
			var par_h = numb;
		}//===



		par.style.height = par_h + "px";
		//--------------------------------------


		console.log(
			"PAR ID: "+par_id
			+"\nPAR W INT: "+par_w_int
			+"\nPAR H INT: "+par_h_int
			+"\nBOX X: "+box_x
			+"\nBOX Y: "+box_y
			+"\nBOX w: "+box_w
			+"\nBOX h: "+box_h
			+"\n"
			+"\nVB X: "+vb_x
			+"\nVB Y: "+vb_y
			+"\nVB w: "+vb_w
			+"\nVB h: "+vb_h
			+"\nPERC: "+perc
			+"\nPAR_H: "+par_h

		);





}//function
//=========