// const myFun = function (a) {
//   console.log(typeof a)
// }
// myFun(true)
// const biggesNumber = function (z, x, c, v, b) {
//   console.log(Math.max(z, x, c, v, b))
// }
// biggesNumber(98, 34, 994, 365, 273)

// const lowwerNumber = function (a, b, c, d, e) {
//   console.log(Math.min(a, b, c, d, e))
// }
// lowwerNumber(986, 45, 78, 21, 4556)

// const getMiddleValue = function (r, t, f, g, h) {
//   //   let result = (r + t + f + g + h) / 5
//   //   result = Math.round(result)
//   //   console.log(result)
//   console.log(arguments)
//   let total = 0
//   for (let i of arguments) {
//     total = total + i
//   }
//   //   console.log(total)
//   total = total / arguments.length
//   //   console.log(total)
//   total = Math.round(total)
//   console.log(total)
// }
// getMiddleValue(456, 6788, 45, 22, 88)

// const getTax = function (...rest) {
//   let total = 0
//   for (let i = 0; i < rest.length; i += 1) {
//     // console.log(rest[i])
//     total = total + rest[i]
//   }
//   total = total * 0.05
//   console.log(total)
// }
// getTax(45, 63636, 1156, 8888, 76, 6, 44, 3333, 2222, 444, 7777, 77)

const myFun = function (a) {
  console.log(typeof a)
}
myFun(true)
const biggesNumber = function (z, x, c, v, b) {
  console.log(Math.max(z, x, c, v, b))
}
biggesNumber(98, 34, 994, 365, 273)

const lowwerNumber = function (a, b, c, d, e) {
  console.log(Math.min(a, b, c, d, e))
}
lowwerNumber(986, 45, 78, 21, 4556)

const getMiddleValue = function (r, t, f, g, h) {
  //   let result = (r + t + f + g + h) / 5
  //   result = Math.round(result)
  //   console.log(result)
  console.log(arguments)
  let total = 0
  for (let i of arguments) {
    total = total + i
  }
  //   console.log(total)
  total = total / arguments.length
  //   console.log(total)
  total = Math.round(total)
  console.log(total)
}
getMiddleValue(456, 6788, 45, 22, 88)

const getTax = function (...rest) {
  let total = 0
  for (let i = 0; i < rest.length; i += 1) {
    // console.log(rest[i])
    total = total + rest[i]
  }
  total = total * 0.05
  console.log(total)
}
getTax(45, 63636, 1156, 8888, 76, 6, 44, 3333, 2222, 444, 7777, 77)

function acceptForm(user, ...rest) {
  console.log(user)
  console.log(rest)
  let total = 0
  rest.forEach((el) => {
    total = total + el
  })
  console.log(total)
  return `${user}, your result is ${total}`
}

let result = acceptForm('bulichova@gmail.com', 0, 1, 0, 1, 0, 1, 0, 1, 0, 1)
console.log(result)
result = acceptForm('tata@ gmail.com', 2, 3, 5, 7, 8, 92, 1)
console.log(result)

function checkSpam(...text) {
  let mainWord = 'управление'
  let secondMainWord = 'война'
  let str = text.join()
  let condition1 = str.includes(mainWord)
  let condition2 = str.includes(secondMainWord)
  console.log(condition1)
  console.log(condition2)
  if (condition1 || condition2) {
    if (condition1 && !condition2) {
      return `в сообщении найдены следующие ключевые слова: ${mainWord}`
    } else if (condition2 && !condition1) {
      return `в сообщении найдены следующие ключевые слова: ${secondMainWord}`
    } else {
      return `в сообщении найдены следующие ключевые слова: ${mainWord}, ${secondMainWord}`
    }
  } else {
    return 'в сообщении ключевых слов не найдено'
  }
}
result = checkSpam(
  'Офис президента и Государственное делами не оплачивали использование помещения, в котором Владимир Зеленский проводил прессмарафон. Его совладельцем является куратора программ',
)
console.log(result)
