/**
 * Module for the Events collection
 */
define([
    // The collection element type and configuration are dependencies
    'app/models/state',
    'configuration',
    'backbone'
], function (State, config) {
    /**
     *  Here we define the Bookings collection
     *  We will use it for CRUD operations on Bookings
     */
    var States = Backbone.Collection.extend({
        url: config.baseUrl + "rest/states", // the URL for performing CRUD operations
        model: State,
        id:"id", // the 'id' property of the model is the identifier
    });
    return States;
});