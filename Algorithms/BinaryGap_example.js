function solution(N) {
  let curNum = N;

  let maxZeroCnt = 0;
  let curZeroCnt = 0;
  let isValid = false;
  while(true) {
    console.log(curNum)
    const curBinNum = curNum & 1;
    const isVaildZeroSection = isValid && curBinNum === 0;
    const isValidBoundary = curBinNum === 1;

    if ( isVaildZeroSection ) {
      curZeroCnt++;
    }

    if ( isValidBoundary ) {
      isValid = true;
      if (maxZeroCnt < curZeroCnt) {
        maxZeroCnt = curZeroCnt;
      }
      curZeroCnt = 0;
    }
    curNum = curNum >> 1;
    if (curNum === 0) {
      break;
    }
  }
  return maxZeroCnt;
}

console.log(solution(1041))