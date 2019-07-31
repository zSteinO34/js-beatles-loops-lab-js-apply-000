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


Use a while loop to loop over the facts array and add `"!!!"` to the end of
every fact. The function should return an array of strings with exclamation
points.

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0;

function johnLennonFacts(arr) {
  while(i < facts.length) {
    .push(`${facts[i]}!!!`);
    i++;
  }
  return newArr;
}

johnLennonFacts(facts);