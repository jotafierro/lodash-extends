'use strict';

const _ = {
    reduce: require('lodash').reduce,
    set: require('lodash').set,
};

module.exports = (array) => _.reduce(array, (result, value, index) => {
    _.set(result, index, value);
    return result;
}, {});
