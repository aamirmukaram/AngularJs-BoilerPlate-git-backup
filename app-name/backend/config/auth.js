// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1648198818761881', // your App ID
		'clientSecret' 	: '80d471b66f52d26f9404e790865c26fa', // your App Secret
		'callbackURL' 	: 'http://localhost:8085/api/auth/facebook/callback'
	}

};