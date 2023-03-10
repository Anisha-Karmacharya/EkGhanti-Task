
$(function () {
  $("#navigation").load("../../component/sideNav.html");
});
$(function () {
  $("#header__right").load("../../component/topNav.html");
});
$(document).ready(function () {
  $("#content").css("display", "none");

  $("#content").fadeIn(2000);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("#content").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});

$(document).ready(function(){
  $('#ticketTable').after('<div id="pageNav"></div>');
  var visibleRows = 5;
  var totalRows = $('#ticketTable tbody tr').length;
  var numPages = totalRows/visibleRows;
  for(i = 0;i < numPages;i++) {
      var pageNum = i + 1;
      $('#pageNav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
  }
  $('#ticketTable tbody tr').hide();
  $('#ticketTable tbody tr').slice(0, visibleRows).show();
  $('#pageNav a:first').addClass('activePage');
  $('#pageNav a').bind('click', function(){

      $('#pageNav a').removeClass('activePage');
      $(this).addClass('activePage');
      var currPage = $(this).attr('rel');
      var startItem = currPage * visibleRows;
      var endItem = startItem + visibleRows;
      $('#ticketTable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
      css('display','table-row').animate({opacity:1}, 300);
  });
});

// #CHART
// set the dimensions and margins of the graph
var width = 450;
height = 350;
margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", "0 300 700 250")
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + "350" + ")");

// Create dummy data
var data = { "IME Pay": 9, "IME Remittance": 20, "Call Not Connected": 30 };

// set the color scale
var color = d3
  .scaleOrdinal()
  .domain(data)
  .range(["#7CB9E8", "#007FFF", "#00308F"]);

// Compute the position of each group on the pie:
var pie = d3.pie().value(function (d) {
  return d.value;
});
var data_ready = pie(d3.entries(data));
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
var arcGenerator = d3.arc().innerRadius(80).outerRadius(radius);

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll("mySlices")
  .data(data_ready)
  .enter()
  .append("path")
  .attr("d", arcGenerator)
  .attr("fill", function (d) {
    return color(d.data.key);
  })
  // .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7);

// Now add the annotation. Use the centroid method to get the best coordinates
svg
  .selectAll("mySlices")
  .data(data_ready)
  .enter()
  .append("text")
  .text(function (d) {
    return d.data.value;
  })
  .attr("transform", function (d) {
    return "translate(" + arcGenerator.centroid(d) + ")";
  })
  .style("text-anchor", "middle")
  .style("font-size", 20)
  .style("fill", "#131313")
  .style("font-weight", 600);

// Add one dot in the legend for each name.
var size = 20;
svg
  .selectAll("mydots")
  .data(data_ready)
  .enter()
  .append("rect")
  .attr("x", 150)
  .attr("y", function (d, i) {
    return -50 + i * (size + 5);
  }) // 100 is where the first dot appears. 25 is the distance between dots
  .attr("width", size)
  .attr("height", size)
  .style("fill", function (d) {
    return color(d.data.key);
  });

// Add one dot in the legend for each name.
svg
  .selectAll("mylabels")
  .data(data_ready)
  .enter()
  .append("text")
  .attr("x", 170 + size * 1.2)
  .attr("y", function (d, i) {
    return -40 + i * (size + 5);
  }) // 100 is where the first dot appears. 25 is the distance between dots
  .style("fill", "#1e1e1e")
  .style("font-size", 18)
  .text(function (d) {
    return d.data.key;
  })
  .attr("text-anchor", "left")
  .style("alignment-baseline", "middle");

// --++++++++++++++++++++++++++++++++++++++++++++++++++++++
// set the dimensions and margins of the graph

// set the dimensions and margins of the graph
var width = 450;
height = 350;
margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg2 = d3
  .select("#my_dataviz2")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", "0 300 700 250")
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + "350" + ")");
// Create dummy data
var data = { Urgent: 9, high: 30 };

// set the color scale
var color = d3.scaleOrdinal().domain(data).range(["#F0997D", "#D3756B"]);

// Compute the position of each group on the pie:
var pie = d3.pie().value(function (d) {
  return d.value;
});
var data_ready = pie(d3.entries(data));
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
var arcGenerator = d3.arc().innerRadius(80).outerRadius(radius);

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg2
  .selectAll("mySlices")
  .data(data_ready)
  .enter()
  .append("path")
  .attr("d", arcGenerator)
  .attr("fill", function (d) {
    return color(d.data.key);
  })
  // .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7);

// Now add the annotation. Use the centroid method to get the best coordinates
svg2
  .selectAll("mySlices")
  .data(data_ready)
  .enter()
  .append("text")
  .text(function (d) {
    return d.data.value;
  })
  .attr("transform", function (d) {
    return "translate(" + arcGenerator.centroid(d) + ")";
  })
  .style("text-anchor", "middle")
  .style("font-size", 20)
  .style("fill", "#131313")
  .style("font-weight", 600);

// Add one dot in the legend for each name.
var size = 20;
svg2
  .selectAll("mydots")
  .data(data_ready)
  .enter()
  .append("rect")
  .attr("x", 150)
  .attr("y", function (d, i) {
    return -50 + i * (size + 5);
  }) // 100 is where the first dot appears. 25 is the distance between dots
  .attr("width", size)
  .attr("height", size)
  .style("fill", function (d) {
    return color(d.data.key);
  });

// Add one dot in the legend for each name.
svg2
  .selectAll("mylabels")
  .data(data_ready)
  .enter()
  .append("text")
  .attr("x", 170 + size * 1.2)
  .attr("y", function (d, i) {
    return -40 + i * (size + 5);
  }) // 100 is where the first dot appears. 25 is the distance between dots
  .style("fill", "#1e1e1e")
  .style("font-size", 18)
  .text(function (d) {
    return d.data.key;
  })
  .attr("text-anchor", "left")
  .style("alignment-baseline", "middle");

// set the dimensions and margins of the graph
var width = 450;
height = 350;
margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg3 = d3
  .select("#my_dataviz3")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", "25 300 700 250")
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + "350" + ")");

// Create dummy data
var data = {
  "In Progress": 20,
  "Closed": 50,
  "Raised and Closed": 100,
  "Closed Call Not Connected": 40,
};

// set the color scale
var color = d3
  .scaleOrdinal()
  .domain(data)
  .range(["#E8D5C4", "#FFF1DC", "	#3A98B9", "#EEEEEE"]);

// Compute the position of each group on the pie:
var pie = d3.pie().value(function (d) {
  return d.value;
});
var data_ready = pie(d3.entries(data));
// Now I know that group A goes from 0 degrees to x degrees and so on.

// shape helper to build arcs:
var arcGenerator = d3.arc().innerRadius(80).outerRadius(radius);

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg3
  .selectAll("mySlices")
  .data(data_ready)
  .enter()
  .append("path")
  .attr("d", arcGenerator)
  .attr("fill", function (d) {
    return color(d.data.key);
  })
  // .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7);

// Now add the annotation. Use the centroid method to get the best coordinates
svg3
  .selectAll("mySlices")
  .data(data_ready)
  .enter()
  .append("text")
  .text(function (d) {
    return d.data.value;
  })
  .attr("transform", function (d) {
    return "translate(" + arcGenerator.centroid(d) + ")";
  })
  .style("text-anchor", "middle")
  .style("font-size", 18)
  .style("fill", "#131313")
  .style("font-weight", 600);

// Add one dot in the legend for each name.
var size = 20;
svg3
  .selectAll("mydots")
  .data(data_ready)
  .enter()
  .append("rect")
  .attr("x", 150)
  .attr("y", function (d, i) {
    return -50 + i * (size + 5);
  }) // 100 is where the first dot appears. 25 is the distance between dots
  .attr("width", size)
  .attr("height", size)
  .style("fill", function (d) {
    return color(d.data.key);
  });

// Add one dot in the legend for each name.
svg3
  .selectAll("mylabels")
  .data(data_ready)
  .enter()
  .append("text")
  .attr("x", 170 + size * 1.2)
  .attr("y", function (d, i) {
    return -40 + i * (size + 5);
  }) // 100 is where the first dot appears. 25 is the distance between dots
  .style("fill", "#1e1e1e")
  .style("font-size", 18)
  .text(function (d) {
    return d.data.key;
  })
  .attr("text-anchor", "left")
  .style("alignment-baseline", "middle");

