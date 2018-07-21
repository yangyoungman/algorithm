function frogjmp(X, Y, D){
  let jumpCnt;
  if(Y > X) jumpCnt = (Y-X)/D;
  if(jumpCnt > 0) return Math.ceil(jumpCnt)
}

console.log(frogjmp(10,85,30))
