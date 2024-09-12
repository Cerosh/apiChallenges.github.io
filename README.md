# Playwright API Testing Hub
**Features**
- Centralized Header Management: The fixture feature allows for defining shared headers in a single location, which are then applied across all relevant API requests. This centralization simplifies the codebase and ensures consistency in header management throughout the test suite.
- Reduced Code Duplication: We have significantly reduced code duplication by moving header logic to a base file. This streamlining results in cleaner, more maintainable code, and reduces the risk of errors associated with manually updating headers in multiple places.
- Improved Maintainability: Any changes to header configurations can now be made in one place, facilitating more accessible updates and ensuring that all test cases reflect the latest header requirements without requiring individual modifications.
- Enhanced Readability: With common functionality abstracted into fixtures, the test scripts focus more on the specific test logic, enhancing overall readability and making it easier for developers to understand and extend the test cases.<br>

**Limitations**<br>
- Credentials: The test scripts hardcode authentication credentials, posing a security risk and reducing flexibility.
- URLs: Endpoints and URLs are hardcoded, making the framework less adaptable to changes in the API environment or testing different environments.
- The current test report-sharing process could be more efficient due to manual file transfer, leading to potential delays, errors, and difficulty in managing versions.

<table>
  <tr>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/main">Main</a></td>
    <td>Level 1</a></td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.2">Level 2</a></td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.3">Level 3</a></td>
    <td><a href="https://github.com/Cerosh/apiChallenges.github.io/tree/level.4">Level 4</a></td>
  </tr>
</table>

All the exercises I have used are the challenges that  Alan Richardson created. He owns the demo application used to test the API. I want to thank him from the bottom of my heart for his efforts in creating these challenges and hosting this site free of cost for all new learners.
https://www.eviltester.com/page/tools/apichallenges/<br>
