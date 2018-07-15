function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let value; 
  let binary;
  let arrBinary

  value = N
  binary = value.toString(2);
  arrBinary = binary.split('1');
  arrBinary.pop(); 

  let tmp = 0;
  for(let index of arrBinary){
    if(tmp < index.length){
      tmp = index.length;
    }
  }
  return tmp
}

solution(1041)
solution(15)
solution(32)
console.log(1041 & 1)