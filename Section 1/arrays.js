const arr = [255,'tanya',true,null];
console.log( typeof arr);
console.log(  arr);

const movies=['abc','xyz','fighter','pqr','brfg','plkio'];
console.log(movies.length);
const myMovie='Animal';
console.log(myMovie.length);

// index
console.log(movies[3]);
console.log(movies[5]);
console.log(movies.at(-1));
console.log(movies.indexOf('fighter'));

// slicing
console.log(movies.slice(1,5));
console.log(movies.slice(3));

// adding new element
movies.push('the dark knight'); 
// add element at the end
movies.unshift('the nun'); 
// add element at the begining
console.log(movies);

// removing element
movies.pop('the dark knight'); 
movies.shift('the nun'); 
console.log(movies);


// adding and removing element from specific position
movies.splice(-2,0,'superman');
console.log(movies);

movies.splice()


