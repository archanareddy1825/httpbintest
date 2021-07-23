var apiRequest = require('request-promise');
var chai = require('chai');
var {apiOptions, getFormattedResourceUri, getFormattedUri, logError} = require('./baseTest')
var expect = chai.expect;

before(function () { console.log("Functionality: Status Code API | Validation Started") });

describe("Test cases to validate postivie scenarios for Status Code API.",  function () {
    
    var apiName = "status";
    it('API Request should return 200 for GET', function() {
        var statuCode = "200";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, statuCode);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200)
        })
        .catch(function(err) {
            return logError(err);
        });
    });
    
   

    it('API Request should return 201 for POST', function() {
        var statuCode = "201";
        apiOptions.method = "POST";
        apiOptions.uri = getFormattedResourceUri(apiName, statuCode);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(201)
        })
        .catch(function(err) {
            return logError(err);
        });
    });


    it('API Request should return 201 for PUT', function() {
        var statuCode = "201";
        apiOptions.method = "PUT";
        apiOptions.uri = getFormattedResourceUri(apiName, statuCode);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(201)
        })
        .catch(function(err) {
            return logError(err);
        });
    });


    it('API Request should return 201 for PATCH', function() {
        var statuCode = "201";
        apiOptions.method = "PATCH";
        apiOptions.uri = getFormattedResourceUri(apiName, statuCode);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(201)
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 204 for DELETE.', function() {
        var statuCode = "204";
        apiOptions.method = "DELETE";
        apiOptions.uri = getFormattedResourceUri(apiName, statuCode);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(204)
        })
        .catch(function(err) {
            return logError(err);
        });
    });
});


describe("Test cases to validate negative, invalid data scenarios for Status API.", function () {
    
    it('API Request should return 404.Invalid api path', function() {
        var apiName = "statuss";
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

    it('API Request should return 400. Invalid  status codes', function() {
        var apiName = "status";
        var statusCodes = "201 202";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, statusCodes);
        return apiRequest(apiOptions)
        .then(function () {
            return logError(err);
        })
        .catch(function(err) {
            expect(err.toString().includes("400")).to.be.true
        });
    });

    it('API Request should return 404. Empty status code', function() {
        var apiName = "image";
        var statusCodes = "";
        apiOptions.uri = getFormattedResourceUri(apiName, statusCodes);
        apiOptions.method = 'GET';
        return apiRequest(apiOptions)
        .then(function () {
            return logError(err);
        })
        .catch(function(err) {
            expect(err.toString().includes("404")).to.be.true
        });
    });
    
    
});



after(function () { console.log("Status Code | Validation Completed.") })