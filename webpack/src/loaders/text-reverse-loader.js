const textReverseLoader = function(source) {
  // const options = getOptions(this)
  let src = source
  src = src.split('').reverse().join('')
  return `export default "${src}"`
}

module.exports = textReverseLoader