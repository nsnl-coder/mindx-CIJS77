//
const number = 128452

const findMaxDigit = (number) => {
  let digitArr = number.toString().split('')
  let maxDigit = 0

  digitArr.forEach((digit) => {
    if (digit > maxDigit) maxDigit = digit
  })

  return maxDigit
}

const maxDigit = findMaxDigit(number)
console.log(maxDigit)
