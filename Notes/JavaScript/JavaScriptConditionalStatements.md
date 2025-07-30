Was sind Bedingte Anweisungen (Conditional Statements)?

Im Leben treffen wir ständig Entscheidungen auf Grundlage von Umständen. Denk zum Beispiel an eine alltägliche Entscheidung wie das Einschlafen – wenn wir müde sind, gehen wir ins Bett, ansonsten stehen wir auf und beginnen unseren Tag.

Solche if-else-Entscheidungen lassen sich auch im Code durch sogenannte bedingte Anweisungen (conditional statements) darstellen.

Eine bedingte Anweisung überprüft eine bestimmte Bedingung (oder mehrere) und führt eine Aktion aus, abhängig vom Ergebnis dieser Bedingung(en).

In dieser Lektion lernst du, wie Programme Entscheidungen treffen, indem sie Bedingungen auswerten und Logik in den Code bringen!
Wir behandeln dabei folgende Konzepte:

if, else if und else-Anweisungen

Vergleichsoperatoren

Logische Operatoren

Truthy vs. Falsy-Werte

Ternäre Operatoren

switch-Anweisung

Also: Wenn du bereit bist, diese Konzepte zu lernen, geh zur nächsten Lektion — ansonsten, lies dir die Konzepte nochmal durch, sieh dir das Diagramm an und bereite dich vor!

----------------------------------------

If-Anweisung (If Statement)

Oft führen wir eine Handlung basierend auf einer Bedingung aus. Zum Beispiel:

Wenn das Wetter heute schön ist, gehen wir raus.

Wenn der Wecker klingelt, stellen wir ihn aus.

Wenn wir müde sind, gehen wir schlafen.

In der Programmierung können wir solche Entscheidungen ebenfalls treffen – mit einer sogenannten if-Anweisung (if statement).

if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!

Beachte im obigen Beispiel, dass wir eine if-Anweisung verwenden. Eine if-Anweisung besteht aus folgenden Bestandteilen:

Aufbau einer if-Anweisung:
Das Schlüsselwort if, gefolgt von runden Klammern ()

Innerhalb der Klammern steht eine Bedingung, die entweder true (wahr) oder false (falsch) ergibt

Nach den Klammern folgt ein Codeblock in geschweiften Klammern {}

Wenn die Bedingung true ist, wird der Code im Block ausgeführt

Wenn die Bedingung false ist, wird der Codeblock übersprungen

Beispiel:

let sale = true
if (sale) {
  console.log('Time to buy!')
}

----------------------------------------------------------

If...Else-Anweisungen

Im vorherigen Beispiel haben wir eine einfache if-Anweisung verwendet, um eine Bedingung zu prüfen und Code nur dann auszuführen, wenn die Bedingung true ist.

Aber was ist, wenn die Bedingung false ist und wir dann etwas anderes tun möchten?

Dann verwenden wir eine else-Anweisung, um eine Alternative auszuführen – also Code, der läuft, wenn die if-Bedingung nicht zutrifft.

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}

// Prints: But the code in this block will!

Eine else-Anweisung muss immer mit einer if-Anweisung kombiniert werden – gemeinsam nennt man sie eine if...else-Anweisung.

In der if...else-Anweisung gilt:
Die else-Anweisung folgt direkt auf den Codeblock der if-Anweisung.

Sie beginnt mit dem Schlüsselwort else.

Ihr Codeblock ist in geschweifte Klammern {} eingeschlossen.

Der Code innerhalb des else-Blocks wird ausgeführt, wenn die if-Bedingung false ergibt.

Beispiel:

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

----------------------------------------------- -------

Vergleichsoperatoren

Beim Schreiben von Bedingungen (z. B. in if-Anweisungen) müssen wir oft Werte miteinander vergleichen. Dafür verwenden wir sogenannte Vergleichsoperatoren (comparison operators).

📊 Nützliche Vergleichsoperatoren in JavaScript:
Operator	     Bedeutung	                Beispiel
<	             Kleiner als	            3 < 5 → true
>	             Größer als	                10 > 7 → true
<=	             Kleiner oder gleich	    4 <= 4 → true
>=	             Größer oder gleich	        6 >= 9 → false
===	             Gleich (Wert und Typ)	    5 === 5 → true
!==	             Ungleich (Wert oder Typ)	3 !== '3' → true

📌 Wichtig:
Diese Operatoren vergleichen den linken Wert mit dem rechten.

Sie geben immer ein Boolean-Ergebnis zurück – also true oder false.

10 < 12 // Evaluates to true

Man kann sich Vergleichsausdrücke gut als Fragen vorstellen:

Wenn die Antwort „Ja“ ist → ergibt der Ausdruck true

Wenn die Antwort „Nein“ ist → ergibt der Ausdruck false

'apples' === 'oranges' // false

Im obigen Beispiel verwenden wir den Identitätsoperator (===), um zu überprüfen, ob der String 'apples' gleich dem String 'oranges' ist.

Da sich beide Strings unterscheiden, ergibt der Vergleich:

🔍 Allgemein gilt:
Alle Vergleichsausdrücke bestehen aus:

Zwei Werten, die verglichen werden
– z. B. Zahlen, Strings, Variablen usw.

Einem Vergleichsoperator, der die Werte verbindet
– z. B. >, <, >=, <=, ===, !==

Beispiel:

let hungerLevel = 7
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

-------------------------------------------

Logische Operatoren (Logical Operators)
Wenn wir mit Bedingungen (conditionals) arbeiten, verwenden wir Booleans, also true oder false.

JavaScript stellt uns logische Operatoren zur Verfügung, mit denen wir mehrere Bedingungen kombinieren oder logisch verändern können.

🔧 Die drei logischen Operatoren:
Operator	Name	Beschreibung
&&	AND-Operator	Alle Bedingungen müssen true sein
`		`
!	NOT-Operator (auch "Bang-Operator")	Kehrt den Wahrheitswert um (true → false und umgekehrt)

🧠 Merke:
&& → beide Bedingungen müssen true sein (and operator)

|| → mindestens eine Bedingung muss true sein  (or operator)

! → kehrt true in false um und umgekehrt (not operator / bang operator)

Mit diesen Operatoren kannst du deine if-Statements deutlich flexibler gestalten.

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

Wenn wir den && (UND)-Operator verwenden, müssen beide Bedingungen den Wert true haben, damit die gesamte Bedingung als true gilt und der entsprechende Codeblock ausgeführt wird.
👉 Ist eine der Bedingungen false, dann ergibt der gesamte Ausdruck false, und der else-Block wird ausgeführt.

🔁 Was aber, wenn nur eine Bedingung erfüllt sein muss?
Dann verwenden wir den || (ODER)-Operator.

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

Wenn man den || (ODER)-Operator verwendet, muss nur eine der Bedingungen den Wert true haben, damit die gesamte Bedingung true ergibt.

❗ Der ! (NOT)-Operator
Der !-Operator kehrt den Wert eines Booleans um:

!true wird zu false

!false wird zu true

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

Im Wesentlichen nimmt der !-Operator einen Wert, der true ist, und gibt false zurück, oder er nimmt einen Wert, der false ist, und gibt true zurück.

Logische Operatoren werden häufig in bedingten Anweisungen verwendet, um unserer Programmierung eine weitere Logik-Ebene hinzuzufügen.

Beispiel:

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

---------------------------------------

Truthy und Falsy
Betrachten wir, wie nicht-boolean Datentypen – wie Strings oder Zahlen – ausgewertet werden, wenn sie innerhalb einer Bedingung geprüft werden.

Manchmal möchtest du lediglich überprüfen, ob eine Variable existiert, ohne dass sie unbedingt einen bestimmten Wert haben muss — du willst nur wissen, ob der Variable überhaupt ein Wert zugewiesen wurde.

Hier ist ein Beispiel:

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

Der Codeblock innerhalb der if-Anweisung wird ausgeführt, weil myVariable einen „truthy“ Wert hat; obwohl der Wert von myVariable nicht ausdrücklich true ist, wird er in einem booleschen oder bedingten Kontext als wahr ausgewertet, da ihm ein nicht-falsy Wert zugewiesen wurde.

Welche Werte gelten also als falsy, also werden als false ausgewertet, wenn sie als Bedingung geprüft werden? Zu den falsy-Werten gehören:

0

Leere Zeichenketten wie "" oder ''

null — steht dafür, dass kein Wert vorhanden ist

undefined — steht dafür, dass eine deklarierte Variable keinen Wert hat

NaN (Not a Number) — kein gültiger numerischer Wert

Hier ist ein Beispiel mit Zahlen:

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

Die Bedingung wird als false ausgewertet, weil der Wert von numberOfApples 0 ist.
Da 0 ein falsy Wert ist, wird der Codeblock innerhalb der else-Anweisung ausgeführt.

Beispiel:

let wordCount = 7;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

------------------------------------------------------

Zuweisung mit Truthy und Falsy
Truthy- und falsy-Auswertungen eröffnen viele Möglichkeiten für Kurzschreibweisen!

Angenommen, du hast eine Website und möchtest den Benutzernamen verwenden, um eine persönliche Begrüßung anzuzeigen.
Manchmal hat der Benutzer jedoch kein Konto, wodurch die Variable username einen falsy Wert haben kann.

Der folgende Code prüft, ob username definiert ist, und weist einen Standardwert zu, falls nicht:

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

Wenn du dein Wissen über logische Operatoren kombinierst, kannst du eine Kurzschreibweise für den obigen Code verwenden.

In einer booleschen Bedingung weist JavaScript einer Variable den truthy Wert zu, wenn du den ||-Operator bei der Zuweisung verwendest:

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

Weil bei ||- oder Oder-Anweisungen zuerst die linke Bedingung geprüft wird, erhält die Variable defaultName den tatsächlichen Wert von username, wenn dieser truthy ist. Ist username hingegen falsy, wird defaultName der Wert 'Stranger' zugewiesen.

Dieses Prinzip wird auch als Short-Circuit-Evaluation bezeichnet.

Beispiel:

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

print: The pen is mightier than the sword.

oder

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

print: The marker is mightier than the sword.

----------------------------------------------------------------

Ternärer Operator
Im Sinne einer Kurzschreibweise können wir den ternären Operator verwenden, um eine if...else-Anweisung zu vereinfachen.

Schau dir das Beispiel einer if...else-Anweisung an:

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

Wir können den ternären Operator verwenden, um dieselbe Funktionalität auszuführen:

isNightTime ? console.log('Turn on the lights!')
: console.log('Turn off the lights!');

Im obigen Beispiel:

Die Bedingung, isNightTime, steht vor dem ?.
Nach dem ? folgen zwei Ausdrücke, die durch einen Doppelpunkt : getrennt sind.
Wenn die Bedingung als wahr (true) ausgewertet wird, wird der erste Ausdruck ausgeführt.
Wenn die Bedingung als falsch (false) ausgewertet wird, wird der zweite Ausdruck ausgeführt.

Wie bei if...else-Anweisungen können ternäre Operatoren für Bedingungen verwendet werden, die zu wahr oder falsch ausgewertet werden.

Beispiele:

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!')
: console.log('Incorrect!');

let favoritePhrase = 'Love That!';

(favoritePhrase === 'Love That!') ? console.log('I love that!')
: console.log("I don't love that!");

------------------------------------------------------------------------

Else-If-Anweisungen
Wir können weitere Bedingungen zu unserer if...else-Anweisung mit einer else if-Anweisung hinzufügen. Die else if-Anweisung ermöglicht mehr als zwei mögliche Ergebnisse. Du kannst so viele else if-Anweisungen hinzufügen, wie du möchtest, um komplexere Bedingungen zu erstellen!

Die else if-Anweisung steht immer nach der if-Anweisung und vor der else-Anweisung. Sie nimmt ebenfalls eine Bedingung entgegen. Schauen wir uns die Syntax an:

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

Die else if-Anweisungen ermöglichen mehrere mögliche Ergebnisse. if/else if/else-Anweisungen werden von oben nach unten gelesen, sodass der erste Ausdruck, der von oben nach unten als wahr (true) ausgewertet wird, auch der Codeblock ist, der ausgeführt wird.

Im obigen Beispiel wird stopLight === 'red' als falsch ausgewertet, während stopLight === 'yellow' als wahr bewertet wird. Daher wird der Code innerhalb der ersten else if-Anweisung ausgeführt. Die übrigen Bedingungen werden nicht mehr geprüft. Wenn keine der Bedingungen wahr gewesen wäre, hätte der Code im else-Block ausgeführt werden.

Beispiel:
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

----------------------------------------------------------------------

Das Schlüsselwort switch
else if-Anweisungen sind ein großartiges Werkzeug, wenn wir mehrere Bedingungen überprüfen müssen. In der Programmierung kommt es häufig vor, dass wir mehrere Werte prüfen und jeden von ihnen unterschiedlich behandeln müssen. Zum Beispiel:

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

Im obigen Code haben wir eine Reihe von Bedingungen, die prüfen, ob ein Wert mit der Variable groceryItem übereinstimmt. Unser Code funktioniert zwar, aber stell dir vor, wir müssten 100 verschiedene Werte prüfen! So viele else if-Anweisungen zu schreiben, klingt nach viel Aufwand!

Eine switch-Anweisung bietet eine alternative Syntax, die leichter zu lesen und zu schreiben ist. Eine switch-Anweisung sieht so aus:

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

Das Schlüsselwort switch startet die Anweisung und wird gefolgt von ( ... ), das den Wert enthält, mit dem jeder case verglichen wird. Im Beispiel ist der Wert oder Ausdruck der switch-Anweisung groceryItem.
Innerhalb des Blocks { ... } gibt es mehrere cases. Das Schlüsselwort case prüft, ob der Ausdruck dem angegebenen Wert entspricht, der ihm folgt. Der Wert nach dem ersten case ist 'tomato'. Wenn der Wert von groceryItem 'tomato' wäre, würde der console.log()-Befehl in diesem case ausgeführt werden.
Da der Wert von groceryItem 'papaya' ist, wird der dritte case ausgeführt — "Papayas are $1.29" wird in der Konsole ausgegeben.
Das Schlüsselwort break weist den Computer an, den Block zu verlassen und keinen weiteren Code oder weitere cases im Codeblock auszuführen.
Hinweis: Ohne break-Anweisungen würde der erste passende case zwar ausgeführt werden, aber auch alle folgenden cases, unabhängig davon, ob sie passen oder nicht — einschließlich des default. Dieses Verhalten unterscheidet sich von if/else-Bedingungen, die nur einen Codeblock ausführen.
Am Ende jeder switch-Anweisung gibt es eine default-Anweisung. Wenn keiner der cases zutrifft, wird der Code im default-Block ausgeführt.

Beispiel

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
}

----------------------------------------------

Zusammenfassung
Gut gemacht! Hier sind einige der wichtigsten Konzepte zu Bedingungen:

Eine if-Anweisung prüft eine Bedingung und führt eine Aufgabe aus, wenn diese Bedingung als wahr (true) ausgewertet wird.

if...else-Anweisungen treffen binäre Entscheidungen und führen unterschiedliche Codeblöcke basierend auf einer angegebenen Bedingung aus.

Wir können weitere Bedingungen mit else if-Anweisungen hinzufügen.

Vergleichsoperatoren wie <, >, <=, >=, === und !== können zwei Werte vergleichen.

Der logische Und-Operator && prüft, ob beide angegebenen Ausdrücke wahr sind.

Der logische Oder-Operator || prüft, ob mindestens einer der angegebenen Ausdrücke wahr ist.

Der Negationsoperator ! kehrt die Wahrheitswerte (truthiness/falsiness) eines Wertes um.

Der ternäre Operator ist eine Kurzschreibweise, um prägnante if...else-Anweisungen zu vereinfachen.

Eine switch-Anweisung kann verwendet werden, um das Schreiben mehrerer else if-Anweisungen zu vereinfachen. Das Schlüsselwort break verhindert, dass weitere Fälle in einer switch-Anweisung geprüft und ausgeführt werden.