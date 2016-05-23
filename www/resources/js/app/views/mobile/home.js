define([
    'utilities',
    'text!../../../../templates/mobile/home-view.html',
    'configuration',
], function (
    utilities,
    homeTemplate,
    configuration) {

    var HomeView = Backbone.View.extend({
    	events: {
            "click .state-target": "stateClicked"
        },
        render:function () {
           console.log(JSON.stringify(this.model.first()));
           utilities.applyTemplate($(this.el),homeTemplate,{ model:this.model, configuration: configuration });
           $(this.el).enhanceWithin();
            return this;
        },
        stateClicked: function(e){
        	e.preventDefault();
        	var stateId = $(e.currentTarget).attr('data-id');
        	var state = this.model.findWhere({'id': parseInt(stateId)});
        	
        	$("#state-current-name").text(state.get("name"));
        	$("#state-current-image").prop("src", configuration.baseUrl+"/resources/gfx/"+state.get("image") );
        	console.log(JSON.stringify(state ) );
        	
        },
    });

    return HomeView;
});