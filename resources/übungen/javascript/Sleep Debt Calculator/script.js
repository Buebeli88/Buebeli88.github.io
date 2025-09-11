// Funktion, die die Schlafstunden für einen bestimmten Tag aus einem Input-Feld ausliest
function getSleepHours(day) {
  // Hole das Input-Element anhand der Tages-ID (z.B. "monday", "tuesday" etc.)
  const input = document.getElementById(day.toLowerCase());
  
  // Falls das Input-Feld nicht existiert, gib 0 zurück
  if (!input) return 0;
  
  // Versuche den eingegebenen Wert in eine Zahl umzuwandeln
  const val = parseFloat(input.value);
  
  // Falls der Wert keine gültige Zahl ist, gib 0 zurück, sonst die Zahl selbst
  return isNaN(val) ? 0 : val;
}

// Funktion, die die gesamten Schlafstunden der Woche berechnet
function getActualSleepHours() {
  // Array mit allen Wochentagen
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Variable zum Summieren der Schlafstunden
  let total = 0;
  
  // Für jeden Tag die Schlafstunden auslesen und addieren
  days.forEach(day => {
    total += getSleepHours(day);
  });
  
  // Gesamtsumme der Schlafstunden zurückgeben
  return total;
}

// Funktion, die die idealen Schlafstunden für die Woche berechnet
function getIdealSleepHours() {
  const idealHours = 8; // Ideale Schlafdauer pro Tag (kann angepasst werden)
  return idealHours * 7; // Idealstunden für 7 Tage
}

// Funktion, die das Schlafdefizit oder -überschuss berechnet und eine Nachricht anzeigt
function calculateSleepDebt() {
  // Tatsächliche Schlafstunden der Woche
  const actualSleepHours = getActualSleepHours();
  
  // Ideale Schlafstunden der Woche
  const idealSleepHours = getIdealSleepHours();
  
  let message = "";

  // Wenn die tatsächlichen Schlafstunden genau den idealen entsprechen
  if (actualSleepHours === idealSleepHours) {
    message = "You got the perfect amount of sleep!";
  }
  // Wenn mehr geschlafen wurde als ideal
  else if (actualSleepHours > idealSleepHours) {
    const overSleep = actualSleepHours - idealSleepHours;
    message = `You got more sleep than needed — ${overSleep} hour(s) over your ideal.`;
  }
  // Wenn weniger geschlafen wurde als ideal
  else {
    const underSleep = idealSleepHours - actualSleepHours;
    message = `You should get some rest — you are ${underSleep} hour(s) under your ideal.`;
  }

  // Ergebnis-Nachricht im HTML-Element mit der ID "result" anzeigen
  document.getElementById("result").textContent = message;
}

// Warte, bis das DOM komplett geladen ist, bevor Event-Listener hinzugefügt wird
document.addEventListener("DOMContentLoaded", () => {
  // Button zum Prüfen des Schlafes auswählen
  const btn = document.getElementById("check-sleep");
  
  // Klick-Event auf den Button registrieren, das die Berechnung ausführt
  btn.addEventListener("click", calculateSleepDebt);
});