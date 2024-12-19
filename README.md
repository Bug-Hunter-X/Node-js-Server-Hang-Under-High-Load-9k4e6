# Node.js Server Hang Under High Load

This repository demonstrates a common but subtle issue in Node.js applications: server hangs under high load without providing explicit error messages. This often occurs when synchronous or blocking operations are performed within request handlers, leading to event loop starvation. The server appears unresponsive, and no error messages are logged to the console.

## Bug

The `server.js` file contains a simple HTTP server that responds with 'Hello, World!'.  However, it lacks proper handling for long-running operations, making it vulnerable to hanging under heavy load.

## Solution

The `server-solution.js` file demonstrates a solution that uses asynchronous operations to prevent blocking the event loop, ensuring the server remains responsive even under stress.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node server.js`.
4. Simulate high load using tools like `wrk` or `k6`.

Observe that the original server hangs, while the improved version remains responsive.