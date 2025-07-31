CSS bietet viele Werkzeuge und Eigenschaften, mit denen du Elemente auf einer Webseite positionieren kannst. Die Lektionen von Codecademy zum
Box-Modell
(Vorschau: Dokumentation – Definiert, wie die Abmessungen und Abstände von Elementen auf einer Webseite berechnet werden)
und CSS Display führen einige dieser Techniken ein.
In dieser Lektion wirst du das Flexible Box Layout, auch Flexbox genannt, kennenlernen – ein Werkzeug, das das Positionieren von Elementen erheblich vereinfacht.
Ein Flexbox-Layout besteht aus zwei wichtigen Komponenten: Flex-Containern und Flex-Items. Ein Flex-Container ist ein Element auf einer Seite, das Flex-Items enthält. Alle direkten Kindelemente eines Flex-Containers sind Flex-Items. Diese Unterscheidung ist wichtig, da einige der Eigenschaften, die du in dieser Lektion lernen wirst, nur für Flex-Container gelten, während andere nur für Flex-Items gelten.
Um ein Element als Flex-Container zu definieren, setzt man dessen display-Eigenschaft auf flex oder inline-flex. Sobald ein Element ein Flex-Container ist, gibt es mehrere Eigenschaften, mit denen man das Verhalten seiner Kindelemente steuern kann. In dieser Lektion werden wir diese Eigenschaften behandeln:


1. justify-content
2. align-items
3. flex-grow
4. flex-shrink
5. flex-basis
6. flex
7. flex-wrap
8. align-content
9. flex-direction
10. flex-flow
.


Display: flex

Jedes Element kann ein Flex-Container sein. Flex-Container sind nützliche Werkzeuge, um Webseiten zu erstellen, die auf Änderungen der Bildschirmgröße reagieren. Die Kindelemente eines Flex-Containers passen ihre Größe und Position entsprechend der Größe und Position ihres übergeordneten Containers an.
Damit ein Element zu einem Flex-Container wird, muss seine display-Eigenschaft auf flex gesetzt werden.

.container {
  display: flex;
}

Inline-flex

In CSS bedeutet display: inline-flex, dass ein Element als flexibler Container im Inline-Stil angezeigt wird. Das bedeutet, dass das Element sich wie ein Inline-Element verhält (d.h. es nimmt nur so viel Platz ein, wie es benötigt, und kann mit anderen Inline-Elementen in einer Zeile fließen), aber seine Inhalte werden mit der Flexbox-Layoutmethode angeordnet. 

Aus <https://www.google.com/search?q=was+ist+inline-flex+in+css&safe=active&ssui=on> 

Justify-Content

In CSS, justify-content ist eine Eigenschaft, die verwendet wird, um die Ausrichtung von Elementen innerhalb eines Flex-Containers oder Grid-Containers entlang der Hauptachse zu steuern. Sie verteilt den freien Platz zwischen und um die Elemente herum. 

Below are five commonly used values for the justify-content property:
    • flex-start — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.
    • flex-end — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.
    • center — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.
    • space-around — items will be positioned with equal space before and after each item, resulting in double the space between elements.
    • space-between — items will be positioned with equal space between them, but no extra space before the first or after the last elements.


In the definitions above, “no extra space” means that 
margins
Preview: Docs Creates space around an element, separating it from neighboring elements.
 and 
borders
Preview: Docs Loading link description
 will be respected, but no more space (than is specified in the style rule for the particular element) will be added between elements. The size of each individual flex item is not changed by this property.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/justify-content> 


Align-items

align-items ist eine CSS-Eigenschaft, die in Flexbox und Grid Layouts verwendet wird, um die Ausrichtung von Elementen entlang der Querachse (vertikal bei horizontaler Hauptachse) zu steuern. Sie bestimmt, wie Elemente innerhalb eines Containers ausgerichtet werden, wenn sie nicht die volle Höhe oder Breite des Containers einnehmen. 

Below are five commonly used values for the align-items property:
    • flex-start — all elements will be positioned at the top of the parent container.
    • flex-end — all elements will be positioned at the bottom of the parent container.
    • center — the center of all elements will be positioned halfway between the top and bottom of the parent container.
    • baseline — the bottom of the content of all items will be aligned with each other.
    • stretch — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/align-items> 


You might be unfamiliar with the 
min-height
Preview: Docs Defines the minimum height of an element.
 and 
max-height
Preview: Docs Loading link description
 properties, but you have used 
height
Preview: Docs Defines the height of an element's content area. The content area is the space inside the padding, border, and margin of the element.
 and 
width
Preview: Docs Defines the width of an element's content area. The content area is the space inside the padding, border, and margin of the element.
 before. min-height, max-height, 
min-width
Preview: Docs Loading link description
, and 
max-width
Preview: Docs Defines the maximum width of an element.
 are properties that ensure an element is at least a certain size or at most a certain size. You’ll see how these become useful as you move throughout this lesson.
Now you’re going to see each of the five values above in action!

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/align-items> 



Flex-grow

flex-grow in CSS ist eine Eigenschaft, die die Fähigkeit eines Flex-Elements bestimmt, im Flex-Container zu wachsen, wenn zusätzlicher Platz vorhanden ist. Sie gibt ein Verhältnis an, das bestimmt, wie viel von dem überschüssigen Platz ein Flex-Element relativ zu den anderen Elementen im Container einnehmen soll. Ein Wert von 0 bedeutet, dass das Element nicht wächst, während ein Wert von 1 bedeutet, dass es den überschüssigen Platz gleichmäßig mit anderen Elementen mit flex-grow: 1 teilt. 


If a 
max-width
Preview: Docs Loading link description
 is set for an element, it will not grow larger than that even if there is more space for it to absorb.
All of the previous properties we have learned are declared on flex containers, or the parent elements. This property — flex-grow — is the first we have learned that is declared on flex items.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex-grow> 


Flex-shrink

flex-shrink in CSS ist eine Eigenschaft, die festlegt, wie stark ein Flex-Element schrumpft, wenn der verfügbare Platz im Flex-Container zu klein ist, um alle Elemente in ihrer angegebenen Größe darzustellen. Es steuert, wie viel ein Element relativ zu den anderen Flex-Elementen verkleinert wird, wenn der Containerinhalt zu groß für den verfügbaren Platz wird. 


You may have noticed in earlier exercises that flex items shrank when the flex container was too small, even though we had not declared the property. This is because the default value of flex-shrink is 1. However, flex items do not grow unless the flex-grow property is declared because the default value of flex-grow is 0.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex-shrink> 



Flex-basis

In CSS, flex-basis ist eine Eigenschaft, die die anfängliche Größe eines Flex-Elements innerhalb eines Flexcontainers festlegt, bevor es auf Basis von flex-grow und flex-shrink wächst oder schrumpft. Es funktioniert im Wesentlichen wie die bevorzugte Breite oder Höhe des Elements. 


Flex

In CSS bezieht sich flex auf die Eigenschaft, die das Verhalten von flexiblen Elementen innerhalb eines Flexcontainers bestimmt. Sie ist eine Kurzschreibweise für die Eigenschaften flex-grow, flex-shrink und flex-basis, die zusammen das Wachstum und die Schrumpfung von Elementen sowie deren anfängliche Größe regeln. 

.big {
  flex: 2 1 150px;
}

In the example above, we use the flex property to declare the values for flex-grow, flex-shrink, and flex-basis (in that order) all in one line.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex> 

.big {
  flex: 2 1;
}

In the example above, we use the flex property to declare flex-grow and flex-shrink, but not flex-basis.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex> 


.small {
  flex: 1 20px;
}

In the example above, we use the flex property to declare flex-grow and flex-basis. Note that there is no way to set only flex-shrink and flex-basis using 2 values.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex> 


Flex-wrap

flex-wrap ist eine CSS-Eigenschaft, die festlegt, ob Flexbox-Elemente (Flex-Items) auf einer einzigen Zeile bleiben oder umbrechen können, wenn sie nicht in eine Zeile passen. Laut MDN Web Docs bestimmt sie, ob Flex-Elemente auf eine Zeile gezwungen werden oder ob sie auf mehrere Zeilen umbrechen können. 

11. wrap — child elements of a flex container that don’t fit into a row will move down to the next line
12. wrap-reverse — the same functionality as wrap, but the order of rows within a flex container is reversed (for example, in a 2-row flexbox, the first row from a wrap container will become the second in wrap-reverse and the second row from the wrap container will become the first in wrap-reverse)
13. nowrap — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex-wrap> 



Align-content

align-content ist eine CSS-Eigenschaft, die in Flexbox- und Grid-Layouts verwendet wird, um die Ausrichtung von Flex-Zeilen oder Grid-Zeilen und -Spalten auf der Querachse (Cross Axis) zu steuern, wenn zusätzlicher Platz im Container vorhanden ist. Sie verteilt den verfügbaren Platz zwischen und um die Zeilen/Spalten herum. Im Gegensatz dazu richtet align-items einzelne Elemente innerhalb einer Zeile oder Spalte aus. 

Eigenschaften:

• flex-start — all rows of elements will be positioned at the top of the parent container with no extra space between.
• flex-end — all rows of elements will be positioned at the bottom of the parent container with no extra space between.
• center — all rows of elements will be positioned at the center of the parent element with no extra space between.
• space-between — all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.
• space-around — all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.
• stretch — if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/align-content> 


Flex-direction


Die CSS-Eigenschaft flex-direction bestimmt, wie Flex-Elemente innerhalb eines Flex-Containers angeordnet werden. Sie legt die Hauptachse und die Richtung (normal oder umgekehrt) der Anordnung fest. 


Up to this point, we’ve only covered flex items that stretch and shrink horizontally and wrap vertically. As previously stated, flex containers have two axes: a main axis and a cross axis. By default, the main axis is horizontal and the cross axis is vertical.
The main axis is used to position flex items with the following properties:
    1. justify-content
    2. flex-wrap
Preview: Docs Loading link description
    3. flex-grow
Preview: Docs Loading link description
    4. flex-shrink
Preview: Docs Loading link description
The cross axis is used to position flex items with the following properties:
    1. align-items
    2. align-content

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex-direction> 


The flex-direction property can accept four values:
    1. row — elements will be positioned from left to right across the parent element starting from the top left corner (default).
    2. row-reverse — elements will be positioned from right to left across the parent element starting from the top right corner.
    3. column — elements will be positioned from top to bottom of the parent element starting from the top left corner.
    4. column-reverse — elements will be positioned from the bottom to the top of the parent element starting from the bottom left corner.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex-direction> 



Flex-flow

flex-flow ist eine CSS-Kurzschreibweise, die die Eigenschaften flex-direction und flex-wrap zusammenfasst. Sie bestimmt, wie die Elemente innerhalb eines Flex-Containers angeordnet und umgebrochen werden. flex-direction legt die Richtung der Hauptachse (horizontal oder vertikal) fest, während flex-wrap bestimmt, ob die Elemente umgebrochen werden, wenn sie nicht mehr in eine Zeile passen. 

the first value in the flex-flow declaration is a flex-direction value and the second is a flex-wrap value. All values for flex-direction and flex-wrap are accepted

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/flex-flow> 


Nested flexboxes

Verschachtelte Flexboxen (Nested Flexboxes) in CSS beziehen sich auf die Verwendung von Flexbox-Layouts innerhalb anderer Flexbox-Container. Das bedeutet, dass Sie ein Flexbox-Element als Container für weitere Flexbox-Elemente verwenden, was Ihnen ermöglicht, mehrdimensionale Layouts zu erstellen. Flexbox ist von Natur aus eindimensional (entweder Zeilen oder Spalten), aber durch Verschachtelung können Sie komplexe Layouts mit sowohl horizontalen als auch vertikalen Ausrichtungen gestalten. 

Review:flexbox

You should be proud of yourself! You have learned the most important properties of flexbox. Flexbox is an art and a science; you can use it to make laying out multiple elements a piece of cake. You know everything necessary to begin using it in your own projects.
    1. display: flex changes an element to a block-level container with flex items inside of it.
    2. display: inline-flex allows multiple flex containers to appear inline with each other.
    3. justify-content is used to space items along the main axis.
    4. align-items is used to space items along the cross axis.
    5. flex-grow
Preview: Docs Loading link description
 is used to specify how much space (and in what proportions) flex items absorb along the main axis.
    6. flex-shrink
Preview: Docs Loading link description
 is used to specify how much flex items shrink and in what proportions along the main axis.
    7. flex-basis
Preview: Docs Loading link description
 is used to specify the initial size of an element styled with flex-grow and/or flex-shrink.
    8. flex is used to specify flex-grow, flex-shrink, and flex-basis in one declaration.
    9. flex-wrap
Preview: Docs Loading link description
 specifies that elements should shift along the cross axis if the flex container is not large enough.
    10. align-content is used to space rows along the cross axis.
    11. flex-direction
Preview: Docs Loading link description
 is used to specify the main and cross axes.
    12. flex-flow
Preview: Docs Loading link description
 is used to specify flex-wrap and flex-direction in one declaration.
    13. Flex containers can be nested inside of each other by declaring display: flex or display: inline-flex for children of flex containers.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/layout-with-flexbox/lessons/learn-flexbox/exercises/review-flexbox> 






