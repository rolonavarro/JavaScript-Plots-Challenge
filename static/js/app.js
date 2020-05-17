// Getting reference to the dropdown menu ("Test Subject ID") to select the observation
var dropdown = d3.select("select");

// Getting reference of the Demographic Table 
var demographic = d3.select(".panel-title");

// Use d3 to read the JSON file samples.json
(async function(){
  var bdata = await d3.json("samples.json").catch(function(error) {
    console.log(error);
  });
  console.log(bdata);

  var names = [bdata.names]

  names.forEach(function(something){
    console.log(something);
    var row = dropdown.append("options");

    });

})()


// var row = dropdown.append("options").text(something);