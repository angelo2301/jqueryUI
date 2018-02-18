$(function() {
  $(".d").children().find("div").draggable({
   zIndex: 100,
   revert: true,
  });


  $(".d").children().droppable({
    drop: function(e,i){
      var padre = $(this);

      if(padre.find("span").text() == "vacio"){
        $(i.draggable).css({top:0,left:0}).appendTo(padre);
        padre.find("span").text("ocupado")
      }

      $(this).find("span").text("ocupado");
    },

    out: function(){
      $(this).find("span").text("vacio");
    }
  });


});
