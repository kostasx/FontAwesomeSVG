var startSVG   = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="595.279px" height="841.89px" viewBox="0 0 595.279 841.89" enable-background="new 0 0 595.279 841.89" xml:space="preserve">';
var contentSVG = "";
var endSVG     = '</svg>';

var fa = $(".container").eq(3).find(".fa");	// GET ALL ICONS

	// TEST first 30 // 
	// fa.splice( 30 );

var fa_icons = [];
var lineCounter = 0;
var X1 = 15;
var X2 = 45;
var X3 = 45;

var Y1 = 45;
var Y2 = 30;
var Y3 = 45;

var iconCounter = 0;
var lineCounter = 0;

fa.each(function(el, icon){

	iconCounter++;

	$icon = $(icon);
	var faUnicode = $icon.next().text();	// UNICODE "[&#xf042;]"
		faUnicode = faUnicode.replace("[","").replace("]","");
	$icon = $icon.parent();
	var faClass = $icon.contents().eq(2).text().trim();	// FA CLASS "fa-adjust"
	fa_icons.push( [faClass, faUnicode] );

	contentSVG += '<g>\r\n';
	contentSVG += '<text transform="matrix(1 0 0 1 ' + X1 + ' ' + Y1 + ')" font-family="\'FontAwesome\'" font-size="22.351">' + faUnicode + '</text>\r\n';
	contentSVG += '<text transform="matrix(1 0 0 1 ' + X2 + ' ' + Y2 + ')" font-family="\'ArialMT\'" font-size="' + ( ( faClass.length > 14 ) ? "10" : "12" ) + '">' + faClass + '</text>\r\n';
	contentSVG += '<text transform="matrix(1 0 0 1 ' + X3 + ' ' + Y3 + ')" font-family="\'ArialMT\'" font-size="12">' + htmlEntities(faUnicode) + '</text>\r\n';
	contentSVG += '</g>\r\n';

	X1 = X1 + 120;
	X2 = X2 + 120;
	X3 = X3 + 120;

	if ( iconCounter % 5 === 0 ){

		lineCounter++;

		Y1 = 45 + ( 45 * lineCounter );
		Y2 = 30 + ( 45 * lineCounter );
		Y3 = 45 + ( 45 * lineCounter );

		X1 = 15;
		X2 = 45;
		X3 = 45;

	}

});

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function download( data ) {
    var a = document.createElement('a');
	    a.href = "data:application/octet-stream;charset=utf-8;base64," + data; // location.href;
	    a.text = "DOWNLOAD";
    	a.download = 'fontawesome.svg';
    	document.body.appendChild(a);
    	// a.click();
    	// a.parentNode.removeChild(a);
};

function createFile(fileData){
	return window.btoa(fileData);
}

var file = startSVG + contentSVG + endSVG;

var enc = createFile( file );
// console.log(enc);

download(enc);

/* CREATE FILE DYNAMICALLY */
