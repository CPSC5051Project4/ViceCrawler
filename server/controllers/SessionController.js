Meteor.methods({
'initializeSession': function(session) {
	var sessionData = parseSession(session);
	var sessionModel = getSessionModel();
	var sessionId = sessionModel.getSessionId(sessionData);
		function parseSession(session) {
			return session_decode(session); 
		}
	}
	return sessionId;
});
