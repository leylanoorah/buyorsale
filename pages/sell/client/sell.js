Template.sell.events({
	'submit #sellForm':function(event) {
		event.preventDefault();
		const description = $("#description").val();
		const price = $("#price").val();
		const photoLink = $('#photo').val();
		if (price != '' && description != '' && photoLink != '') {
			console.log(Meteor.userId());
			Items.insert({photo:photoLink,description:description,price:price,seller:Meteor.userId(),sold:false})
		
			$('#description').val('');
			$('#price').val('');
			$('#photo').val('');
		}
		else {
			alert('Make sure to fill out everything!');
		}
		
	},
	'click .edit':function(event) {
		Session.set("selectedItemEdit",this);
		$('#editModal').modal('toggle');
	},
	'click #saveEdit':function(event){
		Items.update(Session.get("selectedItemEdit")._id, {
	      $set: { price:$('#editPrice').val(), description:$('#editDescription').val(),photo:$('#editPhoto').val() },
	    });
	    $('#editModal').modal('toggle');
	},
	'click .delete':function(event){
		Items.remove(this._id);
	}
})

Template.sell.helpers({
	myItems: function() { return Items.find({seller:Meteor.userId(),sold:false}); },
	selectedPrice:function() {
		return Items.findOne({_id:Session.get("selectedItemEdit")._id}).price;
	},
	selectedDescription:function() {
		return Items.findOne({_id:Session.get("selectedItemEdit")._id}).description;
	},
	selectedPhoto:function() {
		return Items.findOne({_id:Session.get("selectedItemEdit")._id}).photo;
	}
})