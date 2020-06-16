function solution(msg) {
  var answer = [];
  var DuplicateWord = [];
  var Len = msg.length;
  var word = "";
  var k = 0;
  var n = 0;
  for (var i = 0; i < Len; i++) {
    if (massage != "") {
      var word = massage + msg[i];
      for (var j = 0; j < DuplicateWord.length; j++) {
        if (word == DuplicateWord[j]) {
          num_1 = j + 27;
          massage = word;
          break;
        }
      }
      DuplicateWord[n] = word;
      n++;
    } else {
      var massage = msg[i];
      var num_1 = msg.charCodeAt(i);
      num_1 = num_1 - 64;
    }
    answer[k] = num_1;
    k++;
  }
  return answer;
}
