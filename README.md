# us-states-util
A rich library that provides various utility functions to get/check name or USPS code of states and much more

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install us-states-util --save
```

### Usage

```javascript
var STATE_UTILS = require('us-states-util');

STATE_UTILS.isUSAState('CA');
//=> true

STATE_UTILS.getStateName('CA');
//=> California

STATE_UTILS.getUSPSCode('New York');
//=> NY

```

### Clone the repo

git clone https://github.com/luthraG/us-states-util.git

### API

#### isUSAState(state)

This API takes one parameter i.e. state which could either be state name or USPS code. It returns boolean value indicating if provided value if valid US state

**Example**

```javascript
var STATE_UTILS = require('us-states-util');


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

```

#### getStates()

This API returns all the state names of The united States of America.

**Example**

```javascript
var STATE_UTILS = require('us-states-util');


STATE_UTILS.getStates();
//=> ['Alaska', 'Alabama', ......, 'Texas', ...]

```

#### getUSPSCodes()

This API returns the USPS codes for all the states of The united States of America.

**Example**

```javascript
var STATE_UTILS = require('us-states-util');

STATE_UTILS.getUSPSCodes();
//=> ['AK', 'AL', ......, 'TX', ...]

```

#### getStateName()

Given the USPS code, this API returns the state name for a valid US state.

**Example**

```javascript
var STATE_UTILS = require('us-states-util');


// USPS code in upper case
STATE_UTILS.getStateName('TX');
//=> 'Texas'

// USPS code in lower case
STATE_UTILS.getStateName('ca');
//=> 'California'

// Invalid USPS code
STATE_UTILS.getStateName('GL');
//=> undefined

```

#### getUSPSCode()

Given the state name, this API returns the USPS code for a valid US state.

**Example**

```javascript
var STATE_UTILS = require('us-states-util');

// A valid State name
STATE_UTILS.getUSPSCode('Mississippi');
//=> 'MS'

// State name in lower case
STATE_UTILS.getStateName('massachusetts');
//=> 'MA'

// State name in upper case
STATE_UTILS.getStateName('NEW YORK');
//=> 'NY'

// Invalid State name
STATE_UTILS.getStateName('Delhi');
//=> undefined

```

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)



