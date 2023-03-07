let mainmenu = $('.wrap .menu_box .menu .main')

mainmenu.click(function(){
    mainmenu.children().removeClass('on');
    $(this).children('a').addClass('on');
    $(this).children('ul').toggle();
  });