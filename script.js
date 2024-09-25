import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuration
export let options = {
    stages: [
        { duration: '1m', target: 5 },  // ramp up to 5 users
        { duration: '1m', target: 5 },  // stay at 5 users for 1 minutes
        { duration: '1m', target: 0 },   // ramp down to 0 users
    ],
    insecureSkipTLSVerify: true,  // Skip SSL certificate verification
};

// Load Test with Authentication Header
export default function () {
    let url = 'https://34.87.56.110:6001/api/tools?platform=win&arch=x64';
    
    // Headers with API key
    let params = {
        headers: {
            'x-api-key': 'KMAF2XSZ5GW4VE8TR3JULP',
        },
    };

    // Make GET request to the endpoint with headers
    let res = http.get(url, params);
    
    // Check for status and response time
    check(res, {
        'status is 200': (r) => r.status === 200,
        'transaction time OK': (r) => r.timings.duration < 200,
    });
    
    sleep(1);  // sleep for 1 second between requests
}
