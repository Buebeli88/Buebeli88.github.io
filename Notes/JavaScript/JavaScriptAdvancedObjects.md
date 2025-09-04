Advanced Objects
Advanced Objects Introduction
Remember, 
objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

So if there are no objections, let’s learn more about objects!

In this lesson, we will cover these topics:

how to use the this keyword

conveying privacy in JavaScript methods

defining getters and setters in objects

creating factory functions

using destructuring techniques.

------------------------------------------------------------

The this Keyword
Objects are collections of related data and functionality. We store that functionality in 
methods on our objects:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};

Copy to Clipboard

In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

goat.makeSound(); // Prints baaa

Copy to Clipboard

Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"

Copy to Clipboard

That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

Here’s where the 
this
Preview: Docs Loading link description
 keyword comes to the rescue. If we change the .diet() method to use this, .diet() will work! :

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore

Copy to Clipboard

The this keyword references the calling object, which provides access to the calling object’s properties. In the preceding example, the calling object is goat, and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.

Let’s get comfortable using the this keyword in a method.

bsp

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo()); // Ausgabe: I am 1E78V2 and my current energy level is 100.

-------------------------------------------

Arrow Functions and this
We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the 
this keyword in a method, then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow 
functions for methods. Take a look at the example below:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Ausgabe: undefined


In the comment, note that goat.diet() would log undefined. So what happened? Notice that the .diet() method is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the preceding code snippet, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

To read more about arrow functions or the global object, check out the MDN documentation for arrow functions and the global object.

The key takeaway from this example is to avoid using arrow functions when using this in a method!

bsp

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  }
};

robot.checkEnergy(); // Ausgabe: Energy is currently at 100%

---------------------------------------------------------------------------

Privacy
Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

const bankAccount = {
  _amount: 1000
}


In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:

bankAccount._amount = 1000000;


In later exercises, we’ll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or begun, with _. Getters can return the value of internal properties,Ï and setters can safely reassign property values. For now, let’s see what happens if we can change properties that don’t have setters or getters.

bsp

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

robot.recharge(); // Ausgabe: Recharged! Energy is currently at high30%

--------------------------------------------------------------------------------

Getters
Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'


Notice that in the getter method above:

We use the get keyword followed by a function.

We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.

We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.

In the last line, we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.


Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.

Getters can return different values using conditionals
.
In a getter, we can access the properties of the calling object using this.

The functionality of our code is easier for other developers to understand.


Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name, like we did in the example above.

Great, let’s go getter!

bsp

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  
  get energyLevel(){
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel); // Ausgabe: My current energy level is 100

---------------------------------------------------------------------------

Setters
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};


Notice that in the example above:

We can perform a check for what value is being assigned to this._age.

When we use the setter method, only values that are numbers will reassign this._age

There are different outputs depending on what values are used to reassign this._age.



Then to use the setter method:

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age


Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set ._age directly:

person._age = 'forty-five'
console.log(person._age); // Prints forty-five

bsp

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' & num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors); // Ausgabe: 100

--------------------------------------------------------------------

Factory Functions
So far, we’ve been creating objects individually, but there are times when we want to create many instances of an object quickly. Here’s where factory functions come in. A real-world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters, allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters, and we could go about making each monster individually, but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monster objects, we can use a factory function that has parameters:

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};


In the preceding monsterFactory function, it takes four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

Copy to Clipboard

Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!

bsp

function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
}

const tinCan = robotFactory('P-500', true);

tinCan.beep();

console.log(tinCan.model);
console.log(tinCan.mobile);

/*
Ausgabe:
Beep Boop
P-500
true
/*

--------------------------------------------------------------------------------

Property Value Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. To remind ourselves, here’s a truncated version of the factory function:

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};


Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. We can use property value shorthand when the key and the variable passed in as the value share the same name. The following example works exactly the same as the previous:

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};

Notice that we don’t have to repeat ourselves for property assignments!

bsp

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  };
};

const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*
Ausgabe:
P-501
false
*/

---------------------------------------------------------

Destructured Assignment
We often want to extract key-value pairs from objects and save them as variables. Take, for example, the following object:

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};


If we wanted to extract the residence property as a variable, we could use the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 


However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment, we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'


Look back at the vampire object’s properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log the value of residence to the console, 'Transylvania' is printed.

We can even use destructured assignment to grab nested properties of an object:

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

bsp

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep(); // Ausgabe: Beep Boop

----------------------------------------------------------------------

Built-in Object Methods
In the previous exercises, we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.

There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys(), just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.

Let’s get acquainted with some of these methods and their documentation.

bsp

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);

console.log(robotKeys);

const robotEntries = Object.entries(robot);

console.log(robotEntries);

const newRobot = Object.assign({}, robot, { laserBlaster: true, voiceRecognition: true});

console.log(newRobot);

/*
Ausgabe:
[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
[
  [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ]
]
{
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
  laserBlaster: true,
  voiceRecognition: true
}
*/

-------------------------------------------------------------------------------

Review
Congratulations on finishing Advanced Objects!

Let’s review the concepts covered in this lesson:

The object that a method belongs to is called the calling object.

The this keyword refers to the calling object and can be used to access properties of the calling object.

Methods do not automatically have access to other internal properties of the calling object.

The value of this depends on where the this is being accessed from.

We cannot use arrow functions as methods if we want to access other internal properties.

JavaScript objects do not have built-in privacy — however, there are conventions to follow to notify other developers about the intent of the code.

The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.

Setters and getter methods allow for more detailed ways of accessing and assigning properties.

Factory functions allow us to create object instances quickly and repeatedly.

There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

As with any concept, it is a good skill to learn how to use the documentation with objects!

---------------------------------------------------------------------------------

Auf Deutsch

Fortgeschrittene Objekte
Einführung in fortgeschrittene Objekte
Objekte in JavaScript sind Container, die Daten und Funktionalität speichern. In dieser Lektion werden auf den Grundlagen der Objekterstellung aufgebaut und einige fortgeschrittene Konzepte untersucht.

Wenn keine Einwände bestehen, wird mehr über Objekte gelernt!

In dieser Lektion werden folgende Themen behandelt:

Verwendung des Schlüsselworts this

Vermittlung von Privatsphäre in JavaScript-Methoden

Definition von Gettern und Settern in Objekten

Erstellung von Factory-Funktionen

Verwendung von Destrukturierungstechniken

Das Schlüsselwort this
Objekte sind Sammlungen verwandter Daten und Funktionalitäten. Diese Funktionalität wird in Methoden eines Objekts gespeichert:

const ziege = {
  ernährungsart: 'Pflanzenfresser',
  macheGeräusch() {
    console.log('bäää');
  }
};


Im ziege-Objekt gibt es eine Methode .macheGeräusch(), die aufgerufen werden kann:

ziege.macheGeräusch(); // Gibt "bäää" aus


Wenn eine neue Methode .ernährung() hinzugefügt werden soll, die die Eigenschaft ernährungsart ausgibt:

const ziege = {
  ernährungsart: 'Pflanzenfresser',
  macheGeräusch() {
    console.log('bäää');
  },
  ernährung() {
    console.log(ernährungsart);
  }
};
ziege.ernährung(); 
// Ausgabe: ReferenceError: ernährungsart ist nicht definiert


Der Fehler tritt auf, weil innerhalb der Methode .ernährung() nicht automatisch auf andere Eigenschaften des Objekts zugegriffen werden kann.

Hier hilft das Schlüsselwort this. Wird .ernährung() mit this geändert, funktioniert die Methode:

const ziege = {
  ernährungsart: 'Pflanzenfresser',
  macheGeräusch() {
    console.log('bäää');
  },
  ernährung() {
    console.log(this.ernährungsart);
  }
};

ziege.ernährung(); 
// Ausgabe: Pflanzenfresser


this verweist auf das aufrufende Objekt und ermöglicht den Zugriff auf dessen Eigenschaften. Im Beispiel ist das aufrufende Objekt ziege, und mit this.ernährungsart wird die Eigenschaft angesprochen.

Ein Beispiel zur Übung mit this:

const roboter = {
  modell: '1E78V2',
  energieLevel: 100,
  infoGeben() {
    return `Ich bin ${this.modell} und mein aktueller Energielevel ist ${this.energieLevel}.`;
  }
};

console.log(roboter.infoGeben()); // Ausgabe: Ich bin 1E78V2 und mein aktueller Energielevel ist 100.


Arrow Functions und this
In Methoden gehört this standardmäßig zum aufrufenden Objekt. Bei Arrow Functions ist das anders:

const ziege = {
  ernährungsart: 'Pflanzenfresser',
  macheGeräusch() {
    console.log('bäää');
  },
  ernährung: () => {
    console.log(this.ernährungsart);
  }
};

ziege.ernährung(); // Ausgabe: undefined


Die Arrow Function bindet this an den Kontext, in dem sie definiert wurde, meist das globale Objekt, das die Eigenschaft ernährungsart nicht hat. Deshalb undefined.

Daraus folgt: Bei Methoden, die this verwenden, keine Arrow Functions nutzen!

Beispiel:

const roboter = {
  energieLevel: 100,
  prüfeEnergie() {
    console.log(`Energie beträgt aktuell ${this.energieLevel}%.`);
  }
};

roboter.prüfeEnergie(); // Ausgabe: Energie beträgt aktuell 100%


Privatsphäre
Zugriff auf und Änderung von Eigenschaften sind grundlegend bei Objekten. Manchmal soll aber nicht jeder Code Zugriff oder Änderungsmöglichkeiten haben.

JavaScript besitzt keine eingebaute Privatsphäre, aber Namenskonventionen helfen: Ein Unterstrich _ vor einem Eigenschaftsnamen signalisiert, dass die Eigenschaft nicht direkt verändert werden soll:

const bankkonto = {
  _betrag: 1000
}


Trotzdem ist direkte Änderung möglich:

bankkonto._betrag = 1000000;


Später werden Getter und Setter eingeführt, um den Zugriff kontrollierter zu gestalten.

Beispiel für unerwartete Folgen ohne Setter:

const roboter = {
  _energieLevel: 100,
  aufladen(){
    this._energieLevel += 30;
    console.log(`Aufgeladen! Energie beträgt jetzt ${this._energieLevel}%.`)
  }
};

roboter._energieLevel = 'hoch';

roboter.aufladen(); // Ausgabe: Aufgeladen! Energie beträgt jetzt hoch30%


Getter
Getter sind Methoden, die interne Eigenschaften eines Objekts zurückgeben, können aber mehr tun als nur Werte zurückgeben.

Beispiel:

const person = {
  _vorname: 'John',
  _nachname: 'Doe',
  get vollerName() {
    if (this._vorname && this._nachname){
      return `${this._vorname} ${this._nachname}`;
    } else {
      return 'Vorname oder Nachname fehlt.';
    }
  }
};

person.vollerName; // 'John Doe'


Wichtig:

get vor einer Funktion definiert einen Getter.

Bedingungen ermöglichen verschiedene Rückgabewerte.

Zugriff auf interne Eigenschaften erfolgt über this.

Getter wird wie eine Eigenschaft aufgerufen, ohne Klammern.

Vorteile:

Aktionen beim Zugriff möglich.

Unterschiedliche Werte durch Bedingungen.

Klare Struktur und bessere Verständlichkeit.

Namensgleichheit von Eigenschaft und Getter vermeiden, oft durch Unterstrich vor der Eigenschaft.

Beispiel:

const roboter = {
  _modell: '1E78V2',
  _energieLevel: 100,
  
  get energieLevel(){
    if (typeof this._energieLevel === 'number') {
      return `Mein aktueller Energielevel ist ${this._energieLevel}`;
    } else {
      return 'Systemfehler: Energielevel nicht abrufbar';
    }
  }
};

console.log(roboter.energieLevel); // Ausgabe: Mein aktueller Energielevel ist 100


Setter
Setter sind Methoden, die Werte bestehender Eigenschaften ändern. Beispiel:

const person = {
  _alter: 37,
  set alter(neuesAlter){
    if (typeof neuesAlter === 'number'){
      this._alter = neuesAlter;
    } else {
      console.log('Alter muss eine Zahl sein');
    }
  }
};

person.alter = 40;
console.log(person._alter); // 40
person.alter = '40'; // Ausgabe: Alter muss eine Zahl sein


Setter wird wie eine Eigenschaft ohne Klammern verwendet.

Vorteile ähnlich wie bei Gettern: Validierung, Aktionen, klare Absicht. Direkter Zugriff auf _alter bleibt möglich.

Beispiel:

const roboter = {
  _modell: '1E78V2',
  _energieLevel: 100,
  _anzahlSensoren: 15,
  get anzahlSensoren(){
    if(typeof this._anzahlSensoren === 'number'){
      return this._anzahlSensoren;
    } else {
      return 'Sensoren sind ausgefallen.';
    }
  },
  set anzahlSensoren(anzahl) {
    if (typeof anzahl === 'number' && anzahl >= 0) {
      this._anzahlSensoren = anzahl;
    } else {
      console.log('Zahl größer oder gleich 0 eingeben');
    }
  }
};

roboter.anzahlSensoren = 100;
console.log(roboter.anzahlSensoren); // Ausgabe: 100


Factory-Funktionen
Objekte können einzeln oder mehrfach erzeugt werden. Factory-Funktionen erleichtern das schnelle Erstellen mehrerer Objekte. Sie nehmen Parameter entgegen und geben ein Objekt zurück.

Beispiel Monster:

const monsterFactory = (name, alter, energieQuelle, schreckensruf) => {
  return { 
    name: name,
    alter: alter, 
    energieQuelle: energieQuelle,
    erschrecken() {
      console.log(schreckensruf);
    } 
  }
};

const geist = monsterFactory('Geist', 251, 'Ektoplasma', 'BUH!');
geist.erschrecken(); // BUH!


So müssen keine einzelnen Objekte manuell erzeugt werden.

Beispiel Roboter:

function roboterFabrik(modell, mobil) {
  return {
    modell: modell,
    mobil: mobil,
    piep() {
      console.log('Piep Boop');
    }
  };
}

const blechdose = roboterFabrik('P-500', true);

blechdose.piep();

console.log(blechdose.modell);
console.log(blechdose.mobil);


Property Value Shorthand
ES6 erlaubt Kürzel, wenn Schlüssel und Wert denselben Namen haben. Statt:

return { 
  name: name,
  alter: alter
}


genügt:

return {
  name,
  alter
}


Beispiel:

const roboterFabrik = (modell, mobil) => {
  return {
    modell,
    mobil,
    piep() {
      console.log('Piep Boop');
    }
  };
};

const neuerRoboter = roboterFabrik('P-501', false);
console.log(neuerRoboter.modell); // P-501
console.log(neuerRoboter.mobil);  // false


Destrukturierte Zuweisung
Objekteigenschaften können einfach extrahiert und Variablen zugewiesen werden:

const vampir = {
  name: 'Dracula',
  wohnort: 'Transsilvanien',
  vorlieben: {
    tag: 'drinnen bleiben',
    nacht: 'Appetit stillen'
  }
};

const { wohnort } = vampir;
console.log(wohnort); // Transsilvanien

const { tag } = vampir.vorlieben;
console.log(tag); // drinnen bleiben


Beispiel Roboter:

const roboter = {
  modell: '1E78V2',
  energieLevel: 100,
  funktionalität: {
    piep() {
      console.log('Piep Boop');
    },
    laserAbfeuern() {
      console.log('Pew Pew');
    },
  }
};

const { funktionalität } = roboter;
funktionalität.piep(); // Ausgabe: Piep Boop


Eingebaute Objektmethoden
JavaScript stellt eingebaute Methoden bereit, z. B. .hasOwnProperty(), .valueOf(), Object.assign(), Object.entries(), Object.keys().

Beispiel:

const roboter = {
  modell: 'SAL-1000',
  mobil: true,
  bewusst: false,
  panzer: 'Stahlverstärkt',
  energieLevel: 75
};

const roboterSchlüssel = Object.keys(roboter);
console.log(roboterSchlüssel);

const roboterEinträge = Object.entries(roboter);
console.log(roboterEinträge);

const neuerRoboter = Object.assign({}, roboter, { laserBlaster: true, sprachErkennung: true});
console.log(neuerRoboter);


Zusammenfassung
Glückwunsch zum Abschluss von Fortgeschrittene Objekte!

Wichtige Punkte:

Das Objekt, zu dem eine Methode gehört, heißt aufrufendes Objekt.

this verweist auf das aufrufende Objekt und ermöglicht Zugriff auf dessen Eigenschaften.

Methoden haben nicht automatisch Zugriff auf andere Eigenschaften.

Wert von this hängt vom Kontext ab.

Arrow Functions sollten nicht als Methoden genutzt werden, wenn this benötigt wird.

JavaScript-Objekte besitzen keine eingebaute Privatsphäre, aber Namenskonventionen mit _ signalisieren dies.

Getter und Setter ermöglichen kontrollierten Zugriff und Änderung von Eigenschaften.

Factory-Funktionen erleichtern schnelles Erstellen von Objektinstanzen.

Destrukturierung bietet elegante Möglichkeiten für Zuweisungen.

Nutzung der Dokumentation ist essentiell für gutes Verständnis und Arbeit mit Objekten.
