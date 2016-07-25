#!/usr/bin/env node

const meow = require('meow')
const calc = require('costtime')

const cli = meow(`
    Usage
      $ costtime <cost per hour> <time>

    Examples
      $ costtime 45 5h30m
      247.5     
`)


let cost
try {
  cost = parseFloat(cli.input[0], 10)
} catch (err) {
  console.error('unable to parse cost')
  process.exit(1)
}

const hours = cli.input[1]

if (!cost) {
  console.error('missing cost')
  process.exit(1)
}

if (!hours) {
  console.error('missing hours')
  process.exit(1)
}

const sum = calc(cost, hours)

console.log(sum)
