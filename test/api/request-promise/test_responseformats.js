var apiRequest = require('request-promise');
var chai = require('chai');
var {apiOptions, getFormattedResourceUri, getFormattedUri, logError} = require('./baseTest')
var expect = chai.expect;


before(function () { console.log("Functionality: Response Format API | Validation Started") });

describe("Test cases to validate postivie scenarios for GET Response Format API.", function () {

   

    it('API Request should return 200. Validate json.', function() {
        var apiName = "json";
        apiOptions.uri = getFormattedUri(apiName);
        apiOptions.method = "GET";
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            let parsedResponse = JSON.parse(response.body);
            expect(parsedResponse['slideshow']).not.null;
            expect(response.body.toString().includes('"title": "Overview"')).to.be.true
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Validate brotli', function() {
        var apiName = "brotli";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedUri(apiName);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Validate xml', function() {
        var apiName = "xml";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedUri(apiName);
        return apiRequest(apiOptions)
        .then(function (response) {
            
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.body.toString().includes("xml")).to.be.true
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Validate endoding utf8', function() {
        var apiName = "encoding";
        var resourceName = "utf8";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName,resourceName);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.body.toString().includes("UTF-8 encoded sample plain-text file")).to.be.true
            
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Validate deny rules', function() {
        var apiName = "deny";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedUri(apiName);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.body.toString().includes("YOU SHOULDN'T BE HERE")).to.be.true
            
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Validate html', function() {
        var apiName = "html";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedUri(apiName);
        return apiRequest(apiOptions)
        .then(function (response) {
            
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.body.toString().includes("html")).to.be.true
        })
        .catch(function(err) {
            return logError(err);
        });
    });

});


describe("Test cases to validate negative, invalid data scenarios for Response Format API.", function () {
    
    
    it('API Request should return 404. Invalid  Response Format type', function() {
        var apiName = "htm";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedUri(apiName);
        return apiRequest(apiOptions)
        .then(function () {
            return logError(err);
        })
        .catch(function(err) {
            expect(err.toString().includes("404")).to.be.true
        });
    });

    it('API Request should return 405. Unsupported api method, delete', function() {
        var apiName = "xml";
        apiOptions.uri = getFormattedUri(apiName);
        apiOptions.method = 'DELETE';
        return apiRequest(apiOptions)
        .then(function () {
            return logError(err);
        })
        .catch(function(err) {
            expect(err.toString().includes("405")).to.be.true
        });
    });
    
    
});



after(function () { console.log("Response Format API | Validation Completed.") })



