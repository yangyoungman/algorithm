function solution(a){
  let tmpArr = new Set();

  for(value of a){
    if(tmpArr.has(value)){
      tmpArr.delete(value);
    }else{
      tmpArr.add(value);
    }
  }
  console.log(tmpArr)
}

solution([9,3,9,3,7,9,9]);