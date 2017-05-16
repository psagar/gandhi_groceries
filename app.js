/**
 * Created by pavansagar on 5/15/17.
 */

'use strict';

//require("./core/server");
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/dashboard', function (req, res) {
    dashboard.getList(req, res);
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});