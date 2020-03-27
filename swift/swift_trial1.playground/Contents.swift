//: A UIKit based Playground for presenting user interface

import UIKit
import PlaygroundSupport;
var c:Float = 2.332;
var d:Double = 22.2;
var e:Bool = true;
print(Int(c))

// underscore when not going to use the value
for _ in 1...10 {
    print(c+1)
}


     public class but1 {
        var title = "first button"
        var width = "200"
        var height = "60"
        
    
    };

let but2 = but1()
but2.title = "sss"
but2.width = "100"
but2.height = "300"

print(but1().title as Any )

public func testfunc(){
    let applesauce = 2;
    let people = 22;
    let names = ["george","harry","bob"];
    print(applesauce + people);
    print(names);
    
}

func summy(_ aa:Int,_ ab:Int,_ ac:Int,_ ad:Int) -> Int {
    print(aa + ab + ac + ad)
    return aa + ab + ac + ad
    
}

let sum = summy(1,2,3,4)
print(sum)

//override

class car {
    var speed = 300
    func drive(){
        print("driving at \(speed)")
    }
    
}
class new_car : car {
    
    override func drive(){
        print("driving at \(speed * 2)")
        //super to refer to original parent class func add //functinality
        super.drive()
        
    }
    func fly(){
        print("flying")
    }
}

let ride = new_car()
ride.drive()
ride.fly()



// ui kit
class partner {
    var name = ""
    var age = 0
    // empty string can be full or empty with ?
    var empty:String?
    
    
    init(a:String, age:Int, empty:String){
        // string set up
        name = a
        self.age = age
        self.empty = empty
    }
    
    
    
}
var partner1 = partner(a: "christian", age: 21, empty: "he is pertner two")
var partner2 = partner(a: "grant", age: 19,empty:"")

// tuples and arrays
var car_topspeed = [String:Int]()
car_topspeed["ferrari"] = 230
car_topspeed["porche"] = 180
car_topspeed["pagani"] = 240

// also ... iterates
for (carname, speed) in car_topspeed {
    
    print(carname, speed)
}
print(car_topspeed)
