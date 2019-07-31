var musicians = [
  "John Lennon",
  "Stevie Wonder",
  "Louie Armstrong"
  ];
var instruments = [
  "guitar",
  "piano",
  "saxaphone"
  ];

function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
     var str = `${musicians[i]} plays ${instruments[i]}`;
     result.push(str);
  }
}