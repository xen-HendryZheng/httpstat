const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Define the available HTTP status codes
  const httpStatusCodes = [
    { code: 200, message: 'OK' },
    { code: 201, message: 'Created' },
    { code: 202, message: 'Accepted' },
    { code: 400, message: 'Bad Request' },
    { code: 401, message: 'Unauthorized' },
    { code: 403, message: 'Forbidden' },
    { code: 404, message: 'Not Found' },
    { code: 405, message: 'Method Not Allowed' },
    { code: 406, message: 'Not Acceptable' },
    { code: 408, message: 'Request Timeout' },
    { code: 413, message: 'Payload Too Large' },
    { code: 415, message: 'Unsupported Media Type' },
    { code: 429, message: 'Too Many Requests' },
    { code: 500, message: 'Internal Server Error' },
    { code: 502, message: 'Bad Gateway' },
    { code: 503, message: 'Service Unavailable' },
    { code: 504, message: 'Gateway Timeout' },
  ];

  // Find the matching HTTP status code based on the URL
  const statusCodeObj = httpStatusCodes.find((obj) => `/${obj.code}` === url);
  const { code, message } = statusCodeObj || { code: 499, message: 'Error Code Not Found' };

  // Set the response headers
  const headers = {
    'Content-Type': 'application/json',
  };

  // Set the response body as a JSON object
  const responseBody = JSON.stringify({ code, message });

  // Send the response
  res.writeHead(code, headers);
  res.end(responseBody);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
