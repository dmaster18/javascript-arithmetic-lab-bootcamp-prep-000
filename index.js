function add(a,b)
{return a+b}

function subtract(a,b)
{return a-b

it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})

it('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})

function divide(a, b) {
  return a/b
}

function inc(n) {
  return n++
}

function dec(n) {
  return n--
}

function maekInt(n) {
  return parseInt(n, 10)
}

function  preserveDecimal(n) {
  return parseFloat(n)
}
