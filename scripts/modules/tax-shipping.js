define(['modules/backbone-mozu', 'underscore', 'modules/jquery-mozu', 'modules/models-cart', 'modules/cart-monitor', 'hyprlive'], function (Backbone, _, $, CartModels, CartMonitor, hypr) {

	$(document).ready(function() {
		var StateModel = Backbone.Model.extend({
			defaults: {
				
			}
		});

		var states = new StateModel();

		var stateData = new CartModels.Cart(states); 
		var TaxView = Backbone.MozuView.extend({
			templateName: "modules/cart/tax-shipping-calc",
			events: {
				"click #productreview": "showReviews"
			}
		});

		var view = new TaxView({
			model: stateData,
			el: $('#stateOptions')
		});
		view.render();
	});
	});