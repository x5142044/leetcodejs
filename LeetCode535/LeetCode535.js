
var urls = [];

var encode = function(longUrl) {
    uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

var decode = function(shortUrl) {
    return urls[uniqueKey];
