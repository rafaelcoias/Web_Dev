# Basics Of Web Development
## Summary
  - <a href="https://github.com/rafaelcoias/Web_Development#introduction">Introduction</a>
  - <a href="https://github.com/rafaelcoias/Web_Development#html">HTML</a>
  - <a href="https://github.com/rafaelcoias/Web_Development#css">CSS</a>
  - <a href="https://github.com/rafaelcoias/Web_Development#java-script">Java Script</a>
## Introduction

  This is a simple script about the basics of web development. <br>
  
  When I started using html and css I wish I had a guide that really explains and resumes everthing important to know before starting to work with **HTML**, **CSS** and **JS**. <br>
  
  Thats why I wrote this simple script. For those who want to work with web development and don't know where to start.<br>
  Hope you like it and learn something here!

## HTML

  ### Introduction <br>
  
  HTML (HyperText Markup Language) is a simple and easy programming language. It is basically used to write and to structure a web page and its content.
  
  In HTML there are a lot of *tags*. Here I'm just going to talk about the most used and helpful. 
  
  What is a *tag* ? <br>
  
  It is formed by an opening angle '**<**', the element of the tag (for example) '**head**' and the closing angle '**>**'. This is the '**<head&gt;**' tag. <br>
  *Tags* come normally in pars. The opening *tag* '**<head&gt;**' and the closing *tag* '**</head&gt;**'. The closing *tag* is for marking where the *tag* and its text ends. <br>
  Between *tags* we write text that is going to appear in our document. <br>
  However, there are *tags* that don't requier a par. We call them 'single tags' or 'empty elements'. <br>
 
  ### HTML Structure
  
  If you want to start writing a html document, I recommend you VSCode. Is a very good programming APP that you can download <a href="https://code.visualstudio.com/download">here</a>. <br>
  
  When you create your *file*.html just write '!' and click **tab**. This is a shortcut and is going to do the basic structure of your document.
  <details><summary>See how it is supposed to look.</summary>
  
  ![image](https://user-images.githubusercontent.com/91686183/154813050-937286e7-495f-4717-8638-7de61efa4405.png)
  
  </details>
  
  You don't need to edit the *head* of your document, but is good habit to write this two lines that are going to link your HTML document with your CSS and Java Script files. <br>
  
  **<head&gt;** <br>
      ... (previous code) <br>
      <link rel="stylesheet" type="text/css" href="<i>your css file path</i>.css"&gt; <br>
      <script src="<i>your java script file path</i>.js" defer&gt;</script&gt; <br>
  **</head&gt;**
  
  In the *head* you can also add a Title to your web page using <title&gt; *Example of title* </title&gt;.
  
  After that you only use the **<body&gt;** to write and organize your document.
  
  ### Empty Elements
  
  Here are some of the most used empty elements. As I said in the <a href="https://github.com/rafaelcoias/basics_of_web_dev/edit/main/README.md#introduction">introduction</a>, empty elements (or single tags) are tags that have not a *closing tag* (</element&gt;).
  
  - **<img&gt;** is used to create/put an image. It needs the image *path* and the width that you want this image have in the document. Here is an example of how its used. <br> <b><img src="<i>https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png</i>" width="50"&gt;</b>
  
  - <b><input&gt;</b> is used to create something (for example a button). It needs the <i>type</i> of what we are creating and its width. Here is an example of how its used. <br>
  
  <b><input type="button" width="50"&gt;</b>
    
  - <b><br&gt;</b> is used to do a break line in your text. <br>
  
  <b>Your text is on this line and <br&gt; <br>
    now is on other line.</b>

  - <b><hr&gt;</b> is used to create an horizontal line in your document. Normally used to separate topics and important things. <br>

   ### Most Common Elements
 
   Here are some of the most used elements in html.
    
   Define a **section** of elements.
  - **<nav&gt;** ... </nav&gt;
  - **<div&gt;** ... </div&gt;
  - **<section&gt;** ... </section&gt;
  - **<header&gt;** ... </header&gt;
  - **<main&gt;** ... </main&gt;
    
   Define title and **heading**.
    
  - **<h1&gt;** ... </h1&gt;
  - **<h2&gt;** ... </h2&gt;
  - **<h3&gt;** ... </h3&gt;
  - **<h4&gt;** ... </h4&gt;
  - **<h5&gt;** ... </h5&gt;
   
  <details><summary>See how it works.</summary>
  
  ![image](https://user-images.githubusercontent.com/91686183/154815153-c7028648-5ee0-479b-ac22-a6c989d6c438.png)
  </details>

   Define a **section** of text.
    
  - **<p&gt;** ... </p&gt; : Section of text that ends with an break line. 
  - **<span&gt;** ... </span&gt; : Section of text.
  - **<textarea&gt;** ... </textarea&gt; : Section of text.
  - **<a&gt; href="*link path*"** ... </a&gt; : Section of text that has a link. If you click on the text it sends you to that *href* link.
  - **<lable&gt;** ... </lable&gt; : Creates a lable with text (like a box with text inside it).

   Define a **list** of text.
    
  - **<ul&gt;** ... </ul&gt; : Defines a topic list. Inside this tag there is each point of the list.
  - **<ol&gt;** ... </ol&gt; : Defines a numeric list. Inside this tag there is each number of the list.
  - **<il&gt;** ... </il&gt; : Defines each point/number of a created list.
  - **<lable&gt;** ... </lable&gt; : Creates a lable with text (like a box with text inside it).
    
  <details><summary>See how it works.</summary>
  
  ![image](https://user-images.githubusercontent.com/91686183/154819050-3e58b1d2-4a74-4e70-9f4e-3c1b3d6f04e9.png)
  </details>
    
   Style your text.
    
  - **<b&gt;** ... </b&gt; : **Text in Bolt.**
  - **<i&gt;** ... </i&gt; : *Text in Italic.*
  - **<u&gt;** ... </u&gt; : <ins>Underlined text.</ins>
   
   Learn more <a href="https://www.w3schools.com/TAgs/default.asp">here</a>.
    
## CSS
    
  ### Introduction <br>
  
  CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML or XML. <br>
  It describes how elements should be rendered on screen, on paper, in speech, or on other media.
  
  There are **#ID's**, **.Classes** and the normal **Selectors**. An ID has more power than a Class, and a class has more power than a Selector. But more on that later.
    
  - The *#id* selector styles the element with the specified id.
  - A *.class* styles the elements with that class attribute so that unique CSS declarations can be applied to those specific elements without affecting other elements on the page.
  - A *selector* is used to style certain elements. A selector has the same name of the element that we want to change, but will affect every element with the same name on the page.
 
  ### CSS Structure
    
   We can start our CSS stylesheet as we want. There are no rules about how to start or write a CSS file.
    
   Normally people start by writting a default class, a class that changes everthing. This is helpful if we want to set a certain *color*, *font* or *text-align* as default in our document. <br> Here is how it's done :
    
   **&#42;** { <br> 
   color: green; <br>
   text-align: center; <br>
   } <br>
    
   <details><summary>Then you can change and style whatever you want.</summary> <br>
     
  - If you want to change an element (in this example I'll use the **body** element).
    
   **body** { <br> 
   back-ground-color: blue;<br>
   } <br>
    
  - If you want to change a paragraph (**<p&gt;**) but you dont want to change every single <p&gt; element, you can use a class. 
    
   A class is used to specify which elements you want to change. For example if you have this in your html document : 
    
     <p class="changeText"> ... </p> <br>
     ... 
     <div class="changeText"> ... </div> <br>
    
   You can change both *p* and *div* with the same class :
    
   **.changeText** { <br> 
   color: red; <br>
   font: Arial; <br>
   } <br>
    
   Or you can just change the element **p** that has the class "changeText". In case you don't want the element **div** to change. See how it is done :
    
   **p.changeText** { <br> 
   color: red; <br>
   font: Arial; <br>
   } <br>
   
  - **ID's** are not so common. It is used like a class, but just for one (and only one) element.
     
   If there is something like this in a html document :
     
      <h1 id="mainHeading"> Title of Document </h1>
        
   Then, to use this *id* in CSS we can do this :
     
   **#mainHeading** { <br> 
   color: rgb(95, 158, 160); <br>
   text-align: center; <br>
   } <br>
     
   </details>
   
   ### Colors
    
   It is hard to get used to colors in CSS. They can be chosen in 3 ways.
   
  - Just write it
    
   In CSS you can just write the color that you want and it will automatically use that color. 
    
   If you write *red* CSS will convert it to rgb(255, 0, 0).
  
  - RGB
    
   RGB means red, green, blue. A RGB file consists in composite layers of Red, Gree and Blue, each being coded on 256 levels from 0 to 255.
    
   *Black* corresponds to the levels R=0, G=0, B=0. <br>
   *White* corresponds to the levels R=255, G=255, B=255.
    
   So if you use RGB you can create every possible color. It is also possible to write it in Hexadecimal. 
    
   <details><summary>For example <b>rgb(0, 90, 119)</b> = <b>#005A77</b> :</summary>
   
   ![image](https://user-images.githubusercontent.com/91686183/154864247-a0adb70e-73fd-4869-9238-525697209cd4.png)
    </details>
    
   You can also add transparency to the color using **RGBA**. Transparency is in percentage (%).

   <details><summary>For example <b>rgb(0, 90, 119, 50%)</b> = <b>#005A7780</b> :</summary>
   
   ![image](https://user-images.githubusercontent.com/91686183/154864429-5df43449-027e-4ffd-ba4a-eda0a8a970a3.png)
   </details>
    
  - HSL
    
   HSL is less used but is basically *color*, *saturation (%)* and *shade (%)*. You can use it like rgb.
    
   <details><summary>For example <b>hsl(50, 50%, 50%)</b> = <b>#BFAA40</b> :</summary>
     
   ![image](https://user-images.githubusercontent.com/91686183/154864636-de8e47b1-7016-48dd-b9de-af021dc5696c.png)

   </details>
    
   You can also add transparency to the color using **HSLA**. Transparency is in percentage (%).

   <details><summary>For example <b>hsl(50, 50%, 50%, 50%)</b> = <b>#BFAA4080</b> :</summary>
   
   ![image](https://user-images.githubusercontent.com/91686183/154864690-99528452-42ca-47ca-b1ab-e9c05bac44a6.png)
   </details>
   
   ### Other Features
    
   In CSS there are a lot of features that you can use to transform, move and time your design. I am not going to specify each feature but your can easily find what they do on the internet.
    
   <details><summary>The <b>:</b> defines that something happends after a specific user action.</summary>
    
   <b>class/element : action</b> { <br> 
   back-ground-color: blue;<br>
   } <br>
    
   For example :
   
   Hover ) Does CSS code only when the user moves the mouse over the class/element.
    
   <b>class/element : *hover* </b> { <br> 
   back-ground-color: blue;<br>
   } <br>
    
   Focus ) Does CSS code only when the user clicks on the class/element.
    
   <b>class/element : *focus* </b> { <br> 
   back-ground-color: blue;<br>
   } <br>
    
   Checked ) Does CSS code only when the class/element is checked.
    
   <b>class/element : *checked* </b> { <br> 
   back-ground-color: blue;<br>
   } <br>
    
   first-child ) Does CSS code only on the first class/element child of this class/element.
    
   <b>class/element : *first-child* </b> { <br> 
   back-ground-color: blue;<br>
   } <br>
     
   </details>
    
   <details><summary>The <b>::</b> defines that something happends before or after a class/element.</summary>
    
   <b>class/element :: when</b> { <br> 
   back-ground-color: blue;<br>
   } <br>
    
   For example :
   
   Before ) Does CSS code before a class/element.
    
   <b>class/element : *before* </b> { <br> 
   back-ground-color: blue;<br>
   } <br>
    
   After ) Does CSS code before a class/element.
    
   <b>class/element : *after* </b> { <br> 
   back-ground-color: blue;<br>
   } <br>
     
   </details>
    
## Java Script
    
   ### Introduction <br>
    
   Java Script is a programming language. It is a mix of Java and C. <br>
    
   In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.
    
   ### Basic things to know about JavaScript
    
  - Almost everthing can have properties.
  - Functions are objects.
  - for...in loops iterate over property names, not values.
  - Variable scoping.
  - JavaScript is not just for browsers.
    
   ### Variables
    
   In contrast with other languages, there are two main types of JavaScript variables : **let** and **var**.
    
   Differences between *let* and *var*. <br>
    
   Let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used.
    
   Var declares a variable globally, or locally to an entire function regardless of block scope.
    
  <details><summary>Here is how variables in JavaScript work.</summary>
  
  ![image](https://user-images.githubusercontent.com/91686183/154819344-758f7d20-9659-40f4-b7cc-bb15279a8680.png)
  </details>
    
   Learn more <a href="https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/">here</a>.
    
<hr>
    
   I hope you found this script interesting and that you learned something about web development here. 
    
   Good luck for those who are about to enter in the web world!
