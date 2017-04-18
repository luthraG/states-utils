var US_STATE_NAME_TO_CODE       = {
        'Alaska'                                                : 'AK',
        'Alabama'                                               : 'AL',
        'American Samoa'                                        : 'AS',
        'Armed Forces Americas (except Canada)'                 : 'AA',
        'Armed Forces Europe, Middle East, Africa, and Canada'  : 'AE',
        'Armed Forces Pacific'                                  : 'AP',
        'Arkansas'                                              : 'AR',
        'Arizona'                                               : 'AZ',
        'California'                                            : 'CA',
        'Colorado'                                              : 'CO',
        'Connecticut'                                           : 'CT',
        'District of Columbia'                                  : 'DC',
        'Delaware'                                              : 'DE',
        'Federated States of Micronesia'                        : 'FM',
        'Florida'                                               : 'FL',
        'Georgia'                                               : 'GA',
        'Guam'                                                  : 'GU',
        'Hawaii'                                                : 'HI',
        'Iowa'                                                  : 'IA',
        'Idaho'                                                 : 'ID',
        'Illinois'                                              : 'IL',
        'Indiana'                                               : 'IN',
        'Kansas'                                                : 'KS',
        'Kentucky'                                              : 'KY',
        'Louisiana'                                             : 'LA',
        'Marshall Islands'                                      : 'MH',
        'Massachusetts'                                         : 'MA',
        'Maryland'                                              : 'MD',
        'Maine'                                                 : 'ME',
        'Michigan'                                              : 'MI',
        'Minnesota'                                             : 'MN',
        'Missouri'                                              : 'MO',
        'Mississippi'                                           : 'MS',
        'Montana'                                               : 'MT',
        'Northern Mariana Islands'                              : 'MP',
        'North Carolina'                                        : 'NC',
        'North Dakota'                                          : 'ND',
        'Nebraska'                                              : 'NE',
        'New Hampshire'                                         : 'NH',
        'New Jersey'                                            : 'NJ',
        'New Mexico'                                            : 'NM',
        'Nevada'                                                : 'NV',
        'New York'                                              : 'NY',
        'Ohio'                                                  : 'OH',
        'Oklahoma'                                              : 'OK',
        'Oregon'                                                : 'OR',
        'Palau'                                                 : 'PW',
        'Pennsylvania'                                          : 'PA',
        'Puerto Rico'                                           : 'PR',
        'Rhode Island'                                          : 'RI',
        'South Carolina'                                        : 'SC',
        'South Dakota'                                          : 'SD',
        'Tennessee'                                             : 'TN',
        'Texas'                                                 : 'TX',
        'Utah'                                                  : 'UT',
        'Virginia'                                              : 'VA',
        'Virgin Islands'                                        : 'VI',
        'Vermont'                                               : 'VT',
        'Washington'                                            : 'WA',
        'Wisconsin'                                             : 'WI',
        'West Virginia'                                         : 'WV',
        'Wyoming'                                               : 'WY',
    },

    US_STATE_CODE_TO_NAME       = { },

    US_STATE_NAME_UPPER_TO_CODE = { };

function _capitalize () {
    (Object.keys(US_STATE_NAME_TO_CODE) || []).forEach(function(stateName) {
        US_STATE_NAME_UPPER_TO_CODE[stateName.toUpperCase()] = US_STATE_NAME_TO_CODE[stateName];
    });
};

function _reverse () {
    (Object.keys(US_STATE_NAME_TO_CODE) || []).forEach(function(stateName) {
        US_STATE_CODE_TO_NAME[US_STATE_NAME_TO_CODE[stateName]] = stateName;
    });
};

//
// Is given state code or state name is a valid state
//
function isUSAState (state) {
    state = state ? state.toUpperCase() : null;
    return (US_STATE_CODE_TO_NAME[state] || US_STATE_NAME_UPPER_TO_CODE[state]) ? true : false;
};

//
// Get all the USPS code
//
function getUSPSCodes() {
    return Object.keys(US_STATE_CODE_TO_NAME);
};

//
// Get name of all the states
//
function getStates() {
    return Object.keys(US_STATE_NAME_TO_CODE);
};

//
// Given a state USPS Code it finds the state name
//
function getStateName(stateCode) {
    stateCode = stateCode ? stateCode.toUpperCase() : null;

    return US_STATE_CODE_TO_NAME[stateCode];
};

//
// Given a state name it finds the USPS Code
//
function getUSPSCode(state) {
    state = state ? state.toUpperCase() : null;

    return US_STATE_NAME_UPPER_TO_CODE[state];
};

// Let us create list of state name and state abbreviation with state name in capital case
_capitalize();

// Let us create state abbreviation and state name mapping
_reverse();

exports = module.exports = {
    isUSAState      : isUSAState,
    getStates       : getStates,
    getUSPSCodes    : getUSPSCodes,
    getStateName    : getStateName,
    getUSPSCode     : getUSPSCode
};