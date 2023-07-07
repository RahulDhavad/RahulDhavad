$(function(){
    $("h2").dblclick(function(){
      $(this).hide();
    });
  });

  $(function(){
    $("input").focus(function(){
      $(this).css("background-color", "grey");
      $(this).css("color", "red");
      $(this).css("width", "300px");
      $(this).css("height", "20px");
    });
    $("input").blur(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "green");
      $(this).css("width", "200px");
    });
  });
  $(document).ready(function(){
    $("h1").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });
  
  $(function(){
  $("div").click(function(){
    $(this).fadeToggle();
  }

  );
  });
  $(function(){
    $("button").click(function(){
      $(".d1").fadeToggle(300);
      $(".d2").fadeToggle(500);
      $(".d3").fadeOut(100);
    }
  
    );
    });