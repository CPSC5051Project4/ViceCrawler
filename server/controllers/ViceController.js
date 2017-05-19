Meteor.methods({
	'newRequest' : function(input) {
		var api = initializeApiView();
		var model = initializeViceModel();
		var request = { searchLocation: input.searchLocation,
			maxWaypoints: input.maxWaypoints searchRadius: input.searchRadius, 
			viceType: input.viceType };;
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
