var request = require("request");
var stock_url = "http://finance.yahoo.com/webservice/v1/symbols/FB/quote?format=json&view=%E2%80%8C%E2%80%8Bdetail";

request(stock_url, function (error, response, body) {
    console.log("response: ", response);
    response = JSON.parse(response);
    console.log("response2: ", response);
    if (!error && response.statusCode == 200) {
        var stock_data = body;
        console.log("Yahoo Finance API: ", stock_data)
        var stock_price = stock_data.list.resources[0].resource.fields.price;
        console.log("stock_price: ", stock_price);
    };
});