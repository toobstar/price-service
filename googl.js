var googleFinance = require('google-finance');

//googleFinance.companyNews({
//    symbol: 'NASDAQ:AAPL'
//}, function (err, news) {
//    console.log('companyNews');
//    console.log(err);
//    console.log(news);
//});

googleFinance.historical({
    //symbol: 'NASDAQ:AAPL',
    symbol: 'ASX:CBA',
    from: '2017-05-01',
    to: '2017-05-20'
}, function (err, quotes) {
    console.log('historical');
    console.log(err);
    console.log(quotes);
});


//http://www.google.com/finance/historical?q=ASX%3ACBA&startdate=2017-05-01&enddate=2017-05-20&output=csv
//https://www.google.com/finance/historical?cid=676140&q=ASX%3ACBA&startdate=2017-05-01&enddate=2017-05-20&output=csv
//https://www.google.com/finance/historical?cid=676140&startdate=May+10%2C+2017&enddate=May+17%2C+2017&num=30&ei=gqsbWYGyGYm_0AS2sKyoBg
//https://www.google.com/finance/historical?q=ASX%3AANZ&ei=ia0bWaHoO4iA0ATour_ACA
//https://www.google.com/finance/historical?cid=675233&startdate=May+16%2C+2017&enddate=May+17%2C+2017&ei=qq0bWYDWDYSf0wSw1ZLgDQ