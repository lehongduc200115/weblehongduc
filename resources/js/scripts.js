$(document).ready(
    function(){
        $('.mucluc').waypoint(
            function(direction){
                if(direction =="down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset:'600px'
            }
        )
        $('.gioithieuchung').waypoint(
            function(direction){
                if(direction =="down"){
                    $('.left-muc-luc').addClass('sticky2');
                }else{
                    $('.left-muc-luc').removeClass('sticky2');
                }
            },{
                offset:'600px'
            }
        )
        $('.about-hcmut').waypoint(
            function(direction){
                    $('.left-muc-luc').removeClass('sticky2');
                
            },{
                offset:'600px'
            }
        )
        $('.Quytrinh-phanloai').waypoint(
            function(direction){
                    $('.left-muc-luc').addClass('sticky2');
                
            },{
                offset:'-800px'
            }
        )
        $('a').click(function(){

            var the_id = $(this).attr("href");
            
                $('html, body').animate({
                    scrollTop:$(the_id).offset().top
                }, 'slow');
            
            return false;});
        /*-----------MAP--------*/
         
        /*----------TEST----------*/
        $('html, body').animate({
            scrollTop: $(".middle").offset().top
         }, 2000);
    }
)
new WOW().init();
var map;
function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(10.8813189,106.8060391),
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}