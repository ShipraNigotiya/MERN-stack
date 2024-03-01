function add(a,b){
    c = a+b;
    console.log(c);
}

add(5,6);

const avg =function (m1, m2, m3){
    let avg=(m1=m2+m3)/3;
    // console.log(avg);
    return avg;
}

const result=avg(34,54,62);
console.log(result);

const percentage = (max,obt)=>{
    let per = (obt/max*100);
    return per;
}

const percent=percentage(300,250);
console.log(percent);