/**

Potential server side rendering strategy

1. ask flux dispatcher to start tracking new store requests
2. start the render - this is syncronis so any store request that happen during render are of concern
3. ask flux dispatcher to stop tracking and notify when all tracked request have been resolved
4. repeat set 1-3 till no more requests are being produced (cap max number of renders)
5. once no more requests are being produced take the render output and return page

Some modules may have data dependency causing a new module to be rendered.
These in turn may have more data dependencies.
Hence the need for step 4.

*/

require('node-jsx').install({harmony: true});

var fs = require("fs");
var React = require("react");

var Router = require("react-router");

var app_router = require("../../client/app/app_router");
var router = require('express').Router({caseSensitive: true, strict: true});

//only read on startup
var template = fs.readFileSync(__dirname + "/../../client/app.html", {encoding:'utf8'});

//wildcard route to pass to react client app
router.get('*', function(req, res) {
  if(req.url == '/favicon.ico'){
    return res.status(404).end();
  }
  Router.renderRoutesToString(app_router, req.originalUrl).then(function(data){

    var html = template.replace(/\{\{body\}\}/, data.html);
    html = html.replace(/\{\{initialData\}\}/, JSON.stringify(data.initialData));
    res.send(html);

  }, function(err){
    console.error(err.stack);
    res.send("Error")
  });
});

module.exports = router;
