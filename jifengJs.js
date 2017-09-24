/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var ranString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
var URLS = {};
var genRandom = () => {
    var result = '';
    result = ranString.charAt(Math.floor(Math.random() * ranString.length));
    return result;
}

var encode = function(longUrl) {
    var shortUrl = genRandom();
    if(URLS[shortUrl]){
        shortUrl = genRandom();
    }
    URLS[shortUrl] = longUrl;
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
   return URLS[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */