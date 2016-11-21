Template.register.events({
	'submit #registerform':function(event) {
		event.preventDefault();
		const name = $("#InputName").val();
		const password = $("#InputPassword").val();
		const number = $("#InputNumber").val();
		const email = $("#InputEmail").val();
		const sex = $("#SexSelect").val();

		profile = {name:name,number:number,sex:sex,email:email}

		Accounts.createUser({password:password,email:email,profile:profile}, function(error) {
			console.log("error");
		});

		Router.go('/profile')
	}
})