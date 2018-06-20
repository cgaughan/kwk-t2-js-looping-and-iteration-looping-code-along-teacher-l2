let employees = ["Lisa", "Kaitlin", "Jan"]
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${[i+1]}.`)
  }
  return names;
}

function tailsNeverFails() {
  let count = 0
  let i = Math.random();
  while (i >= 0.5) {
    count++
    i = Math.random()
  }
  return `You got ${count} tails in a row.`

}

console.log(tailsNeverFails())
