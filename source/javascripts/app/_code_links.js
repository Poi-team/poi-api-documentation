$(function() {
  $(".highlight.json .err").each(function() {
    var text = $(this).text();
    var match = text.match(/<(.+)>/);
    if (match) {
      var object_name = match[1];
      console.log(match, object_name)
      $(this).empty();
      $("<a tooltip=\"Click to display structure\" tooltip-position=\"right\" href=\"" + window.location.pathname + "#" + object_name.toLowerCase() + "\" class=\"object-link\">" + "&#60;" + object_name + "&#62;" + "</a>").appendTo($(this));
      
    }
  })
});