//define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here
function destructivelyAppendKitten(name)
{
 kittens = kittens.concat(name)
 return kittens
}

function destructivelyPrependKitten(name)
{
 kittens.unshift(name)
 return kittens
}
destructivelyRemoveLastKitten()
{
 kittens.pop(name)
 return kittens
}