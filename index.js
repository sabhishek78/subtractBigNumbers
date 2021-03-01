
function subtractBigNums(num1,num2){
num2=num2.padStart(num1.length,'0');
let n1=num1.split('');
let n2=num2.split('');
let result='';
for(let i=n1.length-1;i>=0;i--){
  if(parseInt(n1[i])>=parseInt(n2[i])){
    result+=(parseInt(n1[i])-parseInt(n2[i])).toString();
  }
  else{
    result+=(10+parseInt(n1[i])-parseInt(n2[i])).toString();
    let tempPointer=i-1;
    while((parseInt(n1[tempPointer]))==0){
      n1[tempPointer]='9';
       tempPointer-=1;
       }
    n1[tempPointer]=(parseInt(n1[tempPointer])-1).toString(); 
  }
}
return result.split("").reverse().join("");;

}
// subtractBigNums('10051515135', '8412512'); // should return '10043102623'
// // subtractBigNums('12612363912306306312009881', '1284612399923200255129015');  // should return '11327751512383106056880866'
// console.log(subtractBigNums('12','10'));
console.log(subtractBigNums('987','19'));
console.log(subtractBigNums('10051515135', '8412512'));
console.log(subtractBigNums('12612363912306306312009881', '1284612399923200255129015'));

