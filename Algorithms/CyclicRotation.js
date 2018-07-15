function solution(arr , n){
  let realArr = arr;
  let moveCount = n % realArr.length;
  let tempArr;

  for(let i=0; i<moveCount; i++){
    tempArr = realArr.pop();
    realArr.unshift(tempArr);
  }
  return realArr
}

solution([1,2,3,4,5], 3);