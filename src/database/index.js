const mongoose = require('mongoose');

const { dbUri, options } = require('../config/database.json');

mongoose.connect(dbUri, options);
mongoose.Promise = global.Promise;

module.exports = mongoose;