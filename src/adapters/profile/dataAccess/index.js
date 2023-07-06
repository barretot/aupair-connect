/* interfaces/post/data-access/index.js */
const makeDb = require('../../../infra/profile/db');

const makeProfileDb = require('./profileDb');

// Injection
const profileDb = makeProfileDb({ makeDb });

module.export = profileDb;
