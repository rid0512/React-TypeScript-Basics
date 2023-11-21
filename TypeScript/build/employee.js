class Employee {
    //implementation
    constructor(id, name, location) {
        this.id = id;
        this._location = location;
        this.name = name;
    }
    //create instance of constructor that will call this construtcor
    //a class can have multiple constructors but here multiple constructor implementations are not allowed, why?
    //Reason: This is how JS behaves. Javascript supports method overloading. Two methods with same name is not allowed. Overriding happens. 
    //Instead it supports multiple constructor declarations
    // constructor(id:number, name:string, location:string){}
    get location() {
        return this._location;
    }
    set location(location) {
        this._location = location;
    }
}
var emp = new Employee();
console.log("emp", emp);
var emp1 = new Employee(1, "Anil");
console.log("emp1", emp1);
var emp2 = new Employee(2, "Vijay", "Mumbai");
console.log("emp2", emp2);
emp.location = "Mumbai";
console.log("emp.location", emp.location);
// class Employee{
//     id:number;
//     name:string;
//     private _location:string;
//     // constructor(){
//     //     console.log("Hello constructor");
//     // }
//     constructor();
//     constructor(id:number,name:string,);
//     constructor(id:number,name:string,location:string);
//     constructor(id?:number,name?:string,location?:string){
//         this.id = id;
//         this.name = name;
//         this.location=location;
//     }
//     public get location(){
//         return this._location;
//     }
//     public set location(location){
//         this._location = location;
//     }
// }
// var emp = new Employee();
// console.log("emp",emp);
// var emp1 = new Employee(10,"Rithu");
// var emp2 = new Employee(10,"Sibi","Cbe");
// var emp3 = new Employee(10,"Rithu",);
// console.log("emp",emp1);
// console.log("emp",emp2);
// console.log("emp",emp3);
// emp.location = "Chennai";
// console.log("emp_loc",emp.location);
