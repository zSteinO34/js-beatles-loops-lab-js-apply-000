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
var i = 0;
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newArr = [];
  while(i > facts.length) {
    newArr.push(`${facts[i]}!!!`);
    i++;
  }
  return newArr;
}

johnLennonFacts(facts);