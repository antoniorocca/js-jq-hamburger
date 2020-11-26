var hamburger = $('.fa-bars');
var iconaPer = $('.fa-times');
var HamMenu = $('.hamburger-menu');

hamburger.click(function(){
  HamMenu.show(1000);
});

iconaPer.click(function(){
  HamMenu.hide(1000);
});


