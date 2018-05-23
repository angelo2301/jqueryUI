$(function() {

  $(".d").children().find("div").draggable({
   zIndex: 100,
   revert: true,
  });


  $(".d").children().droppable({
    drop: function(e,i){
      var padre = $(this);

        if($(this).find("div").length == 0){
          $(i.draggable).css({top:0,left:0}).appendTo(padre);
        }



    },
    over: function(e,i){
      //console.log($(this).find("div").length);
    }
  });


});
