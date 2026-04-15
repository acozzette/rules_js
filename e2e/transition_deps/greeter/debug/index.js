'use strict'

// Debug variant: exposes extra diagnostic information.
module.exports = {
    variant: 'debug',
    greet: function (name) {
        process.stderr.write(
            '[DEBUG] greeter.greet called with: ' + name + '\n'
        )
        return 'Hello, ' + name + '! (debug)'
    },
}
