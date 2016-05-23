/**
 * Module for the Event model
 */
define([ 
    'configuration',
    'backbone'
], function (config) {
    /**
     * The Event model class definition
     * Used for CRUD operations against individual events
     */
    var State = Backbone.Model.extend({
        urlRoot: config.baseUrl + 'rest/states' // the URL for performing CRUD operations
    });
    return State;
});