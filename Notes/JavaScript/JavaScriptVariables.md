Variablen

In der Programmierung ist eine Variable ein Behälter für einen Wert. Man kann sich Variablen als kleine Container für Informationen vorstellen, die im Speicher eines Computers abgelegt werden. Informationen, die in Variablen gespeichert sind – wie ein Benutzername, eine Kontonummer oder sogar eine persönliche Begrüßung – können so im Speicher gefunden und genutzt werden.

Variablen ermöglichen es außerdem, Daten mit einem aussagekräftigen Namen zu versehen, sodass unsere Programme für uns und andere leichter verständlich sind.

Kurz gesagt: Variablen beschriften und speichern Daten im Speicher. Dabei können wir nur wenige Dinge mit Variablen tun:

Eine Variable mit einem beschreibenden Namen erstellen.

Informationen in einer Variable speichern oder aktualisieren.

Informationen aus einer Variable abrufen oder „bekommen“.

Wichtig ist zu verstehen, dass Variablen nicht selbst Werte sind, sondern Werte enthalten und diese durch ihren Namen repräsentieren.

Stell dir das wie farbige Kästchen vor: Jedes Kästchen ist eine Variable – der Inhalt des Kästchens ist der Wert, und das Etikett auf dem Kästchen ist der Name der Variable.

In dieser Lektion werden wir lernen, wie man mit den Schlüsselwörtern var, let und const Variablen erstellt.

done!

----------------------------------------------------------------------------------

Eine Variable erstellen: var

Im Jahr 2015 brachte die ES6-Version von JavaScript viele Änderungen mit sich. Eine der größten Neuerungen waren zwei neue Schlüsselwörter, let und const, mit denen man Variablen erstellen (oder deklarieren) kann.

Vor ES6 konnten Programmierer nur das Schlüsselwort var verwenden, um Variablen zu deklarieren.

Beispiel:

var myName = 'Arya';
console.log(myName);
// Output: Arya

Schauen wir uns das Beispiel genauer an:

var, kurz für variable, ist ein JavaScript-Schlüsselwort, mit dem eine neue Variable erstellt oder deklariert wird.

myName ist der Name der Variable. Die Groß- und Kleinschreibung in dieser Form nennt man camelCase. Dabei werden Wörter zusammengeschrieben, das erste Wort klein, jedes folgende Wort beginnt mit einem Großbuchstaben (z. B. camelCaseEverything).

Das = ist der Zuweisungsoperator. Er weist der Variablen (myName) den Wert 'Arya' zu.

'Arya' ist der Wert, der der Variablen myName zugewiesen wird. Man sagt auch, die Variable myName wird mit dem Wert 'Arya' initialisiert.

Nachdem die Variable deklariert wurde, wird der Wert 'Arya' in der Konsole ausgegeben, indem man den Variablennamen verwendet: console.log(myName).

Ein paar allgemeine Regeln zur Benennung von Variablen:

Variablennamen dürfen nicht mit einer Zahl beginnen.

Variablennamen sind case-sensitive, also myName und myname sind verschiedene Variablen. Es ist schlechte Praxis, zwei Variablen mit nur unterschiedlicher Groß-/Kleinschreibung zu erstellen.

Variablennamen dürfen nicht mit reservierten Schlüsselwörtern übereinstimmen. Eine vollständige Liste der Schlüsselwörter findest du in der MDN Schlüsselwort-Dokumentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

In den nächsten Übungen lernst du, warum viele Programmierer heute lieber let und const aus ES6 verwenden. Da aber noch viel Code vor ES6 geschrieben wurde, ist es hilfreich, auch das alte Schlüsselwort var zu kennen.

Mehr über var und seine Besonderheiten findest du in der MDN var-Dokumentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

Beispiel:

var favoriteFood = 'pizza';
var numOfSlices = 8
console.log(favoriteFood);
console.log(numOfSlices);

done!!

--------------------------------------------------------------------------


Eine Variable erstellen: let

Wie im vorherigen Abschnitt erwähnt, wurde das Schlüsselwort let mit ES6 eingeführt. Das Schlüsselwort let zeigt an, dass der Wert der Variable später neu zugewiesen werden kann.

Schau dir das folgende Beispiel an:

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

Ein weiteres wichtiges Konzept bei der Verwendung von let (und auch var) ist, dass wir eine Variable deklarieren können, ohne ihr sofort einen Wert zuzuweisen.

In diesem Fall wird die Variable automatisch mit dem Wert undefined initialisiert:

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

Beachte im obigen Beispiel:

Wenn wir einer mit let deklarierten Variable keinen Wert zuweisen, hat sie automatisch den Wert undefined.

Wir können der Variable später einen neuen Wert zuweisen (also den Wert verändern).

Beispiel:

let changeMe = true;
changeMe = false;
console.log (changeMe);

done!

---------------------------------------------

Eine Variable erstellen: const

Das Schlüsselwort const wurde ebenfalls mit ES6 eingeführt und steht für „constant“ (Konstante).
Genau wie bei var und let können wir in einer const-Variable einen beliebigen Wert speichern.

Die Deklaration einer const-Variable und die Zuweisung eines Werts erfolgt genauso wie bei let und var. Schau dir das folgende Beispiel an:

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

Eine const-Variable kann nicht neu zugewiesen werden, da sie konstant ist. Wenn wir versuchen, einer const-Variable einen neuen Wert zuzuweisen, erhalten wir einen TypeError.

Konstante Variablen müssen beim Deklarieren einen Wert erhalten. Wenn wir versuchen, eine const-Variable ohne Wert zu deklarieren, führt das zu einem SyntaxError.

Wenn du dich also fragst, ob du let oder const verwenden sollst, überlege dir, ob die Variable später neu zugewiesen werden muss.

Wenn ja, nutze let.

Wenn nein, nutze const.

Beispiel:

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'

done!

---------------------------------------------

Mathematische Zuweisungsoperatoren

Schauen wir uns an, wie wir Variablen und mathematische Operatoren verwenden können, um neue Werte zu berechnen und einer Variablen zuzuweisen. Sieh dir das folgende Beispiel an:

let w = 4;
w = w + 1;

console.log(w); // Output: 5

Im obigen Beispiel haben wir die Variable w erstellt und ihr den Wert 4 zugewiesen. In der nächsten Zeile erhöht w = w + 1 den Wert von w von 4 auf 5.

Eine andere Möglichkeit, w nach einer mathematischen Operation neu zuzuweisen, ist die Verwendung von integrierten mathematischen Zuweisungsoperatoren. Den Code von oben könnten wir also so schreiben:

let w = 4;
w += 1;

console.log(w); // Output: 5

Im zweiten Beispiel haben wir den Zuweisungsoperator += verwendet, um w neu zuzuweisen. Dabei wird die mathematische Operation des Operators + mit der Zahl rechts ausgeführt und anschließend w der berechnete Wert zugewiesen.

Außerdem gibt es noch weitere mathematische Zuweisungsoperatoren — -=, \*= und /= — die auf ähnliche Weise funktionieren.

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y _= 2; // Can be written as y = y _ 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

Beispiele:

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe \*= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

done!

---

Der Inkrement- und Dekrement-Operator

Weitere mathematische Zuweisungsoperatoren sind der Inkrementoperator (++) und der Dekrementoperator (--).

Der Inkrementoperator erhöht den Wert einer Variable um 1.

Der Dekrementoperator verringert den Wert einer Variable um 1.

Zum Beispiel:

let a = 10;
a++;
console.log(a); // Output: 11

oder

let b = 20;
b--;
console.log(b); // Output: 19

Genau wie bei den vorherigen mathematischen Zuweisungsoperatoren (+=, -=, \*=, /=) wird der Wert der Variable beim Inkrementieren oder Dekrementieren aktualisiert und als neuer Wert der Variable zugewiesen.

Beispiele:

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

------------------------------------------

String-Verkettung mit Variablen

In den vorherigen Übungen haben wir Strings Variablen zugewiesen. Jetzt schauen wir uns an, wie man Strings, die in Variablen gespeichert sind, verbinden oder verketteten kann.

Der +-Operator kann verwendet werden, um zwei String-Werte zu kombinieren, auch wenn diese Werte in Variablen gespeichert sind:

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

Im obigen Beispiel haben wir der Variable myPet den Wert 'armadillo' zugewiesen. In der zweiten Zeile wird der +-Operator verwendet, um drei Strings zu verbinden: 'I own a pet', den Wert, der in myPet gespeichert ist, und '.'.

Das Ergebnis dieser Verkettung wird mit console.log() in der Konsole ausgegeben als:

I own a pet armadillo.

Beispiele:

let favoriteAnimal = 'scorpion'
console.log('My favorite animal: ' +favoriteAnimal);

------------------------------------------------------------------------

String-Interpolation

In der ES6-Version von JavaScript können wir Variablen mithilfe von Template-Literalen direkt in Strings einfügen bzw. interpolieren. Schau dir das folgende Beispiel an, in dem ein Template-Literal verwendet wird, um Strings zusammen auszugeben:

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

Beachte Folgendes:

Ein Template Literal wird von Backticks ` umschlossen (diese Taste befindet sich meist oben links auf der Tastatur, links neben der 1).

Innerhalb des Template Literals gibt es einen Platzhalter ${myPet}. Der Wert der Variablen myPet wird an dieser Stelle eingefügt.

Wenn wir den Ausdruck `I own a pet ${myPet}.` interpolieren, erhalten wir als Ausgabe den String:
'I own a pet armadillo.'

Einer der größten Vorteile von Template Literals ist die bessere Lesbarkeit des Codes. Mit ihnen können wir leichter erkennen, wie der neue String aussieht. Außerdem müssen wir uns keine Sorgen machen, doppelte oder einfache Anführungszeichen zu escapen.

Beispiel:

const myName = 'Steve'
const myCity = 'Bern'
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
//Outpute will be: My name is Steve. My favorite city is Bern

------------------------------------------------------------------------------------

Der typeof-Operator

Beim Programmieren kann es hilfreich sein, den Überblick über die Datentypen von Variablen im Programm zu behalten. Wenn wir den Datentyp eines Variablenwerts überprüfen wollen, können wir den typeof-Operator verwenden.

Der typeof-Operator prüft den Wert rechts von sich und gibt als Ergebnis einen String zurück, der den Datentyp beschreibt.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

Let’s break down the first example. Since the value unknown1 is 'foo', a string, typeof unknown1 will return 'string'.

Beispiel:

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

newVariable = 1;

console.log(typeof newVariable);

//Output. first one will be string and the second will be number

---------------------------------------------------------------------

Wiederholung: Variablen

Gute Arbeit! In dieser Lektion hast du ein zentrales Konzept der Programmierung kennengelernt: Variablen – ein Werkzeug, das du in allen zukünftigen Programmen verwenden wirst.

Hier ist eine Zusammenfassung dessen, was du gelernt hast:

Variablen speichern wiederverwendbare Daten in einem Programm und verknüpfen diese mit einem Namen.

Variablen werden im Speicher abgelegt.

Das Schlüsselwort var wurde in JavaScript vor ES6 verwendet.

let ist die bevorzugte Art, eine Variable zu deklarieren, wenn sie neu zugewiesen werden kann.
const wird verwendet, wenn der Wert konstant bleiben soll.

Nicht initialisierte Variablen speichern automatisch den primitiven Datentyp undefined.

Mathematische Zuweisungsoperatoren (wie +=, -=, *= usw.) erleichtern das Berechnen und Aktualisieren von Variablenwerten.

Der Operator + wird verwendet, um Strings zu verketten, auch wenn sie in Variablen gespeichert sind.

Mit Template Literals (ES6) kann man Werte mit Backticks ` und ${} direkt in Strings einfügen.

Das Schlüsselwort typeof gibt den Datentyp (als String) eines Wertes zurück.

Mit diesen Grundlagen bist du bereit, eigene Programme zu schreiben und weiter in JavaScript einzutauchen!

---------------------------------------------------------------------------------------------------------

