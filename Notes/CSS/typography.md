Font Family
The font-family CSS property is used to specify the typeface in a rule set. Fonts must be available to the browser to display correctly, either on the computer or linked as a web font. If a font value is not available, browsers will display their default font. When using a multi-word font name, it is best practice to wrap them in quotes.

Beispiel:

Set the overall font-family of your HTML document:

html {
font-family: Arial;
}

Or set spezific elements to a font-family (will overwright the overall font-family)

h2 {
font-family: "Times New Roman";
}

or

.nav {
font-family: Glegoo;
}


CSS @font-face rule
The CSS @font-face rule allows external fonts or font files to be imported directly into stylesheets.The location of the font file must be specified in the CSS rule so that the files can be loaded from that location. This rule also allows locally hosted fonts to be added using a relative file path instead of a web URL.

Beispiel:

@font-face {
font-family: 'Gleegoo';
src: url ('../fonts/Glegoo-Regular.ttf') /*or the actual link to the font */
format ('truetype');
}

CSS Linking fonts
Linking fonts allow user to use web fonts in the document. They can be imported in an HTML document by using the <link> tag. Once the web font URL is placed within the href attribute, the imported font can then be used in CSS declaration.

Beispiel:

<head>
    <link href="https://fonts.googleapis.com/css?family=Droid%20Serif" rel="stylesheet">
</head>


CSS Fallback Fonts
The CSS font-family property can have multiple fonts declared in order of preference. In this case the fonts following the initial font are known as the fallback fonts.
If the initial value of the property font-family fails to load to the webpage, the fallback fonts will be used.
Also you should use a "serif" or "sans-serif" als last fallback.

Beispiel:

p {
font-family: Helvetica, Arial, serif;
}


Font Size
The font-size CSS property is used to set text sizes. Font size values can be many different units or types such as pixels.

Usual units:
px, em, rem

Beispiel:

p {
font-size: 1rem;
}

CSS unit em
em is a CSS unit used to create relatively-sized content. 1 em unit represents the base font size of the current element.
In the example code block, <span> elements nested inside of elements with class nav-container will have a font size of 15px.

Beispiel:

.nav-container {
font-size: 10px;
}

.nav-container span {
font-size: 1.5em; /* 10 x 1.5 = 15px */


CSS unit rem
The CSS unit rem can be used to set the font size of HTML elements relative to the font size of the root element. 1 rem represents the size of the base font within the root element - the <html> tag.
In the example code block, the font size for all the <span> elements will be twice the size of the font size declared for the root element.

Beispiel:

html {
font-size: 18px;
}

span {
font-size: 2rem; /* 18 x 2 = 36px */


CSS font-weight Property
The CSS font-weight property declares how thick or thin should be the characters of a text. Numerical values can be used with this property to set the thickness of the text. The numeric scale range of this property is from 100 to 900 and accepts only multiples of 100. The default value is normal while the default numerical value is 400. Any value less than 400 will have text appear lighter than the default while any numerical value greater than the 400 will appear bolder.
In the given example, all the <p> elements will appear in a bolder font.

Beispiel:

p {
font-weight: 700;
}

oder

p {
font-weight: bolder;
}

Text Align
The text-align CSS property can be used to set the text alignment of inline contents. This property can be set to these values: left, right, or center.

Beispiel:

p {
text-align: right;
}


CSS font-style property
The CSS font-style property determines the font style in which text will appear.
It accepts italic as a value to set the font style to italic.

Beispiel:

p {
font-style: italic;
}


The CSS line-height property
The CSS line-height property declares the vertical spacing between lines of text. It accepts both unitless numbers as a ratio (eg. 2) and numbers specified by unit as values (eg. 12px) but it does not accept negative numbers. A unitless number is an absolute value that will compute the line height as a ratio to the font size and a unit number can be any valid CSS unit (eg. pixels, percents, ems, rems, etc.). To set the line-height of the <p> elements to 10px, the given CSS declaration can be used.

Beispiel:

p {
line-height: 10px;
}


