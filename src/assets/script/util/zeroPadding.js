export default (num, length) => {
  var zeros = ''
  for(var i=0; i<length; i++) zeros += '0'
  return (zeros + num).slice(length*-1)
}
