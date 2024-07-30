// export import
//npm init es6 to upload your package.json files msking it easier to link the file
// export thr greet function from greet.js
// import the function in index.js


import { greet } from "./greet.js";

console.log(greet('Ntombi'));

import { yo } from "./greet.js";

console.log(yo('Ntombi'));




import chalk from 'chalk';
const styledMessage = chalk.bgBlue.black(greet('Xola'));
console.log(styledMessage)

import cowsay from "cowsay"
console.log (chalk.bgBlue(cowsay.say({
    text: greet ('Ntombi')
    
})));


//Import chalk from chalk
//import the greet module that is in the current folder
//import greet from ".greet.js"
//const styledMessage = chalk.bgGreen.black(greet('Xola'));
//console.log(styledMessage)/
import figlet from "figlet";
figlet("Hello Stumza!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
