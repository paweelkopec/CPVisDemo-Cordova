// override configuration for RESTful services
var TicketMonster = {
    config:{
        baseRESTUrl:"http://cpvisdemoservice-paweelk.rhcloud.com//"//http://ticketmonster-jdf.rhcloud.com/
    }//http://cpvisdemoservice-paweelk.rhcloud.com/
    //
};

require(['../../../cordova'], function() {
    
    var bootstrap = {
        initialize: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function() {
            // Detect if iOS 7 or higher and disable overlaying the status bar
            if(window.device && window.device.platform.toLowerCase() == "ios" &&
                parseFloat(window.device.version) >= 7.0) {
                StatusBar.overlaysWebView(false);
                StatusBar.styleDefault();
                StatusBar.backgroundColorByHexString("#e9e9e9");
            }
            // Load the mobile module
            require (["mobile"]);
        }
    };
    
    bootstrap.initialize();
});