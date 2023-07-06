const express = require('express');

const { postProfile } = require('../../../adapters/profile/controllers');
const makeCallback = require('../../../adapters/profile/express-callback');

const router = express.Router();

router
  .post('/profile', makeCallback(postProfile));
// .get('/posts/:id', makeCallback(getPost))
// .delete('/posts/:id', makeCallback(deletePost));

module.exports = router;
