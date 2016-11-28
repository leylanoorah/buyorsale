Template.register.events({
	'submit #registerform':function(event) {
		event.preventDefault();
		if ($("#password").val() == $("#password_confirmation").val()) {
			const firstname = $("#first_name").val();
			const lastname = $("#last_name").val();
			const username = $("#display_name").val()
			const password = $("#password").val();
			const email = $("#email").val();

			profile = {username:username,firstname:firstname,lastname:lastname}

			Accounts.createUser({password:password,email:email,profile:profile}, function(error) {
				console.log("error");
			});
			Meteor.loginWithPassword(email,password);
			Router.go('/profile')
		}
		else {
			alert('Your passwords don\'t match!');
		}
		
	}
})