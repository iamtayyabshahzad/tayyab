let number=13;
let isprime=true;
if (number===1) {
    console.log("number is alway a prime number ");
}
else if (number>1){
    for (let i = 2; i < number; i++) {
       if(number%i==0){
           isprime=false;
           break;
       }
        
    }
    if(isprime){
        console.log('${number} is a prime number');
    }
    else{
        console.log('${number} is not a prime number');
    }
}
else{
    console.log("this is not a prime num");
}