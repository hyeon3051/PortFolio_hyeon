function solution(brown, yellow) {
  var answer = [];
  var w = 0;
  var h = 0;
  var num_2 = 10;
  var total = brown + yellow;
  for (var i = 1; i <= yellow; i++) {
    for (var j = 1; j <= yellow; j++) {
      if (i * j == yellow) {
        var num_1 = j - i;
        if (num_1 < num_2) {
          num_2 = num_1;
          w = i;
          h = j;
        }
      }
    }
    j = 0;
  }
  var num_3 = w + 2;
  var num_4 = h + 2;
  answer = [num_3, num_4];
  return answer;
}
