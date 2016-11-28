Template.login.events({
	'submit #loginForm':function(event) {
		event.preventDefault();
		Meteor.loginWithPassword($('#user').val(),$('#password').val());
		Router.go('/profile');
	}
})