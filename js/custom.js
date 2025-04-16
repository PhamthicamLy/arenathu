// JavaScript Document
$(document).ready(function(){
  $(".btn-close").click(function(){
    $(".quangcao").hide();
	   $(".overlay").hide();
  });
});
$(".btn-toggle").click(function(){
    $("#menu").slideToggle();
	 });