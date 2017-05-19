var request = require('request');

//function run() {
//    request('http://www.skaffold.com/dstest_7938h', function (error, response, body) {
//        console.log('error:', error);
//        console.log('statusCode:', response && response.statusCode);
//        //console.log('body:', body);
//        if (response.statusCode == 200) {
//
//            processBody(body);
//
//        }
//    });
//}
//function test() {
//    var testStr = '{"NZM":{"date":"2017-05-18","close":"0.75","high":"0.75","low":"0.73","split":"","volume":45815},"SCP":{"date":"2017-05-18","close":"2.27","high":"2.29","low":"2.26","split":"","volume":4002044}}';
//    processBody(testStr);
//}
//test();

function processBody(body) {
    var resJson = JSON.parse(body);

    for (var ticker in resJson) {
        if (resJson.hasOwnProperty(ticker)) {
            console.log(ticker);
            var stockEntry = resJson[ticker];
            for (var k2 in stockEntry) {
                if (stockEntry.hasOwnProperty(k2)) {
                    console.log(k2 + " -> " + stockEntry[k2]);
                }
            }

        }
    }
}

PriceService.prototype = {
    fetch: function (url, callbackFn) {

        var testStr = '{"NZM":{"date":"2017-05-18","close":"0.75","high":"0.75","low":"0.73","split":"","volume":45815},"SCP":{"date":"2017-05-18","close":"2.27","high":"2.29","low":"2.26","split":"","volume":4002044}}';
        callbackFn(JSON.parse(testStr));

        //request(url, function (error, response, body) {
        //    console.log('error:', error);
        //    console.log('statusCode:', response && response.statusCode);
        //    //console.log('body:', body);
        //    if (response.statusCode == 200) {
        //        callbackFn(JSON.parse(body));
        //    }
        //});
    },
}

module.exports = PriceService;