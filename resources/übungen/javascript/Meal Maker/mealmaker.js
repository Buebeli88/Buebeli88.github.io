const menu = {
  // Private Eigenschaft für das Gericht (Meal)
  _meal: '',
  // Private Eigenschaft für den Preis
  _price: 0,

  // Setter-Methode für meal
  set meal(mealToCheck) {
    // Prüfen, ob der übergebene Wert ein String ist
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;  // Wenn ja, _meal setzen
    }
  },

  // Setter-Methode für price
  set price(priceToCheck) {
    // Prüfen, ob der übergebene Wert eine Zahl ist
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;  // Wenn ja, _price setzen
    }
  },

  // Getter-Methode für todaysSpecial
  get todaysSpecial() {
    // Prüfen, ob meal und price gesetzt wurden (nicht leer und nicht 0)
    if (this._meal && this._price) {
      // Gibt einen String mit dem Tagesangebot zurück
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      // Falls meal oder price nicht korrekt gesetzt sind, Fehlermeldung zurückgeben
      return 'Meal or price was not set correctly!';
    }
  }
};

// Setzen des Gerichtes über den Setter
menu.meal = 'Spaghetti';
// Setzen des Preises über den Setter
menu.price = 5;

// Elemente holen
const mealInput = document.getElementById('mealInput');
const priceInput = document.getElementById('priceInput');
const updateBtn = document.getElementById('updateSpecialBtn');

updateBtn.addEventListener('click', () => {
  const newMeal = mealInput.value.trim();
  const newPrice = parseFloat(priceInput.value);

  // Einfache Validierung
  if (newMeal === '' || isNaN(newPrice) || newPrice <= 0) {
    alert('Bitte gültiges Gericht und gültigen Preis eingeben!');
    return;
  }

  // Werte im Objekt setzen
  menu.meal = newMeal;
  menu.price = newPrice;

  // Ausgabe aktualisieren
  document.getElementById('result').innerHTML = menu.todaysSpecial;

  // Inputs zurücksetzen (optional)
  mealInput.value = '';
  priceInput.value = '';
});

// Ausgabe des Tagesangebots in der Konsole
console.log(menu.todaysSpecial);

// Ausgabe des Tagesangebots im HTML-Element mit der ID "result"
document.getElementById("result").innerHTML = menu.todaysSpecial;