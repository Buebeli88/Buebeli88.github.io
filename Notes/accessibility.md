Using ARIA roles and properties, alt attributes, and semantic elements in your HTML is a simple way to make your website accessible to visually-impaired Internet users.
    1. Using semantic HTML elements whenever possible (such as <header> instead of <div id="header">) will allow screen reader users to navigate your website more efficiently.
    2. The role attribute is used to communicate information about the role of specific elements.
    3. role="presentation" allows a screen reader to skip markup elements that don’t directly contain useful information.
    4. aria-label and other ARIA properties can be used to help users perceive information that is communicated visually but not through text.
    5. The alt attribute should be added to every image element (and all other elements that support it) instead of aria-label. When used, its value should be a useful description of the image.



ARIA Role

ARIA provides an THML attribute called "role" it changes how a screen reader communicates an element.

Complementary Role

Beispiel: 

<div id="code-editor" role="complementary">
  …
</div>

The Role attribute and value can help a screen reader user to understand that the information in the code editor is "complementary" (supporting) to the information you are reading now.


Role: Presentation

We can instruct screen readers to skip reading unnecessary elements by setting the role attribute to "presentation".

Beispiel:

<ol role="presentation">
  <li>List Item 1</li>
  <li>List Item 2</li>
</ol>

The screenreader will skipp  the <ol> or <ul> and also the <li> element and will directly read the content of the <li>.

ARIA Properties

ARIA properties are attributes tha you can add to HTML elements. These attributes provide additional information about elements that might not be obvious to users of screen readers.

Beispiel:

<img src="#" alt="A painting of the Shenandoah Valley"/>
<p aria-label="Artist"> Armand Cabrera, 2012</p>

Here the user of a scree reader will know how this paragraph relates to the image above it.

Other ARIA properties are usefull in more complex websites using HTML forms, JavaScript, and other advanced tools.

Using ARIA: Roles, states, and properties - ARIA | MDN

Alt Attribute vs Aria-Label

The alt attribute works like the aria-label but has additional functionality.
The alt attribute will show its content if the image is not displayed for whatever reason, while the aria-label will show nothing on the site.

So the aria-label is a better choice for elements that do not support the alt attribute
