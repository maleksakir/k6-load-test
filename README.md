# K6 Load Balancer Testing Project

This project uses K6 to perform load balancing tests on a private API endpoint. The test script uses an API key for authentication and simulates a load of 50 virtual users, testing the system's response under load.

## Prerequisites

- [K6](https://grafana.com/docs/k6/latest/set-up/install-k6/) must be installed on your local machine.

## Running the Tests

1. Clone this repository.
2. Modify the API endpoint or load parameters in `script.js` if necessary.
3. Run the test using K6:

   ```bash
   k6 run script.js
