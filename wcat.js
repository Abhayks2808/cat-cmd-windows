#!/usr/bin/env node


// To include the file system module we use  require('fs);

let fs= require('fs');

/* parsing the command line arguments since the first two 
elements are -node and
path so thats why we used slice */

let cmds=process.argv.slice(2);
let options=[];
let files=[];
for(let x in cmds){
    // filtered the options like -n , -s &-b from cmd array
    if(cmds[x].startsWith("-") && cmds[x].length==2){
        options.push(cmds[x]);
    }else{
    // filtered all the files in files array if it exists otherwise print file doesnot exist
            if(!fs.existsSync(cmds[x])){
                console.log(cmds[x]+" does not exist");
                return;
            }
            else{
                files.push(cmds[x]);
            }
    }
}
let str="";
if(files.length <=0){
    console.log("No file entered");
    return;
}
for(let x in files){
    str+=fs.readFileSync(files[x]).toString();
}
str=str.split("\n");
//check -s is given by user or not if it yes then  call removelargespaces
if(options.includes("-s")){
    str=removeLargeSpaces(str);
    
}
 // check both options -n & -b are given by user or not
if(options.includes("-n") && options.includes("-b")){
  // if yes check the indexing
  if(options.indexOf("-n") > options.indexOf("-b")){
      //execute -b
      str=addNonEmptyNum(str)
  }
  else{
      // execute -n
      str=addNum(str);
  }
}
else{
    // check if -b is given by user
    if(options.includes("-b")){
        // execute -b
        str=addNonEmptyNum(str);
        
    }
    else if(options.includes("-n")){
       // execute -n
       str=addNum(str);
    }
}
str=str.join("\n")
console.log(str);
//remove all extra empty lines 
function removeLargeSpaces(arr){
    let newarr=[];
    let flag=false;
    for(let x in arr){
        // if non empty string push into the new array & assign flag=false
        if(arr[x]!=="" && arr[x]!=="\r"){
            newarr.push(arr[x]);
            flag=false;
        }
        else{
            /* if empty string then check flag if flag is false then push into new arr and turn flag true and 
            if flag is true nothing to push */
           if(flag===false){
               newarr.push(arr[x]);
               flag=true;
           }
        }
    }
    return newarr;
}

//-n
function addNum(arr){
// will add Num to all elements of arr
let newArr=[];
for(x in arr){
    newArr[x]=(Number(x)+1)+" "+arr[x];
}
return newArr;
}

//-b
function addNonEmptyNum(arr){
    let linenumber=1;
    let newArr=[]
// will add Num to only non empty lines of array
for(x in arr){
    if(arr[x]==="\r" || arr[x]==""){
        newArr[x]=arr[x];
    }
    else{
        newArr[x]=linenumber+" "+arr[x];
        linenumber++;
    }
}

return newArr;
}
