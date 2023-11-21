//named import
import { addOne } from './one.js'; //relative path
console.log("in module two.ts");
function process() {
    console.log("in process of module two");
    addOne(2, 3);
}
export default process; //default export (we an do default/named export) multiple things to export - named export, only one function or class to export then use default export
//multiple export thorugh defaukt -> export default{process, dowork}
