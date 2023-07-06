const makeExpressCallback = (controller) => (request, response) => {
  const httpRequest = {
    body: request.body,
    query: request.query,
    params: request.params,
    ip: request.ip,
    method: request.method,
    path: request.url,
    headers: {
      'Content-Type': request.headers['content-type'],
      Referer: request.headers.referer,
      'User-Agent': request.headers['user-agent'],
    },
  };
  controller(httpRequest)
    .then((httpResponse) => {
      if (httpResponse.headers) {
        request.set(httpResponse.headers);
      }
      response.type('json');
      response.status(httpResponse.statusCode).send(httpResponse.body);
    })
    .catch(() => response.status(500).send({ error: 'An unkown error occurred.' }));
};

module.exports = makeExpressCallback;
