// Use d3 to read the JSON file samples.json
function samples() {
    d3.json("samples.json").then(function(data) {
        
        var names = [data.names]
        console.log(Object.values(names));

        var dropDown = d3.select("#selDataset").append
    })
}
samples();


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", BacteriaInfo);

// This function is called when a dropdown menu item is selected
function BacteriaInfo() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

}

init();


