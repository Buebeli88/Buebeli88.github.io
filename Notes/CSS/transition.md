
After a website is displayed, the visual appearances of various elements can change for many reasons. For example:
    • Moving your mouse over a link may change the color or appearance of that link.
    • Changing the size of the window may change the layout.
    • Scrolling causes some elements to disappear and others to appear.
With CSS transitions, we can control how these changes happen.
These changes are a type of state change. CSS transitions allow us to control the timing of visual state changes. We can control the following four aspects of an element’s transition:
    • Which CSS properties transition
    • How long a transition lasts
    • How much time there is before a transition begins
    • How a transition accelerates
We’ll explore how different answers to each of these questions changes the 
animation
Preview: Docs Loading link description
. If any of these sound confusing, don’t worry! We will look at examples of each and learn how to use them together for a visually pleasing experience.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/css-transitions> 


Duration

To create a simple transition in CSS, we must specify two of the four aspects:
    1. The property that we want to transition.
    2. The duration of the transition.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/duration> 


In the example above, 
transition-property
Preview: Docs Loading link description
 declares which CSS property we will be transitioning, the text color. The second property, 
transition-duration
Preview: Docs Specifies how long an elements transition should take to complete.
, declares how long the transition will take — one second.
Many properties’ state changes can be transitioned. The type of transition depends on the property you choose. For a complete list of all animated properties, see this resource.
Different properties transition in different ways, for example:
    • Color values, like 
color
Preview: Docs To set color property values for an element.
 and 
background-color
Preview: Docs Loading link description
, will blend to a new color.
    • Length values like 
font-size
Preview: Docs Sets the text size. Font size values can be in different units like absolute lengths and relative lengths.
, 
width
Preview: Docs Loading link description
, and 
height
Preview: Docs Loading link description
 will grow or shrink.
Duration is specified in seconds or milliseconds, such as 3s, 0.75s, 500ms. The default value is 0s, or instantaneous, as if there is no transition.
When choosing a duration, think about how long actions take in real life. For example, a human eye blink takes around 400ms. People might expect the 
animation
Preview: Docs Loading link description
 of clicking a button to be as sudden as a blink.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/duration> 



Timing function

The next transition property is 
transition-timing-function
Preview: Docs Specifies the speed of a transition effect over the course of its duration.
. The timing function describes the pace of the transition.
The default value is ease, which starts the transition slowly, speeds up in the middle, and slows down again at the end.
Other valid values include:
    • ease-in — starts slow, accelerates quickly, stops abruptly
    • ease-out — begins abruptly, slows down, and ends slowly
    • ease-in-out — starts slow, gets fast in the middle, and ends slowly
    • linear — constant speed throughout

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/timing-function> 

transition-timing-function - CSS | MDN

Delay

Our last transition property is 
transition-delay
Preview: Docs Loading link description
. Much like duration, its value is an amount of time. Delay specifies the time to wait before starting the transition. As with the duration property, the default value for transition-delay is 0s, which means no delay.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/delay> 



Shorthand: transition

Because these four properties are so frequently declared together, CSS provides a property that can be used to declare them all in one line: transition. This shorthand property describes each aspect of the transition puzzle in a single declaration. Typically, the properties are specified in this order: 
transition-property
Preview: Docs Loading link description
, 
transition-duration
Preview: Docs Loading link description
, 
transition-timing-function
Preview: Docs Specifies the speed of a transition effect over the course of its duration.
, 
transition-delay
Preview: Docs Loading link description
. Note that the order of the time values (duration and delay) is strict, and the transition-duration must come before transition-delay. While some flexibility may exist in the order of other properties, following this conventional order ensures better readability and consistency.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/shorthand> 

Beispiel:

Transition: color 1.5s linear 0.5s


Combinations


The shorthand transition rule has one advantage over the set of separate transition-<property> rules: you can describe unique transitions for multiple properties, and combine them.
To combine transitions, add a comma (,) before the semicolon (;) in your rule. After the comma, use the same shorthand syntax. For example:

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/combinations> 


Bsp:

.button span,
.button div,
.button i {
  transition: width 750ms ease-iin 200ms,
        Left 500ms ease-out 450ms,
        Font-size 950ms linear;
}


ALL

Even with the shorthand, specifying transitions for many properties can be tedious. It is common to use the same duration, timing function, and delay for multiple properties. When this is the case you can set the 
transition-property
Preview: Docs Specifies the property or properties of an element that a transition effect should apply to.
 value to all. This will apply the same values to all properties. To effect this, you can use all as a value for transition-property.
all means every value that changes will be transitioned in the same way. You can use all with the separate transition properties, or the shorthand syntax. This allows you to describe the transition of many properties with a single line:

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/all> 


Bsp:
Transition: all 1.5s linear 0.5s;

Review (zusammenfassung)

CSS Transitions are a powerful tool for providing visual feedback to users. We’ve learned a lot about transitions, so let’s review:
CSS Transitions have 4 components:
    • A property that will transition.
    • The duration which describes how long the transition takes.
    • The delay to pause before the transition will take place.
    • The timing function that describes the transition’s acceleration.

Aus <https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/advanced-css-flexbox-and-animations/modules/css-transitions/lessons/css-transitions/exercises/review> 


