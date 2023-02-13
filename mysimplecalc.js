function addNumbers(){
  const numbers=[1,2,3,4,5,6,78,89];
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum += numbers[i];
  }
  return sum;
}
console.log(addNumbers());
 

function multiplyNumbers(){
    const arrayNumbers=[1,2,3,4,5,6,78,89];
    let product=1;
    for(let i=0;i<arrayNumbers.length;i++){
    product *=arrayNumbers[i];
    }
    return product;
  }
  console.log(multiplyNumbers());

  module.exports={
    addNumbers,
    multiplyNumbers
  }