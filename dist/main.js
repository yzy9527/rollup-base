'use strict';

function main () {
    Promise.resolve().then(function () { return require('./foo-7899e1e2.js'); }).then(({ default: foo }) => console.log(foo));
}

module.exports = main;
