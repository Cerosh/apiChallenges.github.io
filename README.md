# Playwright API Testing Hub
This is a collection of exercises for API testing using Playwright. Special attention is given to utilising Playwright's features for API testing. The code is committed to different branches. The main branch contains the base code. The next branch, level 1, uses some more features of Playwright and tries to address the limitations identified in the base code. This is an evolving process, and the iteration continues.<br>
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
Credentials: The test scripts hardcode authentication credentials, posing a security risk and reducing flexibility.
- URLs: Endpoints and URLs are hardcoded, making the framework less adaptable to changes in the API environment or testing different environments.
- Repetitive Code: Repetitive code structures are present, leading to maintenance challenges and potential test inconsistencies.
- The current test report-sharing process could be more efficient due to manual file transfer, leading to potential delays, errors, and difficulty in managing versions.

<table>
  <tr>
    <td>Main</td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.1">Level 1</a></td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.2">Level 2</a></td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.3">Level 3</a></td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.4">Level 4</a></td>
  </tr>
</table>

All the exercises I have used are the challenges that  Alan Richardson created. He owns the demo application used to test the API. I want to thank him from the bottom of my heart for his efforts in creating these challenges and hosting this site free of cost for all new learners.
https://www.eviltester.com/page/tools/apichallenges/<br>
