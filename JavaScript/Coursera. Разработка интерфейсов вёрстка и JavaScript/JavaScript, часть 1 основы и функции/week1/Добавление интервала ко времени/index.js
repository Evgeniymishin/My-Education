/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if ((hours >= 0 && hours <=23) && (minutes >=0 && minutes <= 59)) {
        var a = (hours + Math.floor((minutes + interval) / 60)) % 24;
        var b = (minutes + interval) % 60;
        if (a < 10) {
            a = "0" + a;
        }
        if (b < 10) {
            b = "0" + b;
        }
        return a + ":" + b;
    }
    
};
