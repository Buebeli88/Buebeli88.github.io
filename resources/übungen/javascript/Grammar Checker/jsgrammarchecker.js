// Original Text, zur überprüfung und korrektur
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

 // Teilt den Text in einzelne Wörter
let storyWords = story.split(' ');

// Wörter, die im Text überprüft oder ersetzt werden sollen
let unnecessaryWord = 'literally'; // unnötiges Word, soll entfernt werden
let misspelledWord = 'beautifull'; // falsch geschriebenes Word, soll korrigiert werden
let badWord = 'freaking'; // umgangssprachliches Wort, soll ersetzt werden

// Zähler für die Anzahl der Wörter initialisieren
let count = 0;

// Inddex des umgangssprachlichen Wortesfinden
let badWordIndex = storyWords.findIndex((word) => word === badWord);

// Prüfen, ob alle Wörter maximal 10 Buchstaben lang sind (true/false)
let lengthCheck = storyWords.every((word) => word.length <= 10);

// Das erste Wort finden, das länger als 10 Buchstaben ist
let longWord = storyWords.find((word) => word.length > 10);

// Index des langen Wortes im Array finden
let longWordIndex = storyWords.indexOf(longWord);

// Das lange Wort durch 'stunning' ersetzen
storyWords[longWordIndex] = 'stunning';

// Alle Wörter durchgehen und die Gesamtanzahl, der Wörter zählen
storyWords.forEach(() => {
  count += 1;
})

// Das umgangssprachliche Wort 'freaking' durch 'realy' ersetzen
storyWords[badWordIndex] = 'really';

// Alle Vorkkommen des unnötigen Wortes 'literally' aus dem Array entfernen
storyWords = storyWords.filter((word) => word !== unnecessaryWord);

// Alle Wörter durchgehen und das falsch geschriebene Wort korrigieren
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
})

// Ergebnisse in der Konsole ausgeben
console.log(lengthCheck); // Gibt true oder false zurück, ob alle Wörter <= 10 Buchstaben haben
console.log(badWordIndex); // Position von 'freaking' im Array
console.log(count); // Anzahl der Wörter im Text
console.log(storyWords.join(' ')); // Der korrigierte Text als String

document.getElementById("result1").innerHTML = lengthCheck;
document.getElementById("result2").innerHTML = badWordIndex;
document.getElementById("result3").innerHTML = count;
document.getElementById("result4").innerHTML = storyWords.join(' ');