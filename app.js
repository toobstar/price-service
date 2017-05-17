//console.log('Hello World');

var Quandl = require("quandl");
var quandl = new Quandl({
    auth_token: "d2KxvT4HUd2WFxr9EJ41",
    api_version: 3
});

quandl.dataset({
    source: "ASX",
    table: "BHP"
}, {
    order: "asc",
    //exclude_column_names: true,
    start_date: "2017-01-30",
    end_date: "2017-02-10"
}, function(err, response){
    if(err)
        throw err;

    //console.log(response);

    var ds = JSON.parse(response).dataset;

    console.log(ds.data);
    console.log(ds.dataset_code);
    console.log(ds.name);
    console.log(ds.description);
    console.log(ds.refreshed_at);
    console.log(ds.column_names);
    console.log(ds.frequency);
    console.log(ds.start_date);
    console.log(ds.end_date);



});


//var http = require('http');
//
//var server = http.createServer(function(req, res) {
//    res.writeHead(200);
//    res.end('Hello Http');
//});
//server.listen(8080);