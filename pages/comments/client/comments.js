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
<<<<<<< HEAD:pages/about/client/Comments.js
  commentlist: function(){return Comments.find();}
})
=======

})
>>>>>>> origin/master:pages/comments/client/comments.js
