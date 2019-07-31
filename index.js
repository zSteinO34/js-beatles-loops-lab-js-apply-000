var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
  ];
var instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
  ];

function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
     var str = `${musicians[i]} plays ${instruments[i]}`;
     result.push(str);
  }
}

return theBeatlesPlay(musicians, instruments);