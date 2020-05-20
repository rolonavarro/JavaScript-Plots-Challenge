// Set the correct route
var choice_id = 0

// Load data from samples.json

// function optionChange() {

//   // Select the correct class 
//   var dropdown = d3.select("#selDataset")

//   var choice = dropdown.property("value")

//   (async function(){
//     var bdata = await d3.json("data/samples.json").catch(function(error) {
//       console.log(error);
//     });
//     console.log(bdata);

//     // log a list of names
//     var names = bdata.names;
//     console.log(names);

//     // For loop
//     var i;
//     for (i = 0; i < names.length; i++){
//       if(subject === names[i]) {
//         choice_id = i;
//       }
//     }
//   })()
// }


async function populateGraph(){
// Get data
var bdata = await d3.json("data/samples.json");

// Select names
var names = bdata.names;

// select sample
var samples = bdata.samples;
console.log(samples);

// Populate the dropdown menu
var dropdown = d3.select("#selDataset")
      .selectAll('option')
      .data(names);


dropdown.enter()
      .append('option')
      .merge(dropdown)
      .html(function(d){
        return d;
      });

// Assaign the right variables 
var sample_values = samples[0].sample_values;
var otu_ids = samples[0].otu_ids;
var otu_labels = samples[0].otu_labels;

// Slice the data so you get the top 10 vaues
ten_values = sample_values.slice(0, 10);
ten_labels = otu_labels.slice(0, 10);
ten_ids = otu_ids.slice(0, 10);

// Make the ids a string
ids = [];
    var i;
    for (i = 0; i < ten_ids.length; i++) {
        var string = String(ten_ids[i]);
        ids.push(`OTU ${string}`);
    }

// Create a bar graph
bar = [{
  x: ten_values. reverse(),
  y: ids,
  type: "bar",
  orientation: 'h'
}]

bar_layout = {
  title: 'Top ten bacteria in Subject',
  height: 700,
  width: 400,
  lables: ten_ids
};

Plotly.newPlot("bar",bar, bar_layout);
}

populateGraph();