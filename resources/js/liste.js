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

    const alleDdmenus = [];
    for (let i = 1; i <= 99; i++) {
        const menu = document.getElementById("ddmenu" + i);
        if (menu) alleDdmenus.push(menu);
    }

    if (eingabe === "") {
        // Reset: Alle li sichtbar, alle ddmenus versteckt
        for (let li of listItems) {
            li.style.display = "";
        }
        for (let menu of alleDdmenus) {
            menu.style.display = "none"; // wichtig: zurück auf "unsichtbar"
        }
        return;
    }

    // Suche aktiv
    for (let li of listItems) {
        li.style.display = "none";
    }

    for (let menu of alleDdmenus) {
        menu.style.display = "none";
    }

    for (let li of listItems) {
        const text = li.textContent.toLowerCase();
        if (text.includes(eingabe)) {
            li.style.display = "";

            let parent = li.parentElement;
            while (parent && parent.id !== "themenContainer") {
                if (parent.tagName === "LI") {
                    parent.style.display = "";
                }
                if (parent.tagName === "DIV" && parent.id.startsWith("ddmenu")) {
                    parent.style.display = "block"; // zeige ddmenu an
                }
                parent = parent.parentElement;
            }
        }
    }
}


// Suche beim Tippen starten
document.addEventListener("DOMContentLoaded", function () {
    // Bestehender Code: Untermenüs verstecken + Suche reagieren
    for (let i = 1; i <= 99; i++) {
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