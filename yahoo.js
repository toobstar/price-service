var yahooFinance = require('yahoo-finance');

//yahooFinance.historical({
//    symbol: 'AAPL',
//    from: '2017-01-01',
//    to: '2017-12-31'
//    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
//}, function (err, quotes) {
//    console.log('response');
//    console.log(err);
//    console.log(quotes);
//});

// https://github.com/pilwon/node-yahoo-finance
yahooFinance.snapshot({
    symbol: 'BHP.AX',
    fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],
}, function (err, snapshot) {
    console.log('response snapshot');
    console.log(err);
    console.log(snapshot);
});