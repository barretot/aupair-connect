const { left, right } = require('../../../shared/either');

const makePostProfile = ({ insertProfile }) => async (httpRequest) => {
  try {
    const { source = {}, ...profileParam } = httpRequest.body;
    source.ip = httpRequest.ip;
    source.browser = httpRequest.headers['User-Agent'];
    if (httpRequest.headers.Referer) {
      source.referrer = httpRequest.headers.Referer;
    }
    const posted = await insertProfile({
      ...profileParam,
    });

    return posted;
  } catch (e) {
    return left({
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 400,
      body: {
        error: e.message,
      },
    });
  }
};

module.exports = makePostProfile;
