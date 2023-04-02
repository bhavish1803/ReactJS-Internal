const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const keysArr = Object.keys(obj);

for (let i = 0; i < keysArr.length; i++) {
    let ele = keysArr[i]
    let reversedStr = ele.split('').reverse().join('');
    keysArr[i] = reversedStr;
}

console.log('Keys array:', keysArr);

