CSS Rule set and declarations
A CSS rule set contains one or more selectors and one or more declarations.
In CSS, a declaration is the key-value pair of a CSS property and its value. CSS declarations are used to set style properties and construct rules to apply to individual or groups of elements. The property name and value are separated by a colon, and the entire declaration must be terminated by a semi-colon.

There are a few diverent selectors:
    - Element: "h1" or "p" or "body"
    - Class: ".navigation" or ".image wolf"
    - ID: "#navigation" or "#image wolf"

Rule set format
selector {
property-name: value;
}

CSS declaration format 
property-name: value;

Property-name: (key:) and value (value)

Beispiel:

h1 is the selector

h1 {
text-align: center;
color: purple;
width: 100px;
}


CSS Comments
We can also add comments. Those will have no impact on the code and are only visible in the sheet. Usualy used to document your code or section it. They can also be used to "explain" the idea of your code but this should be avoided.

Beispiel:

/* Dieser Teil wird für die Navigation verwendet */


!important Rule
The CSS !important rule is used on declarations to override any other declarations for a property and ignore selector specificity. !important rules will ensure that a specific declaration always applies to the matched elements. However, generally it is good to avoid using !important as bad practice.


Resource URLs
In CSS, the url() function is used to wrap resource URLs. These can be applied to several properties such as the background-image.

Beispiel

background-image: url("../resources/image.png") 





