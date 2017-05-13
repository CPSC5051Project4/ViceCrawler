Meteor.methods({
	'newRequest' : function(input) {
		var api = initializeApiView();
		var model = initializeViceModel();
		var request = { city: input.city, 
			range: input.range, type: input.requestType };;
		return apiRequest(model, api, request);
	}
	'addRequest' : function(input) {
		updateRequest(input, 'add');
	}
	'removeRequest' : function(input) {
		updateRequest(input, 'remove');
	}
	function updateRequest(location, requestType) {
		var api = getApiView();
		var model = getViceModel();
		var request = { updateLocation: input.location,
			requestId = input.Id, type: requestType };
		return apiRequest(model, api, request);
	}
	function apiRequest(model, api, request) {
		var locationInput = model.getLocationInput(request);
		var locationData = api.getLocationData(locationInput);
		var viceRequestId = model.getViceRequestId(locationData);
		return viceRequestId;
	}
});
