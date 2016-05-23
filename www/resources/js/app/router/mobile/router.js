/**
 * A module for the router of the mobile application.
 *
 */
define("router",[
    'jquery',
    'jquerymobile',
    'underscore',
    'utilities',
    'app/collections/states',
    'app/views/mobile/home',
    'text!../templates/mobile/home-view.html'
],function ($,
            jqm,
            _,
            utilities,
            States, //collection
            HomeView,
            HomeViewTemplate) {

    /**
     * The Router class contains all the routes within the application - i.e. URLs and the actions
     * that will be taken as a result.
     *
     * @type {Router}
     */
    var Router = Backbone.Router.extend({
    	initialize: function() {
            //Begin dispatching routes
    		Backbone.history.start();
    	},
        routes:{
            "":"home",
        },
        home:function () {
        	   /*
        	utilities.applyTemplate($("#container"), HomeViewTemplate);
            $("#container").enhanceWithin();
          */
        	var states = new States;
        	var homeView = new HomeView({model:states, el:$("#container")});
        	states.on("reset", function() {
                utilities.viewManager.showView(homeView);
            }).fetch({
                reset : true,
                error : function() {
                    utilities.displayAlert("Failed to retrieve states from the TicketMonster server.");
                }
            });
           
        },
        execute : function(callback, args) {
            $.mobile.loading("show");
            window.setTimeout(function() {
                if (callback) {
                    callback.apply(this, args);
                }
                $.mobile.loading("hide");
            }, 300);
        }
    });
    
    // Create a router instance
    var router = new Router();
    
    return router;
});