let apiOptions = {
    method: "",
    uri: "",
    resolveWithFullResponse: true
};

function getFormattedResourceUri(apiName, resourceName) {

    var baseUrl = `https://httpbin.org/${apiName}/${resourceName}`
    return baseUrl;
}

function getFormattedUri(apiName) {
    var baseUrl = `https://httpbin.org/${apiName}`
    return baseUrl
}

function logError(err) {
    console.log("API Validation Failed");
    return Promise.reject(new Error('test failed:'.concat(err.message)));
}

module.exports = {apiOptions, getFormattedResourceUri, getFormattedUri, logError}