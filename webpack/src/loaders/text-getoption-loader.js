let {getOptions} = require('loader-utils')
const textOptionsLoader = function(source) {
  let options = getOptions(this)
  return options.name + ':' + source
}

module.exports = textOptionsLoader