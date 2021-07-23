var apiRequest = require('request-promise');
var chai = require('chai');
var {apiOptions, getFormattedResourceUri, getFormattedUri, logError} = require('./baseTest')
var expect = chai.expect;


before(function () { console.log("Functionality: Image API | Validation Started") });

describe("Test cases to validate postivie scenarios for GET Image API.", function () {
    var apiName = "image";
    apiOptions.uri = getFormattedUri(apiName);
    it('API Request should return 200.', function() {
        apiOptions.method = "GET";
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Return the jpeg image', function() {
        var imageType = "jpeg";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, imageType);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.headers['content-type']).equal('image/jpeg');
        })
        .catch(function(err) {
            return logError(err);
        });
    });
    
    it('API Request should return 200. Return the png image', function() {
        var imageType = "png";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, imageType);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.headers['content-type']).equal('image/png');
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200. Return the svg image', function() {
        var imageType = "svg";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, imageType);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.headers['content-type']).equal('image/svg+xml');
        })
        .catch(function(err) {
            return logError(err);
        });
    });

    it('API Request should return 200.Return the webp image', function() {
        var imageType = "webp";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, imageType);
        return apiRequest(apiOptions)
        .then(function (response) {
            expect(response.statusCode).equal(200);
            expect(response.body).not.null;
            expect(response.headers['content-type']).equal('image/webp');
        })
        .catch(function(err) {
            return logError(err);
        });
    });
});


describe("Test cases to validate negative, invalid data scenarios for Image API.", function () {
    
    it('API Request should return 404.Invalid api path', function() {
        var apiName = "images";
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

    it('API Request should return 404. Invalid  image type', function() {
        var apiName = "image";
        var imageType = "jpege";
        apiOptions.method = "GET";
        apiOptions.uri = getFormattedResourceUri(apiName, imageType);
        return apiRequest(apiOptions)
        .then(function () {
            return logError(err);
        })
        .catch(function(err) {
            expect(err.toString().includes("404")).to.be.true
        });
    });

    it('API Request should return 405. Unsupported api method, delete', function() {
        var apiName = "image";
        var imageType = "jpeg";
        apiOptions.uri = getFormattedResourceUri(apiName, imageType);
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


after(function () { console.log("Image API | Validation Completed.") })



