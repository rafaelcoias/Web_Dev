# Basics Of Web Development
## Summary
  - <a href="https://github.com/rafaelcoias/Web_Development#introduction">Introduction</a>
  - <a href="https://github.com/rafaelcoias/Web_Development#html">HTML</a>
  - <a href="https://github.com/rafaelcoias/Web_Development#css">CSS</a>
  - <a href="https://github.com/rafaelcoias/Web_Development#java-script">Java Script</a>
## Introduction

  This is a simple GUIDE about the basics of web development. <br>
  
  When I started using html and css I wish I had a guide that really explains and resumes everthing important to know before starting to work with **HTML**, **CSS** and **JS**. <br>
  
  Thats why I wrote this simple script. For those who want to start working in web development and don't know where to start.<br>
  Hope you like it and learn something here!

## HTML

  ### Introduction <br>
  
  HTML is a simple and easy programming language. It is basically used to write and to structure a web page and its content.
  
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
    
    
## CSS
    
    coming soon...
    
## Java Script
    
    ### Introduction <br>
    
    Java Script is a mix between Java and C. <br>
    
    In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.
    
    ### Basic things to know about JavaScript
    
      - Almost everthing can have properties.
      - Functions are objects.
      - for...in loops iterate over property names, not values.
      - Variable scoping.
      - JavaScript is not just for browsers.
    
    ### Variables
    
    In contrast with other languages, there are two main types of JavaScript variables : **let** and **var**.
    
    <details><summary>Here is how variables in JavaScript work.</summary>
  
  ![image](https://user-images.githubusercontent.com/91686183/154819344-758f7d20-9659-40f4-b7cc-bb15279a8680.png)
  </details>
    
<hr>
    
   I hope you found this script interesting and that you learned something about web development here. 
    
   Good luck for you who are about to enter in the web world!
