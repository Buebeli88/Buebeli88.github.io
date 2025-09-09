function toggleMenu(id, show) {
  document.getElementById("ddmenu" + id).style.display = show
    ? "block"
    : "none";
}

// Suchfunktion des Indexes
function themenSuche() {
    const eingabe = document.getElementById("suche").value.toLowerCase();
    const container = document.getElementById("themenContainer");
    const listItems = container.getElementsByTagName("li");

    // Alle li ausblenden
    for (let li of listItems) {
        li.style.display = "none";
    }

    // Alle ddmenu divs verstecken
    for (let i = 1; i <= 31; i++) {
        const submenuDiv = document.getElementById("ddmenu" + i);
        if (submenuDiv) submenuDiv.style.display = "none";
    }

    if (eingabe === "") {
        // Suche leer -> alle Hauptthemen (li ohne Eltern mit ddmenu) anzeigen
        for (let li of listItems) {
            // Zeige nur die li, die keine Eltern-div ddmenu haben (also Hauptthemen)
            let parent = li.parentElement;
            let isInSubmenu = false;
            while (parent && parent.id !== "themenContainer") {
                if (parent.tagName === "DIV" && parent.id && parent.id.startsWith("ddmenu")) {
                    isInSubmenu = true;
                    break;
                }
                parent = parent.parentElement;
            }
            if (!isInSubmenu) {
                li.style.display = "";
            }
        }
        // Untermenüs bleiben versteckt
        return;
    }

    // Suche nicht leer: finde passende li und zeige diese + Eltern + ddmenu divs
    for (let li of listItems) {
        const text = li.textContent.toLowerCase();
        if (text.includes(eingabe)) {
            li.style.display = "";

            let parent = li.parentElement;
            while (parent && parent.id !== "themenContainer") {
                if (parent.tagName === "LI") {
                    parent.style.display = "";
                }
                if (parent.tagName === "DIV" && parent.id && parent.id.startsWith("ddmenu")) {
                    parent.style.display = "block";
                }
                parent = parent.parentElement;
            }
        }
    }
}


// Suche beim Tippen starten
document.addEventListener("DOMContentLoaded", function () {
    // Bestehender Code: Untermenüs verstecken + Suche reagieren
    for (let i = 1; i <= 31; i++) {
        const submenuDiv = document.getElementById("ddmenu" + i);
        if (submenuDiv) submenuDiv.style.display = "none";
    }

    const suchfeld = document.getElementById("suche");

    suchfeld.addEventListener("input", themenSuche);

    // NEU: Enter-Taste abfangen
    suchfeld.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // verhindert ggf. ungewolltes Verhalten

            const container = document.getElementById("themenContainer");
            const listItems = container.getElementsByTagName("li");

            for (let li of listItems) {
                // Nur sichtbare Treffer prüfen
                if (li.style.display !== "none") {
                    const link = li.querySelector("a");
                    if (link) {
                        link.click(); // Link "klicken"
                        return; // Nur ersten Treffer ausführen
                    }
                }
            }
        }
    });
});