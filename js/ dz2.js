// task-5.js
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением
//  константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
//  записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const ADMIN_PASSWORD = 'jqueryismyjam'
// let message
// const value = promt()
// console.log(`value`, value)
// if (!value) {
//   message = `отменено пользоваателем`
// } else if (ADMIN_PASSWORD === 'jqueryismyjam') {
//   message = `добро пожаловать`
// } else message = `доступ запрещен`
// alert(message)

// let value = prompt(`введите пароль`)
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam'
//   let message
//   if (password === null) {
//     message = `отменено пользоваателем`
//   } else if (password === ADMIN_PASSWORD) {
//     message = `добро пожаловать`
//   } else {
//     message = `доступ запрещен`
//   }
//   return message
// }

// task 6
// На счету пользователя есть 23580 кредитов,
// значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые
// стоят по 3000 кредитов за штуку. Цена одного дроида хранится
// в переменной pricePerDroid (создай и присвой).
// При посещении страницы, используя prompt, необходимо
// спросить количество дроидов которые пользователь хочет
// купить и сохранить в переменную.
// Напиши скрипт который:
// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету,
// выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету
// и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// let credits = 23580
// const pricePerDroid = 3000
// let totalPrice
// let value = prompt()
// if (value === null) {
//   console.log(`Отменено пользователем`)
// } else if (parseInt(value)) {
//   console.log(parseInt(value))
//   totalPrice = parseInt(value) * pricePerDroid
//   console.log(totalPrice)
//   let expression = totalPrice > credits
//   console.log(expression)
//   if (expression) {
//     console.log(`у вас недостаточно средств на счету`)
//   } else {
//     console.log(`вы купилт ${parseInt(value)}дроидов на счету осталось`)
//   }
// } else if (isNaN(value)) {
//   console.log(`вы ввели не число`)
// } else {
//   console.log(
//     `вы купили ${value} дроидов на счету осталось ${
//       totalPrice - credits
//     } кредитов`,
//   )
// }

// task 7

// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра,
// а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
// 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let value = prompt(`укажите страну`).toLowerCase()
// console.log(value)
// let price
// switch (value) {
//   case 'китай':
//     price = 100
//     break
//   case 'чили':
//     price = 250
//     break
//   case 'австралия':
//     price = 170
//     break
//   case 'индия':
//     price = 80
//     break
//   case 'ямайка':
//     price = 120
//     break
//   default:
//     alert(`В вашей стране ${value} доставка не доступна`)
// }
// let message = `Доставка в ${value} будет стоить ${price} кредитов`
// console.log(message);

// task8
// Напиши скрипт который просит посетителя ввести число в prompt
// до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет
// // введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число.
//  Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь
// не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel,
//  показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел именно число,
// а не произвольный набор символов, не нужно. Если хочешь,
// в случае некорректного ввода, показывай alert с текстом
// 'Было введено не число, попробуйте еще раз', при этом результат
// prompt плюсовать к общей сумме не нужно, после чего снова пользователю
// предлагается ввести число в prompt.
// let input;
// let total = 0;

// let value = confirm(`введите число`)
// console.log(value)
// let total = 0
// while (value) {
//   value = prompt(`введите число`)
//   console.log(isNaN(value))
//   if (isNaN(value)) {
//     console.log(`${value} вы ввели не число`)
//     // continue
//   } else {
//     value = +value
//     total += value
//   }
// }
// console.log(total)

// do {
//   value = prompt(`введите число`)
//   console.log(isNaN(value))
//   if (isNaN(value)) {
//     console.log(`${value} вы ввели не число`)
//     // continue
//   } else {
//     value = +value
//     total += value
//   }
// } while (value)
// console.log(total)

// console.log(1 && true)
// console.log(0 && true)
// console.log(1 && true && 'tanya')
// console.log(0 && true && 'tanya')
// console.log('' && true && 0)

// console.log(1 || true)
// console.log(0 || true)
// console.log(1 || true || 'tanya')
// console.log(0 || true || 'tanya')
// console.log('' || true || 0)

// let day = 'sunday'
// let dayOfWeek
// switch (day) {
//   case 'monday':
//   case 'tuesday':
//   case 'wednesday':
//   case 'thursday':
//   case 'friday':
//     dayOfWeek = `work day`
//     break
//   case 'saturday':
//   case 'sunday':
//     dayOfWeek = `holyday`
//     break

//   default:
//     dayOfWeek = `none`
//     break
// }
// console.log(dayOfWeek)

// if (
//   day === 'monday' ||
//   day === 'tuesday' ||
//   day === 'wednesday' ||
//   day === 'thursday' ||
//   day === 'friday'
// ) {
//   dayOfWeek = `work day`
// } else if (day === 'saturday' || day === 'sunday') {
//   dayOfWeek = `holyday`
// } else {
//   dayOfWeek = `none`
// }
// console.log(dayOfWeek)
