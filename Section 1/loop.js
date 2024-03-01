for(let i=0; i<10; i++){
    console.log(i);
}

let nums = [34, 87, 12, 86, 25, 27];
for(let i of nums){
    // console.log(i);
    if(i%2 !==0){
        console.log(i);
    }
}

let a = 10;

while(a<20){
    console.log(a);
    a+=2;
}

let b = 10;

do{
    console.log(b);
    b+=2;
}while(b<5);