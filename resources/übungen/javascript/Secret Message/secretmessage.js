let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Entfernt das letzte Element des Arrays ('JavaScript')
secretMessage.pop();

// Fügt die Wörter 'to' und 'Program' am Ende des Arrays hinzu
secretMessage.push('to', 'Program');

// Ersetzt das Element an Index 7 ('easily') durch 'right'
secretMessage[7] = 'right';

// Entfernt das erste Element des Arrays ('Learning')
secretMessage.shift();

// Fügt 'Programming' an den Anfang des Arrays ein
secretMessage.unshift('Programming');

// Ersetzt 5 Elemente ab Index 6 durch das Wort 'know'
// Das ersetzt: 'get', 'right', 'the', 'first', 'time,' mit 'know'
secretMessage.splice(6, 5, 'know');

// Gibt die Länge des Arrays in der Konsole aus
console.log(secretMessage.length);

// Gibt den vollständigen Satz als String in der Konsole aus
console.log(secretMessage.join(' '));

// Schreibt den zusammengesetzten Satz in ein HTML-Element mit der ID 'result1'
document.getElementById("answerBtn").addEventListener('click', () => {
  document.getElementById("result1").innerHTML = secretMessage.join(' ');
});