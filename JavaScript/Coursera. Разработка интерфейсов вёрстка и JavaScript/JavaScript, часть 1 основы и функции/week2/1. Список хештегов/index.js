/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];

    if (tweet.indexOf("#") == -1) {
        return result;
    }

    else {
        var tmp = tweet.split(" ");
        for (var i = 0; i < tmp.length; i++) {
            if (tmp[i].indexOf("#") != -1) {
                result.push(tmp[i].slice(1));
            } 
        }
        return result;
    }
};
