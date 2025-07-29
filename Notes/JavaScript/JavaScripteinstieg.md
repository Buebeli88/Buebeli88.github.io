Welcome to Learn JavaScript
A brief overview of what you will learn in this course.

What will you learn?
In this course, you will learn programming fundamentals with JavaScript syntax. The concepts covered in this course lay the foundation for using JavaScript in any environment.

After this course, you will be able to:

implement JavaScript data types, built-in methods, and variables
use conditionals to control the flow of a program in JavaScript
construct functions and pass data through them
identify global and block-level scopes in JavaScript
use arrays to store lists of data
use loops to execute blocks of code multiple times
use iterator methods to simplify the process of looping over arrays
use JavaScript ES6 object syntax to model real-world items
Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the forums. Remember to check in with the community regularly, including for things like asking for code reviews on your project work and providing code reviews to others in the projects category, which can help to reinforce what you’ve learned.

What will you create?
Throughout this course, you will be tasked with applying the concepts learned in projects. Here is a preview of some of the projects featured in this course:

Kelvin Weather
Build fluency in JavaScript fundamentals by practicing variables and printing to the console to create a temperature convertor.

Sleep Debt Calculator
Practice functions to help us build separation of concerns by building a calculator to tell us if we are getting enough sleep each week.

Whale Talk
Master the art of looping by creating a program that talks like a whale!

These projects will help you practice building fluency in JavaScript.

We are excited for you to start your journey into Learn JavaScript!
-----------------------------------------------------------------------------------

Was ist JavaScript?

Letztes Jahr haben Millionen Lernende aus unserer Community mit JavaScript begonnen. Warum? JavaScript ist vor allem als die Sprache der meisten modernen Webbrowser bekannt. Frühe Eigenheiten der Sprache haben ihr zunächst einen eher schlechten Ruf eingebracht. Doch JavaScript hat sich stetig weiterentwickelt und verbessert. Heute ist es eine leistungsstarke, flexible und schnelle Programmiersprache, die für immer komplexere Webentwicklungen und darüber hinaus eingesetzt wird!

Da JavaScript weiterhin im Zentrum der Webentwicklung steht, ist es oft die erste Sprache, die sich autodidaktische Programmierer*innen aneignen, um Projekte zu realisieren und ihre Fähigkeiten auszubauen. Wir freuen uns darauf, zu sehen, was du mit dem JavaScript-Wissen, das du hier erwirbst, erschaffen wirst. JavaScript sorgt für das dynamische Verhalten auf den meisten Websites – auch auf dieser hier.

In dieser Lektion wirst du grundlegende Programmierkonzepte kennenlernen, darunter Datentypen und integrierte Objekte – essenzielles Wissen für alle angehenden Entwickler*innen. Achte darauf, dir Notizen zu machen und in deinem eigenen Tempo zu lernen. Dieses Fundament wird dir helfen, später auch komplexere Konzepte zu verstehen.

-------------------------------------------------------------------------------------------

Konsole

Die Konsole ist ein Bedienfeld, das wichtige Meldungen – wie Fehlermeldungen – für Entwickler*innen anzeigt. Ein Großteil der Arbeit, die der Computer mit unserem Code erledigt, bleibt standardmäßig unsichtbar. Wenn wir jedoch etwas sichtbar machen möchten, können wir direkt in die Konsole „drucken“ bzw. ausgeben.

In JavaScript bezieht sich das Schlüsselwort console auf ein Objekt, also eine Sammlung von Daten und Funktionen, die wir in unserem Code verwenden können. Schlüsselwörter sind fest in die JavaScript-Sprache integriert, sodass der Computer sie erkennt und besonders behandelt.

Eine solche Funktion – auch Methode genannt – des console-Objekts ist die Methode .log(). Wenn wir console.log() schreiben, wird das, was wir in die Klammern setzen, in der Konsole ausgegeben bzw. geloggt.

Es wird sehr nützlich für uns sein, Werte in die Konsole auszugeben, damit wir nachvollziehen können, was unser Code gerade macht.

Beispiel:

console.log(5)

-----------------------------------------------------------------------------------------

Kommentare

Programmieren ist oft eine sehr kooperative Tätigkeit. Außerdem kann unser eigener Code schnell schwer verständlich werden – manchmal schon, wenn wir nur eine Stunde später wieder darauf schauen! Aus diesen Gründen ist es oft hilfreich, Notizen im Code zu hinterlassen – für andere Entwickler*innen oder für uns selbst.

Während wir JavaScript schreiben, können wir sogenannte Kommentare in unseren Code einfügen, die der Computer beim Ausführen des Programms ignoriert. Diese Kommentare sind nur für Menschen gedacht.

Kommentare können erklären, was der Code macht, Anweisungen für andere Entwickler*innen enthalten oder andere nützliche Hinweise bieten.

In JavaScript gibt es zwei Arten von Kommentaren:

Ein einzeiliger Kommentar kommentiert eine einzelne Zeile und wird mit zwei Schrägstrichen // am Anfang der Zeile gekennzeichnet.

Beispiel:

// Prints 5 to the console
console.log(5);

oder Multi-Line Kommentare

/*
This is all commented
console.log(10)
None of this is going to run!
console.log(99)
*/

oder Kommentare mitten im Code

console.log(/*IGNORED!*/ 5); // Still Just prints 5

-------------------------------------------------------------------------------------------

Datentypen

Datentypen sind Klassifizierungen, die wir den verschiedenen Arten von Daten zuweisen, die wir in der Programmierung verwenden. In JavaScript gibt es acht grundlegende Datentypen:

- Number (Zahl): Jede Zahl, auch Dezimalzahlen – z. B. 4, 8, 1516, 23.42.

- BigInt: Sehr große Zahlen, die größer als 2⁵³–1 oder kleiner als –(2⁵³–1) sind. Sie werden mit einem n am Ende dargestellt: z. B. 1234567890123456n.

- String (Zeichenkette): Jede Gruppe von Zeichen auf der Tastatur (Buchstaben, Zahlen, Leerzeichen, Symbole usw.), die in einfache ('...') oder doppelte ("...") Anführungszeichen gesetzt wird. Wir bevorzugen einfache Anführungszeichen. Manche bezeichnen einen String auch einfach als ein schickeres Wort für Text.

- Boolean (Boolescher Wert): Dieser Datentyp kennt nur zwei mögliche Werte: true (wahr) oder false (falsch) – ohne Anführungszeichen. Man kann sich Booleans gut als Ein-/Aus-Schalter oder als Antwort auf eine Ja-/Nein-Frage vorstellen.

- Null: Dieser Datentyp steht für das absichtliche Fehlen eines Werts und wird mit dem Schlüsselwort null (ohne Anführungszeichen) dargestellt.

- Undefined: Wird mit dem Schlüsselwort undefined (ebenfalls ohne Anführungszeichen) dargestellt. Es bedeutet ebenfalls, dass ein Wert nicht existiert, wird jedoch anders verwendet als null. undefined steht für ein nicht gesetztes oder nicht zugewiesenes Element.

- Symbol: Ein neuerer Datentyp in JavaScript, der für eindeutige Bezeichner verwendet wird – vor allem in komplexeren Anwendungen. Du musst dir darüber jetzt noch keine Gedanken machen.

- Object (Objekt): Eine Sammlung zusammengehöriger Daten. Objekte sind komplexer als die anderen Datentypen.

Die ersten sieben dieser Typen gelten als primitive Datentypen. Sie sind die grundlegendsten Bausteine in JavaScript. Objekte hingegen sind komplexer, und wir werden im Verlauf dieses Kurses noch viel mehr über sie lernen.

Am Anfang wirken acht Datentypen vielleicht nicht besonders viel, aber du wirst schnell sehen, wie viele Möglichkeiten sich eröffnen, sobald wir sie gezielt einsetzen. Vor allem mit Objekten lassen sich später sehr komplexe Datenstrukturen erstellen.

Beispiele:

console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)

-----------------------------------------------------------------------------------------------

Arithmetische Operatoren

Grundlegende Rechenoperationen sind beim Programmieren oft sehr nützlich.

Ein Operator ist ein Zeichen, das in unserem Code eine bestimmte Aufgabe ausführt. JavaScript bietet mehrere eingebaute arithmetische Operatoren, mit denen wir mathematische Berechnungen mit Zahlen durchführen können. Dazu gehören die folgenden Operatoren und ihre jeweiligen Symbole:

Addition: +

Subtraktion: -

Multiplikation: *

Division: /

Rest (Modulo): %

Beispiele:

console.log(0 + 3.5)
console.log(2025 - 1969)
console.log(65 / 240)
console.log(0.2708 * 100)

--------------------------------------------------------------------------------------

String-Verkettung

Operatoren sind nicht nur für Zahlen da! Wenn der +-Operator auf zwei Strings angewendet wird, fügt er den rechten String an den linken String an:

Dieser Vorgang, einen String an einen anderen anzufügen, nennt sich Verkettung.

Beachte im dritten Beispiel, dass wir darauf geachtet haben, am Ende des ersten Strings ein Leerzeichen einzufügen. Der Computer fügt die Strings genau so zusammen, wie sie sind, daher müssen wir das gewünschte Leerzeichen zwischen den beiden Strings selbst mitgeben.

Genau wie bei der normalen Mathematik können wir unsere Operationen kombinieren oder verketten, um ein Endergebnis zu erhalten:

Beispiele:

console.log('Hello'+'World')
console.log('Hello '+'World')

----------------------------------------------

Eigenschaften

Wenn wir ein neues Datenelement in ein JavaScript-Programm einführen, speichert der Browser es als Instanz eines Datentyps. Alle Datentypen haben Zugriff auf bestimmte Eigenschaften, die an jede Instanz weitergegeben werden.

Zum Beispiel hat jede String-Instanz eine Eigenschaft namens length, die die Anzahl der Zeichen in diesem String speichert. Wir können Informationen über eine Eigenschaft abrufen, indem wir den String mit einem Punkt und dem Eigenschaftsnamen ergänzen:

Bsp:

console.log('Hello'.length); // Prints 5

Der Punkt (.) ist ein weiterer Operator! Wir nennen ihn den Punktoperator.

Im obigen Beispiel wird der Wert der Eigenschaft length von der String-Instanz 'Hello' abgerufen. Das Programm gibt die Zahl 5 in der Konsole aus, weil das Wort „Hello“ aus fünf Zeichen besteht.

Bsp:

console.log('Teaching the world how to code'.length); // Prints 30

------------------------------------------------------------------------

Methoden

Erinnere dich: Methoden sind Aktionen, die wir ausführen können. Datentypen haben Zugriff auf bestimmte Methoden, mit denen wir Instanzen dieses Datentyps bearbeiten können. JavaScript bietet viele String-Methoden an.

Wir rufen diese Methoden auf, indem wir eine Instanz mit folgendem ergänzen:

einem Punkt (dem Punktoperator)

dem Namen der Methode

geöffneten und geschlossenen Klammern

Beispiel: 'beispiel string'.methodName().

Kommt dir diese Syntax bekannt vor? Wenn wir console.log() verwenden, rufen wir die Methode .log() des Objekts console auf. Lass uns console.log() und einige echte String-Methoden in Aktion ansehen!

BSP:

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

Schauen wir uns jede der obigen Zeilen genauer an:

In der ersten Zeile wird die Methode .toUpperCase() auf die String-Instanz 'hello' angewendet. Das Ergebnis wird in der Konsole ausgegeben. Diese Methode gibt einen String in Großbuchstaben zurück: 'HELLO'.

In der zweiten Zeile wird die Methode .startsWith() auf die String-Instanz 'Hey' angewendet. Diese Methode erhält als Eingabe (Argument) den Buchstaben 'H' in den Klammern. Da der String 'Hey' tatsächlich mit dem Buchstaben 'H' beginnt, gibt die Methode den booleschen Wert true zurück.

Eine Liste der eingebauten String-Methoden findest du in der JavaScript-Dokumentation. Entwickler*innen nutzen Dokumentationen als Nachschlagewerk. Dort werden JavaScript-Schlüsselwörter, Methoden und Syntax beschrieben.

Liste mit allen möglichen

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Beispiele:

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

----------------------------------------------------

Neben console gibt es noch weitere in JavaScript integrierte Objekte. Später werden wir unsere eigenen Objekte erstellen, aber vorerst bieten diese „eingebauten“ Objekte viele nützliche Funktionen.

Zum Beispiel, wenn wir komplexere mathematische Operationen als die Grundrechenarten durchführen wollen, gibt es das eingebaute Math-Objekt in JavaScript.

Das Tolle an Objekten ist, dass sie Methoden haben! Rufen wir die Methode .random() des eingebauten Math-Objekts auf:

console.log(Math.random()); // Prints a random number between 0 and 1

Im obigen Beispiel haben wir die Methode .random() aufgerufen, indem wir den Objektnamen mit dem Punktoperator, dem Methodennamen und den öffnenden sowie schließenden Klammern ergänzt haben. Diese Methode gibt eine Zufallszahl zwischen 0 (inklusive) und 1 (exklusive) zurück.

Um eine Zufallszahl zwischen 0 und 50 zu erzeugen, könnten wir dieses Ergebnis mit 50 multiplizieren, zum Beispiel so:

Math.random() * 50;

Das obige Beispiel ergibt wahrscheinlich eine Dezimalzahl.

Um sicherzustellen, dass das Ergebnis eine Ganzzahl ist, können wir eine weitere nützliche Methode des Math-Objekts verwenden: Math.floor().

Math.floor() nimmt eine Dezimalzahl und rundet sie auf die nächstkleinere ganze Zahl ab.
Wir können Math.floor() verwenden, um eine Zufallszahl wie folgt abzurunden:

Math.floor(Math.random() * 50);

In diesem Fall passiert Folgendes:

Math.random() erzeugt eine Zufallszahl zwischen 0 und 1.

Wir multiplizieren diese Zahl mit 50, wodurch wir eine Zahl zwischen 0 und 50 erhalten.

Dann rundet Math.floor() diese Zahl auf die nächstkleinere ganze Zahl ab.

Wenn wir diese Zufallszahl im Terminal (bzw. in der Konsole) sehen möchten, müssen wir sie zusätzlich mit console.log() ausgeben:

console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

Weitere möglichkeinte für Math:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Weiter möglichkeiten für Number:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Beispiele:

console.log(Math.floor(Math.random() *100))
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))
-------------------------------------------------------

Rückblick

Lass uns die gerade gelernten Konzepte noch einmal zusammenfassen:

Daten werden mit console.log() in der Konsole ausgegeben, einem Bedienfeld, das Meldungen anzeigt.

Wir können einzeilige Kommentare mit // und mehrzeilige Kommentare zwischen /* und */ schreiben.

Es gibt 8 grundlegende Datentypen in JavaScript:
Zahlen (number), BigInt, Strings, Booleans, null, undefined, Symbol und Objekte.

Zahlen sind beliebige Zahlen ohne Anführungszeichen, z. B. 23.8879.

Strings sind Zeichenketten, die in einzelne oder doppelte Anführungszeichen eingeschlossen sind, z. B. 'Sample String'.

Eingebaute arithmetische Operatoren sind: +, -, *, / und %.

Objekte, einschließlich Instanzen von Datentypen, können Eigenschaften haben, die Informationen speichern. Eigenschaften werden mit einem Punkt nach dem Objektnamen aufgerufen, z. B. 'Hello'.length.

Objekte können auch Methoden haben, die Aktionen ausführen. Methoden werden durch Anhängen eines Punkts, dem Methodennamen und Klammern aufgerufen, z. B. 'hello'.toUpperCase().

Wir greifen auf Eigenschaften und Methoden mit dem Punktoperator . zu.

Eingebaute Objekte wie Math sind Sammlungen von Methoden und Eigenschaften, die JavaScript bereitstellt.

Hier sind noch ein paar hilfreiche Ressourcen, die du nutzen kannst:

Codecademy Docs: JavaScript
https://www.codecademy.com/resources/docs/javascript

Codecademy Workspaces: JavaScript
https://www.codecademy.com/workspaces/new

Speichere dir diese Links am besten als Lesezeichen, damit du jederzeit darauf zugreifen kannst!

