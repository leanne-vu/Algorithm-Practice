function solution(year) {

  if (year <= 100) {
    return 1;
  } else if (year % 100 === 0) {
    return Math.floor(year / 100);

  } else {
    return Math.floor((year / 100) + 1);
  }

}

solution();
