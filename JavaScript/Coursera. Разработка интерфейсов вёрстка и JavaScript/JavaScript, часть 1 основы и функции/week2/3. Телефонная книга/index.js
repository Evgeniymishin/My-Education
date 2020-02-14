// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandName = command.split(' ')[0];

    if (commandName === 'ADD') {
        return addContact(command);
    }
    else if (commandName === 'SHOW') {
        return showContact(command);
    }
    else if (commandName === 'REMOVE_PHONE') {
        return removeContact(command);
    }


function addContact(command) {
    var arr = command.split(' ');
    var name = arr[1];
    var phones = arr[2].split(',');

    if (phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phoneBook[name].concat(phones);
    }
    else {
        phoneBook[name] = phones;
    }

    return phoneBook[name];
}


function removeContact(command) {
    var arr = command.split(' ');
    var phone = arr[1];
    var result = false;

    var keys = Object.keys(phoneBook);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        for (var j = 0; j < phoneBook[key].length; j++) {
            if (phone === phoneBook[key][j]) {
                result = true;
                phoneBook[key].splice(j, 1);
                break;
            }
        }
    }

    return result;
}



function showContact(command) {
    var arr = [];

    var keys = Object.keys(phoneBook);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (phoneBook[key].length > 0) {
            var tmp = key + ': ' + phoneBook[key].join(', ');
            arr.push(tmp)
        }
    }

    return arr.sort();
}



};
