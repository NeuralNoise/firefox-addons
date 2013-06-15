const data=require("self").data;
exports.main=function(options){
	if(options.loadReason=="install"){
		require("tabs").open(data.url("welcome.html")); //Welcome HTML file
		//Configurar con pagina XUL o HTML o Javascript
	
	}
	if(options.loadReason=="upgrade"){
		require("tabs").open(data.url("changelog.html")); //Changelog HTML file
		require("tabs").open("http://sites.google.com/site/divelmedia");
	}
	require("simple-prefs").on("review",function (){
		require("tabs").open("http://addons.mozilla.org/en/mobile/addon/google-share-android");
	});
	/* Not supported by Firefox for Android */
	/*var pluswidget=require("widget").Widget({
		id: "google-share-widget",
		label: "Google+ Share",
		contentURL: data.url("icon64.png"), 	
		onClick: function() {
			require("tabs").open("http://plus.google.com/share?url="+require("tabs").activeTab.url);		
		}
	});*/
	/*var pagemod=require("page-mod");
	pagemod.PageMod({
		include: ['*'],
		contentScriptFile: data.url("share.js"),
		onAttach: function(worker){
			worker.port.emit("init",data.url("icon64.png"));
			worker.port.on("sharing",function(url){
				require("tabs").open("http://plus.google.com/share?url="+encodeURIComponent(url));
			});
		}

	});*/
	const utils = require('api-utils/window/utils');
	const recent = utils.getMostRecentBrowserWindow();
	let selector =  recent.NativeWindow.contextmenus.SelectorContext("*");
	recent.NativeWindow.contextmenus.add("Google+ Share",selector,function (target){
		require("tabs").open("http://plus.google.com/share?url="+encodeURIComponent(recent.BrowserApp.selectedTab.window.location.href));
	});


}
