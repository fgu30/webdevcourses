export default () => {
  var element = document.createElement('div')
  element.innerHTML = '<div>hello world</div>'
  document.body.appendChild(element)
}