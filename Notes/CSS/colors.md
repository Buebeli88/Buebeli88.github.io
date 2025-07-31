Setting foreground text color in CSS
Using the color property, foreground text color of an element can be set in CSS. The value can be a valid color name supported in CSS like green or blue. Also, 3 digit or 6 digit color code like #22f or #2a2aff can be used to set the color.

Beispiel:

p {
color: #2a2aff;
}

oder

span {
color: green;
}

Background Color
The background-color CSS property controls the background color of elements.

Beispiel:

background-color: blue;

oder

p {
background-color: blue;
}


Color Name Keywords
Color name keywords can be used to set color property values for elements in CSS.

Beispiel:

h1 {
color: aqua;
}

oder

li {
color: khaki;
}


CSS Hexadecimal Colors
CSS colors can be represented in hexadecimal (or hex) notation. Hexadecimal digits can represent sixteen different values using 0-9 and a-f.
Hexadecimal colors are composed of 6 characters–each group of two represents a value between 0 and 255 for red, green, or blue. For example #ff0000 is all red, no green, and no blue.
When both characters of all three colors are repeated, hex colors can be abbreviated to only three values, so #0000ff could also be represented as #00f.

Beispiel:

.red {
color: #ff0000;
}

oder

.short-blue {
color: #00f;
}


Opacity
The opacity CSS property can be used to control the transparency of an element. The value of this property ranges from 0 (transparent) to 1 (opaque).

Beispiel:

opacity: 0.5;


CSS rgb() Colors
CSS colors can be declared with RGB colors using rgb() syntax.
rgb() should be supplied with three values representing red, green, and blue. These values range can from 0 to 255.

Beispiel:

.hot-pink {
color: rgb(249, 2, 171);
}

oder

.green {
color: rgb(0, 255, 0);


CSS HSL Colors
CSS colors can be declared with the HSL color system using hsl() syntax. This syntax contains three values: hue (the color value itself), saturation (intensity), and lightness.
Hue values range from 0 to 360 while saturation and lightness values are represented as percentages.

Beispiel:

.light-blue {
background-color: hsl(200, 70%, 50%);


CSS Color Alpha Values
Alpha values determine the transparency of colors in CSS. Alpha values can be set for both RGB and HSL colors by using rgba() and hsla() and providing a fourth value representing alpha. Alpha values can range between 0.0 (totally transparent) and 1.0 (totally opaque).
The CSS transparent value can also be used to create a fully transparent element.

Beispiel:

.midground {
background-color: rgba(0, 255, 0, 0.5);
}

oder

.foreground {
background-color: hsla(34, 100%, 50%, 0.1);
}

oder

.transparent {
color: transparent;
}



