Template.register.events({
	'submit #registerform':function(event) {
		event.preventDefault();
		const name = $("#name").val();
		const password = $("#password").val();
		const username = $("#username").val();
		const number = $("#number").val();
		const email = $("#email").val();

		profile = {name:name,number:number}

		Accounts.createUser({username:username,password:password,email:email,profile:profile}, function(error) {
			console.log("error");
		});

		Router.go('/profile')
	}
})