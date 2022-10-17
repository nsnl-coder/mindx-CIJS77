let str = 'abcdef'

const reverseString = (str) => {
  return str.split('').reverse().join('')
}

console.log(reverseString(str))
