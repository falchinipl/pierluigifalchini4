
$(document).ready(function(){
function appari(a) {
    $( ".separa").animate({"opacity":"hide","paddingTop":"100px"},150);
   $( "#separa" + $(a).attr("target")).animate({"opacity":"show" ,"paddingTop":"40px"},150);

}
$(".appari").on("mouseenter",function(){  
  appari(this);
});
function scompari(a) {
  setTimeout(function(){
      $( "#separa" + $(a).attr("target")).animate({"opacity":"hide" ,"paddingTop":"100px"},150);

},1000)
}
$(".separa").on("mouseleave",function(){  
  scompari(this);


});

 var swiper = new Swiper('.swiper-container', {

        nextButton: '#button2',
        prevButton: '#button1',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
         
            1080: {
                slidesPerView: 2,
                spaceBetween: 30
            },
          
            682: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });


var conta=0;

$( ".hamburger" ).on("click",function() {
  conta++;

  console.log(conta);

    if(conta%2!=0){  
      $(".mobile").animate({"margin-left":"0px"},300);
      $(this).addClass("rotate").removeClass("rotate_uno");
  } else{
    $(".mobile").animate({"margin-left":"-340px"},300);
    $(this).addClass("rotate_uno").removeClass("rotate");
  }
});

 //configerations

 



function reload(uno,due,tre) {


  var attr = $(uno).attr("target");
 

   var questo=  $("#apri"+attr);
   var questo2=  $("#margin"+attr);

   questo.toggleClass("block");
    questo2.toggleClass("rotate2")
 
}
var chiudi= 0;


$(".appari3").on("click",function(){  
  chiudi++;
  console.log(chiudi);
reload( this,".black",".ruota3");



});

$(".black").on("click",function(){  

  
reload();



});

$("#slideshow > .opacity:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > .opacity:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4000);
});

$(function() {

    var $section = $('#restringi4');

    function loadDaBars() {
                $(".progress > span").each(function() {
                    $(this)
                        .data("origWidth", $(this).width())
                        .width(0),
                        $("#span1").animate({
                            width: "75%"
                        }, 200)
                        $("#span2").animate({
                            width: "61%"
                        }, 200)
                        $("#span3").animate({
                            width: "54%"
                        }, 200)
                        $("#span4").animate({
                            width: "100%"
                        }, 200)
                });
              

               
    }

    
  var root = 'json';

  $.get('html/template.html', function ( userTemplate ) {
    $.ajax({
      url: root + '/sommelier.json',
      method: 'GET', //GET, POST, PUT, DELETE
      contentType: 'application/json', //ask server to return json
      dataType: 'json', //says to server we are sending json
      //Call if request return successfully
      success: function (response) {
        var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
        for(var i = 0; i < 4 ; i ++) {
          var html = template(response[i]);
          $('#somm').append(html)
        }
      },
      //Call in case of request error
      error: function (request, errorType, errorMessage){
        alert('Error: ' + errorType + ', message: ' + errorMessage)
        console.log(request);
      }
    });
  });


    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
   

            // unbind event not to load scrolsl again
            $(document).unbind('scroll');

        }
    });

});

