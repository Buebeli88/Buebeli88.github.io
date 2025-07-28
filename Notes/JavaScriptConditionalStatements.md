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

-------------------------------------------------------

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
&& → beide Bedingungen müssen true sein

|| → mindestens eine Bedingung muss true sein

! → kehrt true in false um und umgekehrt

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

