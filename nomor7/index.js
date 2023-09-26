import CryptoJS from 'crypto-js';

const date = new Date();
const day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let str = '';
str += day < 10 ? `0${day}` : day;
str += month < 10 ? `0${month}` : month;
str += year;
str += 'vicky';
str += 'pria';
str += 'ifabula';

const secretKey = 'ASJDJKABDkbasb13he982eiadsjkbdajq9oIHHR9';

const chiperText = CryptoJS.SHA256(str, secretKey).toString();

console.log(chiperText);
