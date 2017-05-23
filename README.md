# states-utils
A rich library that provides various utility functions to get/check name or USPS code or state capital of states and much more

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install states-utils --save
```

### Usage

```javascript
var STATE_UTILS = require('states-utils');

STATE_UTILS.isUSAState('CA');
//=> true

STATE_UTILS.getStateName('CA');
//=> California

STATE_UTILS.getUSPSCode('New York');
//=> NY

```

### Clone the repo

```bash
$ git clone https://github.com/luthraG/states-utils.git
```

### API

#### isUSAState(key, strict)

This API takes two parameters 
1. key <String> 	: It could either be state name or USPS code. It returns boolean value indicating if provided value if valid US state
2. strict<Boolean>  : It is an optional parameter which when set to true then it does not check for associated states, inhabited territories and federal districts rather it only checks 50 US states

**Example**

```javascript
var STATE_UTILS = require('states-utils');


// USPS code in upper case
STATE_UTILS.isUSAState('IA');
//=> true

// USPS code in lower case
STATE_UTILS.isUSAState('ca');
//=> true

// Invalid USPS code
STATE_UTILS.isUSAState('GL');
//=> false

// State name in title case
STATE_UTILS.isUSAState('Indiana');
//=> true

// State name in upper case
STATE_UTILS.isUSAState('NEW YORK');
//=> true

// Invalid state name
STATE_UTILS.isUSAState('New Delhi');
//=> false

// No state name provided
STATE_UTILS.isUSAState();
//=> false

// Check for an associated state
STATE_UTILS.isUSAState('Marshall Islands');
//=> true

// With strict parameter set to true
STATE_UTILS.isUSAState('Marshall Islands', true);
//=> false

// Check for an inhabited territory
STATE_UTILS.isUSAState('Guam');
//=> true

// With strict parameter set to true
STATE_UTILS.isUSAState('Guam', true);
//=> false

```

#### getStates(strict)

This API returns all the state names of The united States of America.
1. It takes an optional parameter - strict which when set to true returns only 50 state names of USA else it returns name of associated states, inhabited territories and federal districts as well besides 50 states of USA

**Example**

```javascript
var STATE_UTILS = require('states-utils');


STATE_UTILS.getStates();
//=> ['Alaska', 'Alabama', ......, 'Texas', ...]

// When strict parameter is not present
STATE_UTILS.getStates().length;
//=> 59

// When strict parameter is set to false
STATE_UTILS.getStates(false).length;
//=> 59

// When strict parameter is set to true
STATE_UTILS.getStates(true).length;
//=> 50

```

#### getUSPSCodes(strict)

This API returns the USPS codes for all the states of The united States of America.
1. It takes an optional parameter - strict which when set to true returns only 50 state USPS codes else it returns USPS codes of associated states, inhabited territories and federal districts as well besides 50 states of USA

**Example**

```javascript
var STATE_UTILS = require('states-utils');

STATE_UTILS.getUSPSCodes();
//=> ['AK', 'AL', ......, 'TX', ...]

// When strict parameter is not present
STATE_UTILS.getUSPSCodes().length;
//=> 59

// When strict parameter is set to false
STATE_UTILS.getUSPSCodes(false).length;
//=> 59

// When strict parameter is set to true
STATE_UTILS.getUSPSCodes(true).length;
//=> 50

```

#### getStateName(key, strict)

Given the USPS code or state capital, this API returns the state name for a valid US state. It takes two parameters:
1. key <String> 	: It could either be state capital name or USPS code.
2. strict<Boolean>  : It is an optional parameter which when set to true then it does not check for associated states, inhabited territories and federal districts rather it only checks 50 US states

**Example**

```javascript
var STATE_UTILS = require('states-utils');


// USPS code in upper case
STATE_UTILS.getStateName('TX');
//=> 'Texas'

// USPS code in lower case
STATE_UTILS.getStateName('ca');
//=> 'California'

// USPS code with strict set to false for an inhabited territory
STATE_UTILS.getStateName('GU', false);
//=> 'Guam'

// USPS code with strict set to true for an inhabited territory
STATE_UTILS.getStateName('GU', true);
//=> undefined

// Invalid USPS code
STATE_UTILS.getStateName('GL');
//=> undefined

// A valid capital name
STATE_UTILS.getStateName('Phoenix');
//=> 'Arkansas'

// An invalid capital name
STATE_UTILS.getStateName('ca');
//=> undefined

// Capital name with strict set to false for an inhabited territory state
STATE_UTILS.getStateName('Pago Pago', false);
//=> 'American Samoa'

// Capital name with strict set to true for an inhabited territory state
STATE_UTILS.getStateName('Pago Pago', true);
//=> undefined

```

#### getUSPSCode(key, strict)

Given the state name, this API returns the USPS code for a valid US state.
1. key <String> 	: It could either be state capital name or state name.
2. strict<Boolean>  : It is an optional parameter which when set to true then it does not check for associated states, inhabited territories and federal districts rather it only checks 50 US states

**Example**

```javascript
var STATE_UTILS = require('states-utils');

// A valid State name
STATE_UTILS.getUSPSCode('Mississippi');
//=> 'MS'

// State name in lower case
STATE_UTILS.getUSPSCode('massachusetts');
//=> 'MA'

// State name in upper case
STATE_UTILS.getUSPSCode('NEW YORK');
//=> 'NY'

// State capital name
STATE_UTILS.getUSPSCode('Pierre');
//=> 'SD'

// Invalid State name
STATE_UTILS.getUSPSCode('Delhi');
//=> undefined

```

#### getStateCapital(key, strict)

Given the state name or USPS code, this API returns the state capital for a valid US state.
1. key <String> 	: It could either be state USPS code or state name.
2. strict<Boolean>  : It is an optional parameter which when set to true then it does not check for associated states, inhabited territories and federal districts rather it only checks 50 US states

**Example**

```javascript
var STATE_UTILS = require('states-utils');

// A valid State name
STATE_UTILS.getStateCapital('Mississippi');
//=> 'Jackson'

// A valid USPS code
STATE_UTILS.getStateCapital('CO');
//=> 'Denver'

// State name for an associated state
STATE_UTILS.getStateCapital('Northern Mariana Islands');
//=> 'Saipan'

// State name for an associated state with strict set to true
STATE_UTILS.getStateCapital('Northern Mariana Islands', true);
//=> undefined

// Invalid State name
STATE_UTILS.getStateCapital('Delhi');
//=> undefined

```

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)



