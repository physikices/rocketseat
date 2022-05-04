const getFlagValue = require('./exp-flags')

console.log(`oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)