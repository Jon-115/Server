var cors_proxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
var host = 'https://railway.app/railway.schema.json';
// Listen on a specific port via the PORT environment variable
// var port = 8080;

// export CORSANYWHERE_WHITELIST='https://djdogserver2.herokuapp.com/'


cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    setHeader:{'Access-Control-Allow-Origin':'*'},
}).listen(process.env.PORT || 3001, function() {
    console.log('Running CORS Anywhere on ' + host);
});
