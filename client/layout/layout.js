Template.layout.events({
	'click #logoutLink':function(event) {
		event.preventDefault();
		Meteor.logout();
		Router.go('/')
	}
})