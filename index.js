// Local Includes
var STATES_DATA                                 = require(__dirname + '/statesData.js');

// System Includes
var NODE_RATIFY                                 = require('node-ratify');

var US_STATE_NAME_TO_CODE                       = STATES_DATA['US_STATE_NAME_TO_CODE'],
    US_STATE_CODE_TO_NAME                       = { },
    US_INHABITED_TERRITORIES_NAME_TO_CODE       = STATES_DATA['US_INHABITED_TERRITORIES_NAME_TO_CODE'],
    US_INHABITED_TERRITORIES_CODE_TO_NAME       = { },
    US_STATE_NAME_TO_CAPITAL                    = STATES_DATA['US_STATE_NAME_TO_CAPITAL'],
    US_CAPITAL_TO_STATE_NAME                    = { },
    US_INHABITED_TERRITORIES_NAME_TO_CAPITAL    = STATES_DATA['US_INHABITED_TERRITORIES_NAME_TO_CAPITAL'],
    US_CAPITAL_TO_INHABITED_TERRITORY_NAME      = { };

var STATE_NAME_STRICT                           = [ ],
    STATE_NAME_ALL                              = [ ],
    STATE_CODE_STRICT                           = [ ],
    STATE_CODE_ALL                              = [ ];

//
// Create reverse mapping
//
function _reverseAndPrecompute () {
    STATE_NAME_STRICT = Object.keys(US_STATE_NAME_TO_CODE);

    var territoryKeys = Object.keys(US_INHABITED_TERRITORIES_NAME_TO_CODE);

    (STATE_NAME_STRICT || []).forEach(function(stateName) {
        US_STATE_CODE_TO_NAME[US_STATE_NAME_TO_CODE[stateName]] = stateName;
        US_CAPITAL_TO_STATE_NAME[US_STATE_NAME_TO_CAPITAL[stateName]] = stateName;
    });

    (territoryKeys || []).forEach(function(territoryName) {
        US_INHABITED_TERRITORIES_CODE_TO_NAME[US_INHABITED_TERRITORIES_NAME_TO_CODE[territoryName]] = territoryName;
        US_CAPITAL_TO_INHABITED_TERRITORY_NAME[US_INHABITED_TERRITORIES_NAME_TO_CAPITAL[territoryName]] = territoryName;
    });

    // Let us precompute now
    STATE_CODE_STRICT   = Object.keys(US_STATE_CODE_TO_NAME);
    STATE_NAME_ALL      = (STATE_NAME_STRICT || []).concat(territoryKeys);
    STATE_CODE_ALL      = (STATE_CODE_STRICT || []).concat(Object.keys(US_INHABITED_TERRITORIES_CODE_TO_NAME));
};

function _toTitleCase(str) {
    if (str && NODE_RATIFY.isString(str)) {
        str = str.trim();
        if (str.length > 2)
            return str.replace(/\b\w+/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        else
            return str.toUpperCase();
    }

    return null;
}

//
// Is given state code or state name is a valid state
//
function isUSAState (state, strict) {
    state = state && NODE_RATIFY.isString(state) ? _toTitleCase(state) : null;
    var topLevel = (US_STATE_CODE_TO_NAME[state] || US_STATE_NAME_TO_CODE[state]);

    if(strict) {
        return topLevel ? true : false;
    } else {
        return (US_INHABITED_TERRITORIES_CODE_TO_NAME[state] || US_INHABITED_TERRITORIES_NAME_TO_CODE[state] || topLevel) ? true : false;
    }
};

//
// Get all the USPS code
//
function getUSPSCodes(strict) {
    return strict ? STATE_CODE_STRICT : STATE_CODE_ALL;
};

//
// Get name of all the states
//
function getStates(strict) {
    return strict ? STATE_NAME_STRICT : STATE_NAME_ALL;
};

//
// Given a state USPS Code or state capital it finds the state name
//
function getStateName(searchKey, strict) {
    searchKey = searchKey && NODE_RATIFY.isString(searchKey) ? _toTitleCase(searchKey) : null;
    var topLevel = (US_STATE_CODE_TO_NAME[searchKey] || US_CAPITAL_TO_STATE_NAME[searchKey]);

    if(strict) {
        return topLevel;
    } else {
        return (US_INHABITED_TERRITORIES_CODE_TO_NAME[searchKey] || US_CAPITAL_TO_INHABITED_TERRITORY_NAME[searchKey] || topLevel);
    }
};

//
// Given a state name or state capital it finds the USPS Code
//
function getUSPSCode(searchKey, strict) {
    searchKey = searchKey && NODE_RATIFY.isString(searchKey) ? _toTitleCase(searchKey) : null;
    var topLevel = (US_STATE_NAME_TO_CODE[searchKey] || US_STATE_NAME_TO_CODE[US_CAPITAL_TO_STATE_NAME[searchKey]]);

    if(strict) {
        return topLevel;
    } else {
        searchKey = (searchKey === 'HagåTñA') ? 'Hagatna' : searchKey;
        return (US_INHABITED_TERRITORIES_NAME_TO_CODE[searchKey] ||
                US_INHABITED_TERRITORIES_NAME_TO_CODE[US_CAPITAL_TO_INHABITED_TERRITORY_NAME[searchKey]] ||
                topLevel);
    }
};

//
// Given a state name or state USPS code it finds the state capital
//
function getStateCapital(searchKey, strict) {
    searchKey = searchKey && NODE_RATIFY.isString(searchKey) ? _toTitleCase(searchKey) : null;
    var topLevel = (US_STATE_NAME_TO_CAPITAL[searchKey] || US_STATE_NAME_TO_CAPITAL[US_STATE_CODE_TO_NAME[searchKey]]);

    if(strict) {
        return topLevel;
    } else {
        return (US_INHABITED_TERRITORIES_NAME_TO_CAPITAL[searchKey] ||
                US_INHABITED_TERRITORIES_NAME_TO_CAPITAL[US_INHABITED_TERRITORIES_CODE_TO_NAME[searchKey]] ||
                topLevel);
    }
};

// Let us create state abbreviation and state name mapping
_reverseAndPrecompute();

exports = module.exports = {
    isUSAState      : isUSAState,
    getStates       : getStates,
    getUSPSCodes    : getUSPSCodes,
    getStateName    : getStateName,
    getUSPSCode     : getUSPSCode,
    getStateCapital : getStateCapital
};