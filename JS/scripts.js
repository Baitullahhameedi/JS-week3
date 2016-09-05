console.log('It Must Work!');

// I will make an array with a list of deffrint types of Afghan musical
// instruments.
var instrumentsArray = ["Dhol","Flaut","Tambur","Tabla","Sarinda","Seetar"];

//This viriable will discrib the first item in my instrumentsArray.
var firstInstrument = instrumentsArray[0];

console.log(firstInstrument);

// I will make an if... else... conditionals wich will see whether first item
// in my instrumentsArray is a Rabab.
// I will also test whether the third instrument is a Tambur instrument.

if (firstInstrument == 'Rabab') {
  console.log('This first instrument is a Rabab instrument')
} else if (instrumentsArray[2] == 'Tambur')
console.log('This third instrument is a Tambur instrument.')
 else {

  console.log('The first instrument is not a Rabab instrument');
  console.log('Actually the first instrument is'+ firstInstrument);

}
