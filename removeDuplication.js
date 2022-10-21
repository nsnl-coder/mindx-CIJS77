const arr = [1, 2, 3, 5, 4, 2, 6, 4]

function removeDuplication() {
  let result = []

  arr.forEach((el) => {
    if (!result.includes(el)) result.push(el)
  })
  console.log(result)
}

removeDuplication(arr)
