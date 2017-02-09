$("form").submit(function(e){
  e.preventDefault();
});
var searchBtn = $("#search-btn");
var search = $("#search");
var title = $("#title");
title.hover(function(){
  title.addClass("infinite");
},function(){
  title.removeClass("infinite");
});
search.focus(function(){
  search.addClass("focus-search");
});
search.blur(function(){
  search.removeClass("focus-search");
});

  searchBtn.click(searchMusic);
  function searchMusic(){
    $("#spinner").addClass("fa fa-spinner fa-pulse fa-3x fa-fw");
    var val = search.val();
    $.getJSON("https://api.douban.com/v2/music/search?callback=?&q=" + val)
    .done(function(data){
      var context = data;
      console.log(context.musics);
      var source = $("#musics-template").html();
      var template = Handlebars.compile(source);
      var html = template(context);
      $("#search-reslut").html(html);
      $("#spinner").hide();
    });
  }
