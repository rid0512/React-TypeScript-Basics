function sum(x,y:number):number{
    console.log("sum");
    return x+y;
}
console.log("sum:",sum(2,3));
 
var add = function(x:number,y:number){
    console.log("add");
    return x+y;
}
console.log("add:",add(3,3));
 
var sumarrow = (x:number,y:number)=>{
 
    console.log("sumarrow");
    return x+y;
}
console.log("sumarrow:",sumarrow(7,3));
 
var calc = (x:number,y:number)=> x*y;
console.log("calc:",calc(5,3));
 
var obj={
    id:100,
    print:()=>{
        var y=200;
        console.log("print");
        setTimeout(()=>{console.log("hello",this)},2000);
        setTimeout(function(){
        var x=10;
            console.log("hello",this.id,this)
        },2000)
    }
}
obj.print();