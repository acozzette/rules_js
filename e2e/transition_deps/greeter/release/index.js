'use strict'

// Release variant: lean implementation with no debug overhead.
module.exports = {
    variant: 'release',
    greet: function (name) {
        return 'Hello, ' + name + '!'
    },
}
