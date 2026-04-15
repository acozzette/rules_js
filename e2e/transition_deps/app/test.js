'use strict'

const assert = require('assert')
const greeter = require('@e2e/greeter')

// EXPECTED_VARIANT is set by the js_test rule via a select() on //flags:build_variant,
// so this test always checks that the linked package matches the active configuration.
const expectedVariant = process.env.EXPECTED_VARIANT

assert.ok(
    expectedVariant === 'debug' || expectedVariant === 'release',
    'EXPECTED_VARIANT env var must be set to "debug" or "release" by the build system'
)

assert.strictEqual(
    greeter.variant,
    expectedVariant,
    `Expected greeter variant '${expectedVariant}' but got '${greeter.variant}'. ` +
        `The npm_link_package select() did not resolve to the right source.`
)

const greeting = greeter.greet('World')
console.log('greeting:', greeting)
console.log(`PASS: @e2e/greeter variant is '${greeter.variant}' as expected`)
