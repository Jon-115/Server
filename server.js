var cors_proxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
var host = 'https://tiny-platypus-800754.netlify.app';
// Listen on a specific port via the PORT environment variable
// var port = 8080;


cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    setHeader:{'Access-Control-Allow-Origin':'*'},
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
