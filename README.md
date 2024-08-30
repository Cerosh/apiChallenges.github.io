# apiChallenges.github.io
**Features**
- Comprehensive API Testing:
  - GET Requests: Validate retrieval of data from endpoints.
  - POST Requests: Test creation of new resources and submission of data.
  - DELETE Requests: Verify the deletion of resources.
  - Status Codes: Check for correct HTTP status codes (e.g., 200, 404, 500).
  - OPTIONS Requests: Test for supported HTTP methods and CORS configurations.
  - HEAD Requests: Ensure headers are correctly returned without the response body.
- Authentication and Authorization:
  - Basic Authentication: Handle scenarios requiring basic authentication credentials.
  - Bearer Tokens: Support for APIs requiring bearer tokens for authorization.
- Variety of Data Types:
  - Different Data Types: Test APIs with various data formats (e.g., JSON, XML).
    
**Limitations**
- Credentials: Credentials for authentication are hardcoded into the test scripts, posing a security risk and reducing flexibility.
- URLs: Endpoints and URLs are hardcoded, making the framework less adaptable to changes in the API environment or testing different environments.
- Repetitive Code: Repetitive code structures are present, leading to maintenance challenges and potential inconsistencies across tests.
