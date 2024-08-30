# Rich Text Editor

Basic text area undergoing metamorphosis into a rich text editor with features like bolden text, italiize text, underline text, add link, add image and many more with single clicks.

### Issues faced:

- **document.execCommand deprecated**:
  - great videos like https://youtu.be/CuPqfcTnIwg?si=6LgmK3zj0z4qb-vo existed but mostly used [document.execCommand()](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) which is deprecated
  - this stackoverflow reply for [execCommand() is now obsolete, what's the alternative?](https://stackoverflow.com/a/62266439) was a life saver
  - then I discovered this blog [execCommand() Alternative](https://dev.to/_moehab/documentexeccommand-alternative-5a55) which really helped
  - for further reading [document.createRange().surroundContents() example](https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents#examples)
- **clicking on toolbar buttons deselects text from textarea**:
  - [Keep the selection in a textarea](https://stackoverflow.com/a/76924634) came into rescue although had to modify the code to suit needs of this project

### LOGS:

1. wanted to use document.execCommand() but its deprecated
2. research helped me get an alternative
3. scratched the whole idea of directly building html from the text inside textarea and tried implementing a textParser that would create an intermediate parsedText that later can be used to create html or any markup for that matter like there is in this site at the bottom https://materialpro-react-main.netlify.app/form-editor
4. it's proving to be difficult to visualize how I am going to handle this parsing.
   - should i control all clicks and keypresses of user then respond to those?
   - or is there any other way? I guess am not at the appropiate skill level to solve this problem.
5. for now its better to stick to execCommand alternative found earlier and this intermediate parsing can be done later when I feel confindent(if that time ever comes :/)

### resources used:

- https://reactsvgicons.com/ for icon svgs
