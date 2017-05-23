var request = require('request');

function PriceService() {
    var fetch = function (url, callbackFn) {

        //var testStr = '[{"ticker":"NZM", "date":"2017-05-18","close":"0.75","high":"0.75","low":"0.73","split":"","volume":45815},{"ticker":"SCP","date":"2017-05-18","close":"2.27","high":"2.29","low":"2.26","split":"","volume":4002044}]';
        //callbackFn(JSON.parse(testStr));

        request(url, function (error, response, body) {
            if (error) {
                console.log('error:', error);
                return;
            }
            else if (response.statusCode == 200) {
                callbackFn(JSON.parse(body));
                return;
            }
            console.log('error response:', response);
        });
    };

    var obj = {};
    obj.fetch = fetch;
    return obj;
}

module.exports = PriceService;