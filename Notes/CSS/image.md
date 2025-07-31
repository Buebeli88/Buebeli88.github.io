Noch zu bearbeiten

Background Image
The background-image CSS property sets the background image of an element. An image URL should be provided in the syntax url("moon.jpg") as the value of the property.

Beispiel:

background-image: url("nyan-cat.gif");


background-size: cover;
The CSS background-size property is used to specify the size of the background image. When given the value cover, like background-size:cover, the image covers the complete background of the container in which it is being displayed.
The proportions of the image are maintained, so if the dimensions exceed the container’s, then some parts of the image will be left out.

Beispiel:

background-size: cover;



CSS: Bild zentrieren
Ein Bild in CSS zu zentrieren ist nicht ganz trivial. Wir erklären Ihnen, wie Sie die Aufgabe trotzdem meistern.​
Von
• Michael Mierke
Anzeige
In diesem tipps+tricks Beitrag erklären wir Ihnen die gängigsten Methoden, ein Bild mithilfe unterschiedlicher CSS-Eigenschaften sowohl vertikal als auch horizontal zu zentrieren. Alles, was Sie dazu wissen müssen, lesen Sie im Folgenden.
    • So zentrieren Sie ein Bild horizontal
    • So zentrieren Sie ein Bild vertikal
So zentrieren Sie ein Bild in CSS horizontal
Wir haben drei Möglichkeiten für Sie zusammengestellt, mit denen das Bild mithilfe von CSS zentriert auf Ihrer Webseite dargestellt wird:
    • Margin: Auto
    • Text-Align
    • Display: Flex
Margin: Auto
Die erste Möglichkeit, ein Bild horizontal auszurichten, ist die Verwendung von margin: auto. Damit werden die Eigenschaften left-margin und right-margin auf automatisch gesetzt und helfen bei der Zentrierung. Die Verwendung funktiononiert jedoch nicht automatisch für Bilder, da es sich hier um ein Inline-Elemente handelt. Mithilfe des Befehls display:block im CSS-Code können Bilder aber einfach in Block-Elemente umgewandelt werden. Anschließend funktioniert auch die automatische Ausrichtung.
Weiterhin müssen Sie auch eine Breite für das Bild definieren – die entsprechend nicht 100 % ist – sodass sich das Bild anhand des linken und rechten Randes automatisch ausrichten kann.
Mehr Infos
Beispiel in CSS:
img {
display: block;
margin: auto;
width: 50%;
}
Wir haben einen Beispiel-Code mithilfe des Online-Editors auf w3schools.com für Sie erstellt. Klicken Sie auf der verlinkten Seite auf "Run". Anschließend wird mittels des festgelegten CSS-Styles festgelegt, dass das Bild zentriert ausgegeben wird.
Text-Align
Die zweite Möglichkeit, ein Bild horizontal zu zentrieren, ist die Verwendung der Eigenschaft text-align. Diese Methode klappt allerdings nur, wenn sich das Bild innerhalb eines Block-Containers wie z.B. <div> befindet.
Mehr Infos
Beispiel:
div {
text-align: center;
}
Auch hier haben wir wieder ein Beispiel auf w3school.com für Sie zum Ausprobieren erstellt. Einfach wieder auf "Run" klicken zum Ausprobieren.
Display: Flex
Die dritte Möglichkeit, ein Bild horizontal zu zentrieren, ist die Verwendung von display: flex. Analog zu text-align muss bei display: flex auch die Eigenschaften für einen Container wie div neu definiert werden. Zusätzlich muss die Eigenschaft justify-content:center definiert werden. Zuletzt muss die Breite des Bildes kleiner sein als die Breite des Containers, sonst nimmt es 100 % des Platzes ein und kann dementsprechend nicht zentriert werden.
Mehr Infos
Beispiel:
div {
display: flex;
justify-content: center;
}

img {
width: 50%;
}
Das Ganze ist wieder auf w3school.com im Editor mit Vorschau-Funktion als Beispiel für Sie einsehbar.
So zentrieren Sie ein Bild in CSS vertikal
Ein Bild kann auch vertikal mittels CSS zentriert werden. Auch hier ist wieder die Verwendung von display: flex möglich. Sie haben z.B ein Element, das eine Höhe von 1000px hat ,und ein Bild, das nur 600px hoch ist. Um das Bild vertikal auszurichten, müssen Sie in CSS die Codezeile align-items: center hinzufügen. Insgesamt sieht das Zentrieren wie folgt aus:
Mehr Infos
Beispiel:
div {
display: flex;
justify-content: center;
align-items: center;
height: 1000px;
}

img {
width: 50%;
height: 600px;
}
Mehr Infos

Aus <https://www.heise.de/tipps-tricks/CSS-Bild-zentrieren-5006108.html> 

Um Text zu einem Bild in HTML hinzuzufügen, kannst du das <img>-Tag für das Bild und ein <p>- oder <div>-Element für den Text verwenden. Du kannst den Text direkt unterhalb des Bildes platzieren oder mit CSS den Text über das Bild legen. Für eine bessere Barrierefreiheit sollte das <img>-Tag immer ein alt-Attribut enthalten, das den Bildinhalt beschreibt. 

Hier sind einige Beispiele, wie du Text und Bild kombinieren kannst:
1. Text unter dem Bild:
Code

<img src="dein_bild.jpg" alt="Beschreibung des Bildes" width="400" height="300">
<p>Hier ist der Text, der unter dem Bild angezeigt wird.</p>
2. Text über dem Bild (mit CSS):
Code

<div class="image-container">
  <img src="dein_bild.jpg" alt="Beschreibung des Bildes" class="image">
  <div class="overlay-text">Hier ist der Text, der über dem Bild angezeigt wird.</div>
</div>
Code

.image-container {
  position: relative;
  display: inline-block; /* or block if you want the container to take full width */
}

.image {
  display: block; /* Ensures the image doesn't have extra space below */
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Adjust the color as needed */
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a background for better readability */
  padding: 10px; /* Optional: Add padding for the text */
}
3. Bild und Text nebeneinander (mit CSS Flexbox):
Code

<div class="container">
  <img src="dein_bild.jpg" alt="Beschreibung des Bildes" class="image">
  <p class="text">Hier ist der Text, der neben dem Bild angezeigt wird.</p>
</div>
Code

.container {
  display: flex;
  align-items: center; /* Vertically center the content */
}

.image {
  margin-right: 20px; /* Add some space between the image and text */
}

Aus <https://www.google.com/search?q=html+text+zum+bild&sca_esv=623c97b4ff62327b&ei=LCdiaKG5LLbzi-gP46qTqQw&ved=0ahUKEwih_4iSu5iOAxW2-QIHHWPVJMUQ4dUDCBA&uact=5&oq=html+text+zum+bild&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmh0bWwgdGV4dCB6dW0gYmlsZDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSPE7UPcJWJA6cAN4AZABAJgBU6ABtQiqAQIxOLgBA8gBAPgBAZgCFaACuwnCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICDRAAGIAEGLEDGEMYigXCAgUQABiABMICCBAAGIAEGKIEwgIFEAAY7wXCAgUQIRigAcICBRAhGJ8FmAMAiAYBkAYIkgcCMjGgB9JbsgcCMTi4B5wJwgcIMC4xLjE4LjLIB2g&sclient=gws-wiz-serp&safe=active&ssui=on> 

