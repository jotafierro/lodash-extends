'use strict';

const _ = {
    cloneDeep: require('lodash').cloneDeep,
    each: require('lodash').each,
    set: require('lodash').set,
    get: require('lodash').get,
    unset: require('lodash').unset,
    isNull: require('lodash').isNull,
    isUndefined: require('lodash').isUndefined,
    propsMatchFunction: $LEPath.include('/lib', 'propsMatchFunction.js'),
};

module.exports = (item, toUndefined) => {
    let object = _.cloneDeep(item);
    _.each(
        _.propsMatchFunction(object, (o) => _.isNull(o) || _.isUndefined(o)),
        (prop) => (toUndefined) ? _.set(object, prop, undefined) : _.unset(object, prop)
    );
    return object;
};