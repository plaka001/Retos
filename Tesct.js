"use strict";
exports.__esModule = true;
exports.reverseWords = void 0;
function reverseWords(str) {
    var data = [];
    var resp = '';
    for (var index = str.length - 1; index >= 0; index--) {
        resp = resp + str[index];
    }
    return resp;
}
exports.reverseWords = reverseWords;
console.log(reverseWords('Marlon Cano'));
