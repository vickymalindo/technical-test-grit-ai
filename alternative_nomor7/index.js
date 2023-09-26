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

async function digestMessage(message) {
  const msgUint8 = new inputEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join(''); // convert bytes to hex string
  return hashHex;
}

digestMessage(str).then((digestHex) => console.log(digestHex));
