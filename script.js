const res = document.querySelector('.res');
const inputBox = document.querySelector('main-input-box');
const evalBtn = document.querySelector('eval-btn');

function checkErr(str) {
    const allowedValues = ['1234567890()+-*/'];
    for (char in str) {
        if (allowedValues.includes(char)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}