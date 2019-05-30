// from hw_data.js
var tableData = data;
var table=d3.select("table");
var tbody =d3.select("tbody");

  
data.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.values(ufo).forEach(value => {row.append("td").text(value);});
});

// Select the submit button
button=d3.select("button")
button.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  var inputValue = d3.select("#datetime").property("value");
  console.log(inputValue);

  var filteredData =tableData.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);

  tbody.html(""); //clear
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.values(ufo).forEach(value => { row.append("td").text(value); });
  });
});

