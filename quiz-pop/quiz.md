1. Why do we need to `import React from "react"` in our files?
    - to be able to use react and global variables... 
    --- JSX syntax is defined through react. JSX demands react. React is what defines JSX. 


2. If I were to console.log(page) in index.js, what would show up?
    - page would show up
    --- JSX syntax would show up and print b


3. What's wrong with this code: 
    
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
- theres no ReactDOM... render
--- we need our JSX to be nested under a single parent element 

4. What does it mean for something to be "declarative" instead of "imperative"?
 ---3   Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.


5. What does it mean for something to be "composable"?
    - you could put one big piece and make it into a little piece, 
    --- e have small pieces that we can put together to make something
larger/greater than the individual pieces.