# httpbintest

## About

This project is to validate the various end points of the rest api [httpbin](https://httpbin.org/). As part of the validation we are covering both the positive and negative tests.

## Features

1. Status Codes
2. Image
3. Response Format

## Test Cases

### Status Codes

| S.no | Testcase                       | Expected Result                   |
| ---- | ------------------------------ | --------------------------------- |
| 1    | Get status/200                 | API should return 200 status code |
| 2    | Put status/201                 | API should return 201 status code |
| 3    | Post status/201                | API should return 201 status code |
| 4    | Patch status/201               | API should return 201 status code |
| 5    | Delete status/204              | API should return 204 status code |
| 6    | Get "statuss" invalid resource | API should return 404 status code |
| 7    | Get status/201 202             | API should return 400 status code |
| 8    | Get status/                    | API should return 404 status code |

### Image

| S.no | Testcase                                  | Expected Result                        |
| ---- | ----------------------------------------- | -------------------------------------- |
| 1    | Get image/                                | API should return image                |
| 2    | Get image/jpeg                            | API should return jpeg image           |
| 3    | Get image/png                             | API should return png image            |
| 4    | Get image/svg                             | API should return svg image            |
| 5    | Get image/webp                            | API should return webp image           |
| 6    | Get images, invalid path                  | API should return error, with code 404 |
| 7    | Get image/jpege, invalid image type       | API should return error, with code 404 |
| 8    | Delete image/jpeg, unsupported api method | API should return error, with code 405 |

### Response Format

| S.no | Testcase                | Expected Result                                 |
| ---- | ----------------------- | ----------------------------------------------- |
| 1    | Get json                | API should return json format response          |
| 2    | Get brotli              | API should return brotli format response        |
| 3    | Get xml                 | API should return xml format response           |
| 4    | Get encoding/utf8       | API should return encoding/utf8 format response |
| 5    | Get deny                | API should return deny rules                    |
| 6    | Get html                | API should return html format response          |
| 7    | Get htm ivalid resource | API should return error response, 404 code      |
| 8    | Delete xml              | API should return error response, 405 code      |

## Technology

We used JS based libs to create and execute the tests.

- mocha
- request
- request-promise
- mochawesome

## Test Execution Steps

### Pre-Requisite:

1. You need to have nodejs in your machine if not install [nodejs](https://nodejs.org/en)

### Steps to run the test:

1. Download the project as zip file or clone the project.
2. If it is zip file, unzip the downloaded file
3. Go to the project dir: `httpbintest/`
4. Test project has dependencies that need to be installed. execute the command: `npm install`
5. Once the installation successfully completed, run the test command: `npm run test`
6. Once the execution got completed the test report will be generated in the folder: `httpbintest-master/mochawesome-report/mochawesome.html`

---
