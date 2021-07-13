const array=[100,100,74,10];
sum = array.reduce((a,b) =>{
    return a+b/array.length;
})
console.log("the sum is " +sum);
console.log(per(a=sum));
function per(a) {
if(sum>=1&&sum<=59) return "F";
if(sum>=60&&sum<=69) return "D";
if(sum>=70&&sum<=79) return "C";
if(sum>=80&&sum<=89) return "B";
if(sum>=90&&sum>=100) return "A";
return sum;
}