const bill = document.getElementById('bill')

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')
const custom = document.getElementById('custom')

const people = document.getElementById('people')

const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')
const reset = document.getElementById('reset')

var billValue = 100

var btnValue = 0.05
var peopleValue = 1

document.addEventListener('DOMContentLoaded', function () {
  bill.value = 100
  btn1.focus()
  people.value = 1
  calculate(billValue, btnValue, peopleValue)
})

const btns = [btn1, btn2, btn3, btn4, btn5]

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btnValue = Number(btn.value)

    custom.value = null
    calculate(billValue, btnValue, peopleValue)
  })
})

bill.addEventListener('input', () => {
  if (Number(bill.value) === 0) {
    let parent = bill.parentNode
    let errorElement = parent.querySelector('.hidden')

    parent.classList = 'bill-input error'
    errorElement.textContent = 'Cannot be zero'
  } else {
    let parent = bill.parentNode

    parent.classList = 'bill-input '
    billValue = Number(bill.value)
    calculate(billValue, btnValue, peopleValue)
  }
})

people.addEventListener('input', () => {
  if (Number(people.value) === 0) {
    let parent = people.parentNode
    let errorElement = parent.querySelector('.hidden')
    parent.classList = 'people-input error'
    errorElement.textContent = 'Cannot be zero'
  } else {
    let parent = people.parentNode

    parent.classList = 'people-input '
    peopleValue = Number(people.value)
    calculate(billValue, btnValue, peopleValue)
  }
})

custom.addEventListener('input', () => {
  btnValue = Number(custom.value) / 100
  calculate(billValue, btnValue, peopleValue)
})

function calculate() {
  let tip = btnValue * billValue
  let tipPerPerson = tip / peopleValue
  let billPerPerson = billValue / peopleValue
  let totalPerPerson = billPerPerson + tipPerPerson

  tipAmount.textContent = tipPerPerson.toFixed(2)
  totalAmount.textContent = totalPerPerson.toFixed(2)
}

reset.addEventListener('click', refreshPage)

function refreshPage() {
  window.location.reload()
}
