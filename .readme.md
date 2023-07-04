# HTTP Status Code Server

This is a simple Node.js application that mimics the behavior of httpstat.us. It allows you to define different HTTP status codes and returns a corresponding response. The responses can be customized by modifying the status codes array in the code.

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```
   npm install http
   ```

## Usage

1. Start the server by running the following command:

   ```
   node app.js
   ```

   The server will start running on port 3000.

2. Access different HTTP status codes by appending the desired code to `http://localhost:3000/`. For example:

   - `http://localhost:3000/200` will return a JSON response: `{"code":200,"message":"OK"}`.
   - `http://localhost:3000/201` will return a JSON response: `{"code":201,"message":"Created"}`.
   - `http://localhost:3000/400` will return a JSON response: `{"code":400,"message":"Bad Request"}`.

3. Customize the responses by modifying the `httpStatusCodes` array in the `app.js` file. Each object in the array should have a `code` and `message` property defining the HTTP status code and corresponding message, respectively.
