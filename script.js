let food=[];
$(".add").click(function() {
 var more=$(".picture-url").val();   
 food.push(more);
 $(".gallery").append("<img src='"+more+"'>");
 $(".picture-url").val("");
   
});