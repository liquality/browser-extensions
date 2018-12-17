// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	var script = document.createElement('script');
	script.src = chrome.extension.getURL('scripts/static/cal.udm.js');
	document.body.appendChild(script);
	script.onload = function() {
	    this.remove();
	};
	(document.head || document.documentElement).appendChild(script);

})();
