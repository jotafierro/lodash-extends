'use strict';

const _ = {
        isNumber: require('lodash').isNumber,
        isUndefined: require('lodash').isUndefined,
        isString: require('lodash').isString,
        toLower: require('lodash').toLower,
        toString: require('lodash').toString,
    },
    switchParse = {
        'true': true, '1': true,
        'false': false, '0': false,
    };

module.exports = (value) => {
    if (_.isNumber(value)) value = _.toString(value);
    if (_.isUndefined(value)) return false;
    value = _.toLower(value);
    return switchParse[value];
};
