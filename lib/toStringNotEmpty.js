'use strict';

const _ = {
    isString: require('lodash').isString,
    isEmpty: require('lodash').isEmpty,
};

module.exports = (str) => {
    if (_.isString(str) && !_.isEmpty(str)) return _.toString(str);
    return null;
};
