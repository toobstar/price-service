var dataForge = require('data-forge');
dataForge.use(require('data-forge-from-yahoo'));

dataForge.fromYahoo('ASX:BHP')
    .then(function (dataFrame) {
        console.log(dataFrame
            .take(5)
            .toString()
        );
    })
    .catch(function (err) {
        console.log(err.stack);
    });