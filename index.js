/* problem 1 */
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
     result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}
theBeatlesPlay(musicians, instruments);

/* problem 2 */