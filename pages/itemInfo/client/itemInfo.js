Template.itemInfo.helpers({
	itemSeller:function() {
		return Meteor.users.findOne({_id:this.seller})
	}
})