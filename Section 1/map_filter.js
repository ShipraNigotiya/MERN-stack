const nums = [3,4,5,6,7];

// store the square of each No. in a new array
// for (let i of nums){
//     console.log(i);
// }
const arr1 = [];
for (let i of nums){
    // console.log(i);
    arr1.push(i**2);
}
console.log(arr1);

const result = nums.map((n)=> {return n**2});
console.log(result);

const prices = ['$567.23','$21874.989','$888.90','$7257.2482'];

console.log(parseInt('$567.23'.slice(1)));


const numPrices = prices.map((p)=> {return parseInt(p.slice(1))})
console.log(numPrices);

const discounted = numPrices.map((p)=>{return parseInt(p*0.9)});
console.log(discounted);


const nums2 = [4,87,26,284,270,963];
 const oddNums = nums2.filter((n)=> {return n%2!==0});
console.log(oddNums);

const prices2 = [12000,670,4500,3500,4600,240];
const budgetPrice = prices2.filter((n) => {return p>500 && p<4000});
console.log(budgetPrice);

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
     color : ['red','yellow']},

     { brand : 'Samsung',
     model :'J7',
     price :13600,
     color : ['black','blue']},
 
     ];
     const budgetPhones = phoneList.filter((phone)=> {return phone.price<3000});
     console.log(budgetPhones);

     constsamsungPhones = phoneList.filter((phone) => {return phone.brand === 'Samsung'});
     console.log(samsungPhones);

        //   filter all phones with blue color
     console.log(['a','b','c'].includes('b'));

     const bluePhones = phoneList.filter((phone) => {return phone.color.includes('blue')});
     console.log(bluePhones);
 
