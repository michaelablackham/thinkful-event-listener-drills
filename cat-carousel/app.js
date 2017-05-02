$(function() {
  $(".thumbnail").click(function(event){
    var imageSrc = $(this).find("img").attr("src");
    console.log(imageSrc);
    $(".hero").find("img").attr("src").replace(imageSrc);
  });
});
