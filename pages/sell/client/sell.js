Template.sell.events({
	'submit #sellForm':function(event) {
		event.preventDefault();
		const description = $("#description").val();
		const price = $("#price").val();

		Items.insert({description:description,price:price,seller:Meteor.userId(),sold:false})
	}
})

Template.sell.helpers({
	myItems: function() { return Items.find({seller:Meteor.userId()}); }
})