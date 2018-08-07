
var s = skrollr.init();
$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
   $(".navbar").removeClass("navbar-top");
  else
      $(".navbar").addClass("navbar-top");
});


// ............


$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  console.log(x);
  
  $("#cursor").css("left",x+"px");
  $("#cursor").css("top",y+"px");
  
  
  if (x<$(window).width()/2 - 50){
    $("#fish").attr("src","images/fish_1.png");
  }else if (x>$(window).width()/2 + 50){
    $("#fish").attr("src","images/fish3.png");
  }else{
    $("#fish").attr("src","images/fish.png");
  }
  if (x<$(window).width()/2 - 50 && y<$(window).height()/2){
    $("#fish").attr("src","images/fish2.png");
  }
  if (x>$(window).width()/2 + 50 && y<$(window).height()/2){
    $("#fish").attr("src","");
  }
  
  
});