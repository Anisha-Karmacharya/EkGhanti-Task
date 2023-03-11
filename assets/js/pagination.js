$(document).ready(function () {
  $("#ticketTable").after('<div id="pageNav"></div>');
  var visibleRows = 10;
  var totalRows = $("#ticketTable tbody tr").length;
  var numPages = totalRows / visibleRows;
  for (i = 0; i < numPages; i++) {
    var pageNum = i + 1;
    $("#pageNav").append('<a href="#" rel="' + i + '">' + pageNum + "</a> ");
  }
  $("#ticketTable tbody tr").hide();
  $("#ticketTable tbody tr").slice(0, visibleRows).show();
  $("#pageNav a:first").addClass("activePage");
  $("#pageNav a").bind("click", function () {
    $("#pageNav a").removeClass("activePage");
    $(this).addClass("activePage");
    var currPage = $(this).attr("rel");
    var startItem = currPage * visibleRows;
    var endItem = startItem + visibleRows;
    $("#ticketTable tbody tr")
      .css("opacity", "0.0")
      .hide()
      .slice(startItem, endItem)
      .css("display", "table-row")
      .animate({ opacity: 1 }, 300);
  });
});
