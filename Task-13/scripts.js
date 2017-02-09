$("form").submit(function(e){
  e.preventDefault();
});

  $("#search-btn").click(searchMusic);
  function searchMusic(){
    $("#spinner").addClass("fa fa-spinner fa-pulse fa-3x fa-fw");
    var val = $("#search").val();
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
