# cat-command-in-windows 
This is mini nodejs project for building concept of javascript.The project is  making a cat command that we can use in windows
,we know that cat command is one of most often used command that e use in linux we can also in mac powershellasell but windows cmd 
has not any type of cmd like cat command so we thought that lets built cat command cat command has many uses link to read all the uses of cat command is give below

## Read the documentation of cat command
[cat-cmd-documentation](https://www.tecmint.com/13-basic-cat-command-examples-in-linux/#:~:text=The%20cat%20(short%20for%20%E2%80%9Cconcatenate,output%20in%20terminal%20or%20files.)

Although there are 12 uses of cat cmd but in this project we have only implemented few uses that are:
1. display content of singlefile in terminal.
2. view contents of  multiple files in terminal.
3. Display Line Numbers of Empty and NonEmpty Lines.(-n)
4. Display Line of only NonEmpty Lines.(-b)
5. Remove continuous Empty Lines to one.(-s)

We have make the project global so  that we can use from any path of our desktop

## There are steps to make it global that are
1. create a package.json file
 `npm init -y`
2. create a bin object inside  bin create a key that you use to run your cat cmd in your os and assign the file in which your project is there like script.js  to that key.
3. copy the code given below at the top of your project
  `#!/usr/bin/env node`
4. go to terminal and run npm link
 `npm link`
