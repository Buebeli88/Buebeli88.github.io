HTML
HTML (HyperText Markup Language) is used to give content to a web page and instructs web browsers on how to structure that content.


Element Content
The content of an HTML element is the information between the opening and closing tags of an element.

Beispiel:

<h1>Codeacademy is awesome!</h1>


HTML Tag
The syntax for a single HTML tag is an opening angle bracket < followed by the element name and a closing angle bracket >. Here is an example of an opening <div> tag.

Beispiel:

<div>


Closing Tag
An HTML closing tag is used to denote the end of an HTML element. The syntax for a closing tag is a left angle bracket < followed by a forward slash / then the element name and a right angle bracket to close >.


Beispiel:

<body>
  …
</body>


Document Type Declaration
The document type declaration <!DOCTYPE html> is required as the first line of an HTML document. The doctype declaration is an instruction to the browser about what type of document to expect and which version of HTML is being used, in this case it’s HTML5.

Beispiel:

<!DOCTYPE html>


HTML Structure
HTML is organized into a family tree structure. HTML elements can have parents, grandparents, siblings, children, grandchildren, etc.

Beispiel:

<body>
  <div>
    <h1>It's div's child and body's grandchild</h1>
    <h2>It's h1's sibling</h2>
  </div>
</body>


Indentation
HTML code should be formatted such that the indentation level of text increases once for each level of nesting.
It is a common convention to use two or four space per level of nesting.

Beispiel:

<div>
  <h1>Heading</h1>

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>


Comments
In HTML, comments can be added between an opening <!-- and closing -->. Content inside of comments will not be rendered by browsers, and are usually used to describe a part of code or provide other details.
Comments can span single or multiple lines.

Beispiel:

<!-- Main site content -->
<div>Content</div>

<!--
  Comments can be
  multiple lines long.
-->


Whitespace
Whitespace, such as line breaks, added to an HTML document between block-level elements will generally be ignored by the browser and are not added to increase spacing on the rendered HTML page. Rather, whitespace is added for organization and easier reading of the HTML document itself.

Beispiel:

<p>Test paragraph</p>

<!-- The whitespace created by this line, and above/below this line is ignored by the browser -->

<p>Another test paragraph, this will sit right under the first paragraph, no extra space between.</p>


<html> HTML Element
The <html> element, the root of an HTML document, should be added after the !DOCTYPE declaration. All content/structure for an HTML document should be contained between the opening and closing <html> tags.

Beispiel:
<!DOCTYPE html>
<html>
  <!-- I'm a comment -->
</html>


<head> Head Element
The <head> element contains general information about an HTML page that isn’t displayed on the page itself. This information is called metadata and includes things like the title of the HTML document and links to stylesheets.

Beispiel:

<!DOCTYPE html>
<html>
  <head>
    <!-- Metadata is contained in this element -->
  </head>
</html>


<title> Title Element
The <title> element contains a text that defines the title of an HTML document. The title is displayed in the browser’s title bar or tab in which the HTML page is displayed. The <title> element can only be contained inside a document’s <head> element.


Beispiel:

<!DOCTYPE html>
<html>
  <head>
    <title>Title of the HTML page</title>
  </head>
</html>


<body> Body Element
The <body> element represents the content of an HTML document. Content inside <body> tags are rendered on the web browsers.
Note: There can be only one <body> element in a document.

Beispiel:

<body>
  <h1>Learn to code with Codeacatemy</h1>
</body>


HTML Element
An HTML element is a piece of content in an HTML document and uses the following syntax: opening tag + content + closing tag. In the code provided:
    • <p> is the opening tag.
    • Hello World! is the content.
    • </p> is the closing tag.

Beispiel:

<p>Hello World!</p>


Attribute Name and Values
HTML attributes consist of a name and a value using the following syntax: name="value" and can be added to the opening tag of an HTML element to configure or change the behavior of the element.

Beispiel:

<elementName name="value"></elementName>


<h1>-<h6> Heading Elements
HTML can use six different levels of heading elements. The heading elements are ordered from the highest level <h1> to the lowest level <h6>.

Beispiel:

<h1>Breaking News<</h1>
<h2>This is the 1st subheading</h2>
<h3>This is the 2nd subheading</3>
…
<h6>This is the 5th subheading</h6>


<p> Paragraph Element
The <p> paragraph element contains and displays a block of text.

Beispiel:

<p>This is a block of text! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


<br> Line Break Element
The <br> line break element will create a line break in text and is especially useful where a division of text is required, like in a postal address. The line break element requires only an opening tag and must not have a closing tag.

Beispiel:

<p>
  A line break haiku. <br>
  Poems are a great use case.<br>
  Oh joy! A line break.
</p>


<strong> Strong Element
The <strong> element highlights important, serious, or urgent text and browsers will normally render this highlighted text in bold by default.

Beispiel:

<p>This is <strong>important</strong>text!</p>


<em> Emphasis Element
The <em> element emphasizes text and browsers will usually italicize the emphasized text by default.

Beispiel:

<p>This<em>word</em>will be emphasized in italics.</p>


<div> Div Element
The <div> element is used as a container that divides an HTML document into sections and is short for “division”. <div> elements can contain flow content such as headings, paragraphs, links, images, etc.

Beispiel:

<div>
  <h1>A section of grouped elements</h1>
  <p>Here's some text for the section</p>
</div>
<div>
  <h1>Second section of grouped elements</h1>
  <p>Here's some text</p>
</div>


<span> Span Element
The <span> element is an inline container for text and can be used to group text for styling purposes. However, as <span> is a generic container to separate pieces of text from a larger body of text, its use should be avoided if a more semantic element is available.

Beispiel:

<p><span>Thist text</span> may be styled differently than the surrounding text.</p>


<li> List Item Element
The <li> list item element create list items inside:
    • Ordered lists <ol>
    • Unordered lists <ul>

Beispiel:

<ol>
  <li>Head east on Prince St</li>
  <li>Turn left on Elisabeth</li>
</ol>

<ul>
  <li>Cookies</li>
  <li>Milk</li>
</ul>


<ol> Ordered List Element
The <ol> ordered list element creates a list of items in sequential order. Each list item appears numbered by default.

Beispiel:

<ol>
  <li>Preheat oven to 325 F</li>
  <li>Drop cookie dough</li>
  <li>Bake for 15 min</li>
</ol>


<ul> Unordered List Element
The <ul> unordered list element is used to create a list of items in no particular order. Each individual list item will have a bullet point by default.

Beispiel:

<ul>
  <li>Play more music</li>
  <li>Read more books</li>
</ul>


<a> Anchor Element
The <a> anchor element is used to create hyperlinks in an HTML document. The hyperlinks can point to other webpages, files on the same server, a location on the same page, or any other URL via the hyperlink reference attribute, href. The href determines the location the anchor element points to.

Beispiel:

<a href="http://www.codeacademy.com">Visit this site</a>

oder

<a href="http://www.codeacademy.com">
<img src="logo.jpg">Click this image
</a>

<target> Target Attribute
The target attribute on an <a> anchor element specifies where a hyperlink should be opened. A target value of "_blank" will tell the browser to open the hyperlink in a new tab in modern browsers, or in a new window in older browsers or if the browser has had settings changed to open hyperlinks in a new window.

Beispiel:

<a href="https://www.google.com" target="_blank">This anchor element links to google and will opden in a new tab or window.</a>


Link to a Different Part of the Page #
The anchor element <a> can create hyperlinks to different parts of the same HTML document using the href attribute to point to the desired location with # followed by the id of the element to link to.

Beispiel:

<div>
  <p id="id-of-element-to-link-to">A different part of the page!</p>
</div>

<a href="#id-of-element-to-link-to">Take me to a different part of the page</a>


File Path
URL paths in HTML can be absolute paths, like a full URL, for example: https://developer.mozilla.org/en-US/docs/Learn or a relative file path that links to a local file in the same folder or on the same server, for example: ./style.css. Relative file paths begin with ./ followed by a path to the local file. ./ tells the browser to look for the file path from the current folder.

Beispiel:

<a href="https://developer.mozilla.org/en-US/docs/web">The URL for this anchor element is an absolute file path.</a>

<a href="./about.html">The URL for this anchor element is a relative file path.</a>


<img> Image Element
HTML image <img> elements embed images in documents. The src attribute contains the image URL and is mandatory. <img> is an empty element meaning it should not have a closing tag.

Beispiel:

<img src="image.png" />


alt Attribute
An <img> element can have alternative text via the alt attribute. The alternative text will be displayed if an image fails to render due to an incorrect URL, if the image format is not supported by the browser, if the image is blocked from being displayed, or if the image has not been received from the URL.
The text will be read aloud if screen reading software is used and helps support visually impaired users by providing a text descriptor for the image content on a webpage.

Beispiel:

<img src="path/to/image" alt="text describing image" />

Zusatzinfos:
Alt Attribute work like aria-label's but have additional functionalitys.

When using the alt attribute, you should adhere to these conventions:
    1. In general, the value of alt should conisely describe the image.
    2. For images that are also <a> elements, the alt attribute should describe the source that the link targets.
    3. If an image conveys no information (such as a decorative border), the alt attribute should be empty, but should never be omitted.
    4. If an image is described by text ner the image, do not duplicate the description in the alt attribute. Use an empty alt attribute instead.
    5. The value of an alt attribute should be no more than 150 characters.


<video> Video Element
The <video> element embeds a media player for video playback. The src attribute will contain the URL to the video. Adding the controls attribute will display video controls in the media player.
Note: The content inside the opening and closing tag is shown as a fallback in browsers that don’t support the element.

Beispiel:

<video src="test-viedo.mp4" controls>
 Video not supported
</video>


HTML Attributes
HTML attributes are values added to the opening tag of an element to configure the element or change the element’s default behavior. In the provided example, we are giving the <p> (paragraph) element a unique identifier using the id attribute and changing the color of the default text using the style attribute.


Beispiel:

<p id="my-paragraph" style="color: green;">Here's some text for a paragraph that is being altered by HTML attributes</p>

You can also add a Class element instead of an ID since it's better to use them for CSS

Beispiel:

<p class="my-paragraph" style="color: green;">Here's some text for a paragraph that is being altered by HTML attributes</p>


Unique ID Attributes
In HTML, specific and unique id attributes can be assigned to different elements in order to differentiate between them.
When needed, the id value can be called upon by CSS and JavaScript to manipulate, format, and perform specific instructions on that element and that element only. Valid id attributes should begin with a letter and should only contain letters (a-Z), digits (0-9), hyphens (-), underscores (_), and periods (.).

Beispiel:

<h1 id="A1">Hello World</h1>




Semantics

Semantisches HTML ist die Verwendung von HTML-Markup, um die Semantik oder Bedeutung der Informationen in Webseiten und Webanwendungen zu verstärken und nicht nur deren Präsentation oder Aussehen zu definieren.

Zu den Ursprünglichen Tags wie <div> und <span> zur strukturierung des HTML Dokuments bietet HTML5 auch neue Tags an, welche die sogenannte "Accessibility" erhöht. Dies erleichtert Personen mit einschränkungen (z.B. Benutzung von ScreenReadern) die benutzung der Webpage.



• <article>
• <aside>
• <details>
• <figcaption>
• <figure>
• <footer>
• <header>
• <main>
• <mark>
• <nav>
• <section>
• <summary>
• <time>

<section>

Eine "Section" ist eine thematische Groupierung von Inhalten und haben üblicherweise auch einen Titel (Heading)

<article>

Ein "Article" ist ein spezifischer und eigenständiger Inhalt. Ein Article sollte in sich selbst "Sinn" ergeben.

<section> und <article> heiben keine spezifische hierarchie. Eine Section kann Article enthalten genau so kann ein Article eine Section enthalten.

<header>

The <header> element represents a container for introductory content or a set of navigational links.
A <header> element typically contains:
    • one or more heading elements (<h1> - <h6>)
    • logo or icon
    • authorship information
Note: You can have several <header> elements in one HTML document. However, <header> cannot be placed within a <footer>, <address> or another <header> element.

Aus <https://www.w3schools.com/html/html5_semantic_elements.asp> 



Footer
The <footer> element defines a footer for a document or section.
A <footer> element typically contains:
    • authorship information
    • copyright information
    • contact information
    • sitemap
    • back to top links
    • related documents
You can have several <footer> elements in one document.

Aus <https://www.w3schools.com/html/html5_semantic_elements.asp> 


Navigation (nav)

The <nav> element defines a set of navigation links.
Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major blocks of navigation links.
Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.

Aus <https://www.w3schools.com/html/html5_semantic_elements.asp> 


Aside

The <aside> element defines some content aside from the content it is placed in (like a sidebar).
The <aside> content should be indirectly related to the surrounding content.

Aus <https://www.w3schools.com/html/html5_semantic_elements.asp> 



Figure and figcaption

The <figure> tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
The <figcaption> tag defines a caption for a <figure> element. The <figcaption> element can be placed as the first or as the last child of a <figure> element.
The <img> element defines the actual image/illustration. 

Aus <https://www.w3schools.com/html/html5_semantic_elements.asp> 


<code>

Defines a piece of computer code

Next

