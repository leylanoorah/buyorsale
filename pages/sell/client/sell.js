<<<<<<< HEAD
sell.js
=======
Template.comments.events({
  "click #submitcomment": function(event){
     console.log("hey we clicked it");
     alert("Thank you for commenting!!");
     const comment = $("#comment").val();
     const date = new Date();
     const jsonobj = {comment:comment, date:date}
     Comments.insert(jsonobj);
  }
})


Template.comments.helpers({

  commentlist: function(){return Comments.find();}
})
>>>>>>> origin/master
