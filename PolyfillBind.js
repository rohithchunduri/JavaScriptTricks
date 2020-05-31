// Creating a polyfill bind in js

ex: let name = {
       firstname : "Rohith",
       lastname  : "Chunduri"
    }
    
    
    var printName = function (...args){
        return this.firstname + " " + this.lastname + " " + args[0]
    }
    
    Function.prototype.myBind = function( ...args1){
        let obj = this;
        return function( ...args2){
            params = args1.splice(1);
            obj.apply(args1[0], [...params, ...args2]);
        }
    }
    
    
    
    
