/**
 * @param {String} date
 * @returns {Object}
 */

function changeDate(date, value, str) {
    switch (str) {
        case 'years':
            date.setFullYear(date.getFullYear() + value);
            break;
        case 'months':
            date.setMonth(date.getMonth() + value);
            break;
        case 'days':
            date.setDate(date.getDate() + value);
            break;
        case 'hours':
            date.setHours(date.getHours() + value);
            break;
        case 'minutes':
            date.setMinutes()(date.getMinutes() + value);
            break;
    }
}

function formatDate(value) {
    if (String(value).length < 2) {
        return '0' + value;
    }
    else {
        return value;
    }
}


module.exports = function (date) {
    var arr = date.match(/\d{1,4}/g, date);

    var dateObject = {
        value: String(arr[0])+'-'+String(arr[1])+'-'+String(arr[2])+' '+String(arr[3])+':'+String(arr[4]), 

        add: function(num, str) {
            var tmparr = this.value.match(/\d{1,4}/g, this.value);
            var tmpdate = new Date(Date.UTC(tmparr[0], tmparr[1]-1, tmparr[2], tmparr[3], tmparr[4], 0, 0));


        }
    }

    
};
