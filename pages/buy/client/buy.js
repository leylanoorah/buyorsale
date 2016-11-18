Template.buy.helpers({
	itemsToSell: function() { return Items.find(); },
	sellerName: function() {
		if (this.seller != null) {
			return Meteor.users.findOne({_id:this.seller}).profile.name;
		}
	}
})

Template.buy.events({
	'click .moreInfo':function(event) {
		Router.go('itemInfo',{_id:this._id})
	}
})