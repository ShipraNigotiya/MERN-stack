const user ={name:'raju',email:'raju@gmail.com',password:'raju12345'};

console.log(user.name);

console.log(user.email);
console.log(user['password']);
console.log(Object.keys(user));
console.log(Object.values(user));

user.password='khuslsosi';
console.log(user);
user.address='Lucknow';

const smartphone={
    brand: 'Samsung',
    model:'s24 ultra',
    price:136000,
    color:['black','blue','silver']
};
console.log(smartphone.color[1].length);
console.log(smartphone.color[1]);

// replace the 3rd color with 'white'
//  smartphone.color[2]= white;
// console.log(smartphone.color[2].replace('white'));
smartphone.color.push('red')
console.log(smartphone.color);

const phoneList = [
   { brand : 'Samsung',
    model :'s24 ultra',
    price :136000,
    color : ['black','blue','silver']},

    { brand : 'OnePlus',
    model :'Nord c3',
    price :24000,
    color : ['grey','blue','silver']},

    { brand : 'Xiaomi',
    model :'note 12',
    price :24000,
    color : ['red','yellow']}


];

console.log(phoneList.length);
console.log(phoneList[0].price);

// find the 2nd color of 3rd phone


console.log(phoneList[2].color[1]);

