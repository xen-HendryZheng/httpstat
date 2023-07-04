const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Define the available HTTP status codes
  const httpStatusCodes = [
    { code: 200, message: 'OK' },
    { code: 201, message: 'Created' },
    { code: 400, message: 'Bad Request' },
    { code: 401, message: 'Unauthorized' },
    { code: 404, message: 'Not Found' },
    { code: 500, message: 'Internal Server Error' },
  ];

  // Find the matching HTTP status code based on the URL
  const statusCodeObj = httpStatusCodes.find((obj) => `/${obj.code}` === url);
  const { code, message } = statusCodeObj || { code: 404, message: 'Not Found' };

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
