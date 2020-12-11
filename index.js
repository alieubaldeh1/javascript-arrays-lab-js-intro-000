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
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
