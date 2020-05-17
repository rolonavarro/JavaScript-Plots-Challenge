// Getting reference to the dropdown menu ("Test Subject ID") to select the observation
var dropdown = d3.select("#selDataset");

// Getting reference of the Demographic Table 
var demographic = d3.select("h3");

// Use d3 to read the JSON file samples.json
(async function(){
  var bdata = await d3.json("samples.json").catch(function(error) {
    console.log(error);
  });
  console.log(bdata);

  var names = [bdata.names]

  names.forEach(function(something){
    console.log(something)

    var row = d3.select("#selDataset").append("options");

    });
  // d3.select("#selDataset")
  //   .data(names)
  //   .enter()
  //   .append("li")
  //   .text("1");
})()



// // Use d3 to read the JSON file samples.json
// function samples() {
//     d3.json("samples.json").then(function(data) {
        
//         var names = [data.names]
//         console.log(Object.values(names));

//         var dropDown = d3.select("#selDataset").append
//     })
// }
// samples();


// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", BacteriaInfo);

// // This function is called when a dropdown menu item is selected
// function BacteriaInfo() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

// }

// // init();


