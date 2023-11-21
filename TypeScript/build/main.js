//default import
import processFromTwo from './two.js';
console.log("in module main.ts");
function process() {
    console.log("in process of main module");
}
processFromTwo();
process();
//in main -> twoobj from './two.js'
//the call twoObj.process(); process(); //applications that we write should use the concept of modules.
