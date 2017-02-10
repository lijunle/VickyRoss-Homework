$("form").submit(function(e){
  e.preventDefault();
  searchMusic();
});
var searchBtn = $("#search-btn");
var search = $("#search");
var spinner = $("#spinner");
var source = $("#musics-template").html();
var template = Handlebars.compile(source);
spinner.hide();
function searchMusic(){
  spinner.show();
  var val = search.val();
  $.getJSON("https://api.douban.com/v2/music/search?callback=?&q=" + val)
  .done(function(data){
    var context = data;
    console.log(context.musics);
    var html = template(context);
    $("#search-reslut").html(html);
    $("#spinner").hide();
  });
}
