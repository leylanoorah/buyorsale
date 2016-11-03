Template.login.events({
	'submit #loginForm':function(event) {
		event.preventDefault();
		Meteor.loginWithPassword($('#InputEmail').val(),$('#InputPassword').val());
		Router.go('/profile');
	}
})