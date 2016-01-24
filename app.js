var User = require('homebridge/lib/user').User;
var path = require('path');

var storagePath = './';
storagePath = path.resolve(storagePath);

User.setStoragePath(storagePath);

var homebridge = require('homebridge/bin/homebridge');
