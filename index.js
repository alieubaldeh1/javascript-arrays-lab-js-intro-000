var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  kittens.push(name)
  return kittens
}

function prependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function removeLastKitten() {
  kittens.slice(0, kittens.length-1)
  return kittens
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}
