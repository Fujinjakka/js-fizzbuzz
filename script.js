// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.






var divisibileX3 = (i % 3);

var divisibileX5 = (i % 5);

for (var i = 1; i < 101; i++) {
  document.getElementById("testo").innerHTML += i + "<br>";
  console.log(i);
  if (divisibileX3 == 0) {
    document.getElementById("testo").innerHTML += "Fizz" + "<br>";
  } else if (divisibileX5 == 0) {
    console.log("buzz");
    document.getElementById("testo").innerHTML += "Buzz" + "<br>";
  } else if (divisibileX3 == 0 && divisibileX5 == 0) {
    console.log("fizzBuzz");
    document.getElementById("testo").innerHTML += "FizzBuzz" + "<br>";
  }
}
