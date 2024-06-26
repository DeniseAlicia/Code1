# What this is about:
This is a personal learning diary for the module *Code 1* of the GMB course. Each day is going to be documented on here, including the actual tasks and how they were solved as well as interesting information I learned in that day and other noteworthy stuff like problems ore roadblocks encountered along the way.

---
## Day 1 - Getting Started
*17.06.2024*

The first task today was to simply set up our coding environment and any other necessary software packages for this course. This entailed:

- Git
- Visual Studio Code (plus extensions ESLint and Git Graph)
- node.js
- Typescript Compiler
  
At first I was worried that I might need to use one of the lab's computers, since I am not really familiar with using the linux environment on my chromebook. But as it turns out, it was not as complicated as I expected. 

Git actually came preinstalled with the linux environment, so that was already taken care of. 


Visual Studio Code was also fairly simple. I simply had to download the correct package for my hardware (linux, x64) and then install them via a single line in the linux terminal.

However, node.js and typescript proved more difficult then that. But after some googeling I found all the solutions I needed to install an up-to-date version of node on my chromebook, which then allowed me to install the typescript Compiler with a line in the terminal (aka the linux way)

Next, we had to familiarize ourselfs with GitHub. That included setting up an account as well as a personal *Code1*-Repository (which we are in right now). Additionally, each team had to set up a repository and link their personal repositories within. This taught us a bit about some GitHub basics, like markdown pages, collaborators and why simultaneously working on the same file is complicated (branching).

After that, we cloned our personal repositories into Visual Studio Code and were told to play around with branches, merges and push/pull mechanics. That got us warmed up to some more Git-mechanics. This included:

- What are merging conflicts and how can you deal with them?
- How to utilize a .gitignore file

During this 'testing out' phase, I stumbled upon [this online book](https://git-scm.com/book/en/v2), which helped me immensely with understanding how to do stuff and why I was doing it.

### What I learned today:

- "sudo" in the Linux Terminal means "SuperUser
- Basics of Markdown (kinda like LaTex, lets you format the text via commands/symbols directly instead of a program doing it for you)
- Creating and editing repositories and files in GitHub
- Cloning said repositories into Visual Studio Code
- Editing files and commiting changes to finalize them
- creating and merging branches with Visuall Studio Code
- Resolving merge conflicts (kinda, I just adjusted the file's content accordingly, hopefully that gets more in-depth later)

---
## Day 2 - HTML
*18.06.2024*

Today started with more Git! To be precise, we finished some of yersterdays exercises, which meant for me to try out the .gitignore file, where you can point git to files/filetypes it will ignore going forward. 

Then moved on to HTML (of course Git is going to stay with us on this journey). After a quick history lesson about HTML and the Internet in general, we learned about the structure of HTML and how tags uphold that structure. Example:

```html
<html>
  <head>
    *stuff*
  </head>
  <body>
    <tag1 attributeA = "valueA" attributeB = "valueB" >
    <tag2 attributeC = "valueC" attributeD = "valueD" >
  </body>
  <html>
```  

This also allows for a hierarchy of different objects (Document Object Model)

After that, it was playground-time. Meaning that we got to try out the knowledge for ourselves by creating our own pages and manipulating existing ones. The results of that can be found on [my GitHub page](index.html).

Speaking of, that was the next thing we did. We activated the page feature in GitHUb and, with some very simple .html-files, created our first web page (as seen above)



### What I learned today:

- utilizing a .gitignore file to let git ignore certain files
- HTML means (HyperText Markup Language) and comes from the first version of the internet
- HTML is a MarkUp-Languuage, meaning that it defines elements through tags
- Through the Web-Developement-Tool in your browser, you can manipulate a websites appearance and contents (temporarily of course)
- A Browser can directly interpret/display a .txt file
- HTML utilizes tags to organize elements in the code (objects with attributes)
- different tags serve different purposes and change how the computer interacts with the object
- the head and body tags are always a thing
- html basics (how to use tags)
- creating webpages as html documents
- hyperlinking html files together

---
## Day 3 - CSS
*19.06.2024*

Today started with every group making a little branching story using hyperlinks and .html-files. It was fun exercise that cemented some of the lessons from yesterday.

After a little playtest of all the games, we started with CSS. If HTML is all about the content, semantics and format of a webpage, CSS is about style & presentation. While a browser automatically generates a (very simple) stylesheet for your .html-file, linking your own css-stylesheet to that file not only looks better (at least more interesting), but allows for a lot more control over the design of the page.

Some examples of what css can do:



A demonstration of how that works can be found in this [Demo](Projects/MicroProjects/CSSPlayground/CSSTesting.html)

Some css-selectors (They can be combined at will):

A {}             - selects all elements with the A-tag <br>
.A{}             - selects all element of class A <br>
#A{}             - selects all elements with id A <br>
A:B{}            - selects all B elements that are children of A elements <br>
[A = "value"]    - selects all elements with attribute A (value can be left blank)
[A$ = "ue"]      - selects all elements whose value ends with "ue"
[A^ = "va"]      - selects all elements whose value begins with "va"


### What I learned today
- what css is/does in browsers
- css works bei dividing all the page elements into boxes
- css not only does colours, but also font, lines, spaces between elements, etc..
- css is cascading, meaning properties are inherited by children unless they are seperatly defined
- css has many different seperators to define which elements to style (for a playful demonstration, [try this](https://flukeout.github.io/))
- with flex containers, css can align items within proportional to the container and its alignments

---
## Day 4 - Typescript
*25.06.2024*

Typescript is essentially a better version of Javascript, that compiles into Javascript. It allows for more strict type management, for example. This means that you have to be more specific with defining your variables, but also reduces the chance of errors due to conflicting types.

You can link scripts to your html-pages to change properties like texts and colors, as well as handle interactions with the page, like clicking on something. Those are called **events**.

For events to be called, an element needs an **EventListener**. Those check for events they are assigned to and can call the appropiate function for the event:

element.addEventListener("eventtype", eventFunction)


Some examples for event types are:

*PointerEvent* - 
*KeyboardEvent*
*DragEvent*
*ClipboardEvent*




Events are divided into 3 different **phases**. Each phase describes a different stage of the process of calling an event:

- capture phase: the event travels down the DOM-Tree until it reaches an appropiate event listener
- target phase: the event reaches its target
- bubbling phase: the event travels back up the DOM-tree



## **Vocabulary**

*repository*: a storage environment for programmers to store code and other useful stuff. It makes managing projects easier

*branch*: a version of the code existing simultaneously with other versions of the code. Can be created and merged with other branches 

*merge (from)*: combining two branches into one. You always merge **from** the branch you want to disappear **into** the one you want to keep

*HTML*: Hypertext Mark-up Language

*Syntax*: the structure and rules of a language (=Grammar)

*Semantic*: The interpretation/meaning of words and sentences in a language (=Vocabulary)

*CSS*: Cascading Style Sheet

*Selector (css)*: Defines which elements from the html-file to choose for styling

*DOM*: Document Object Model - Hierachy of Elements


