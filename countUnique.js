const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]

function getMaxRepeatingElement(arr) {
  const counter = {}
  let maxCounter = { count: 0 }

  arr.forEach((el) => {
    counter[el] ? counter[el]++ : (counter[el] = 1)
    if (counter[el] > maxCounter.count) maxCounter = { count: counter[el], value: el }
  })
}

getMaxRepeatingElement(arr)
