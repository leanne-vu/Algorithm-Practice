
// Prompt: Function fuzebuzz will take a single parameter, named limit.Limit will receive a positive integer.Function will not return anything.It will check every number between 1 and the limit number.It will look for one of 3 conditions:
// If the current number being checked is evenly divisible by 3(console.log(‘learning’))
// If the current number being checked is evenly divisible by 5(console.log(‘fuze’))
// If the current number being checked is evenly divisible by 3 & 5(console.log(‘learningfuze’)).
function fuzebuzz(limit) {
  for (var i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) { return 'learningfuze'; } else if (i % 3 === 0) { return 'learning'; } else if (i % 5 === 0) { return 'fuze'; }
  }
}

fuzebuzz();
