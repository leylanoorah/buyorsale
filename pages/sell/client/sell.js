Template.sell.events({
	'submit #sellForm':function(event) {
		event.preventDefault();
		const description = $("#description").val();
		const price = $("#price").val();
		const photoLink = $('#photo').val();
		console.log(Meteor.userId());
		Items.insert({photo:photoLink,description:description,price:price,seller:Meteor.userId(),sold:false})
	
		$('#description').val('');
		$('#price').val('');
		$('#photo').val('');
	}
})

Template.sell.helpers({
	myItems: function() { return Items.find({seller:Meteor.userId()}); }
})