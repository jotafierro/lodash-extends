'use strict';

require('wrapper-path').init({pathRoot: __dirname, prefix: '$LE', inGlobal: true});
let _ = require('lodash');

module.exports = (() => {
    let libs = [
        'assignNotRewrite', 'existInArray', 'existOneInArray',
        'formatStringWithDictionary', 'isArrayObjectWithProp',
        'isFloat', 'isStringNotEmpty', 'isUndefinedOrNull',
        'isUndefinedSet', 'mergeWithArrayConcat', 'paginate',
        'propsMatchFunction', 'randomColor', 'randomString',
        'toBoolean', 'toNumberIsEmptyOrUndefinedToNull',
        'toNumberIsEmptyOrUndefinedToUndefined', 'toNumberIsNaNToNull',
        'toNumberIsNaNToZero', 'toPercentage', 'uuid', 'validPercentage',
        'toStringNotEmpty', 'cleanObject', 'keyByIndex',
    ];
    _.each(libs, (lib) => {
        if (_.isUndefined(_[lib]))
            _[lib] = $LEPath.include('/lib', lib + '.js');
    });

    _['format'] = $LEPath.include('/lib', 'formatStringWithDictionary.js');
    _['props'] = $LEPath.include('/lib', 'propsMatchFunction.js');

    return _;
})();
