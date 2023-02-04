let urlObj = new URL('https://www.youtube.com/watch?v=2JYT5f2isg4&ab_channel=freeCodeCamp.org');

console.log(urlObj);

console.log(`protocol: `+ urlObj.protocol);
console.log(`username: `+ urlObj.username);
console.log(`password: `+ urlObj.password);
console.log(`hostname: `+ urlObj.hostname);
console.log(`port: `+ urlObj.port);
console.log(`pathname: ` + urlObj.pathname);
console.log(`search: `+ urlObj.search);
console.log(`hash: `+ urlObj.hash);
