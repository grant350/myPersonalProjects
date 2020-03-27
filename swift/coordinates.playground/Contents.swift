//: A UIKit based Playground for presenting user interface
  
import UIKit
import PlaygroundSupport


/*
func fizzBuzz(Fizzbuzz: Int) -> String {
    // Enter your code between the two comment markers
    let Fizzbuzz = Fizzbuzz
    
    if (Int(Fizzbuzz) % 2 == 1){
    print("fizz")
    }
    
    if (Int(Fizzbuzz) % 2 == 1){
        print("buzz")

    }
    if (Int(Fizzbuzz) % 2 == 1){
        print("Fizzbuzz")

    }
    // End code
    return "\(Fizzbuzz)"
}


func temperatureInFahrenheit(temperature: Double) -> Double {
    return temperature
}


// local and external variables
func callingVar(externalVar localVar: Double) -> Double {
    // wont work because outside scope print(externalVar)
    print(localVar)

    return localVar
}
callingVar(externalVar: 44.4)

func area(externalWidth width:Double = 0.0, externalHeight height:Double = 0.0,externalLength length:Double = 0.0,externalColor color:String = "red") -> (Double,String) {
    var  price = 0.0;
    switch color{
    case "red": price=1.4
    case "yellow": price=5.4
    case "orange": price=2.4
    case "purple": price=7.3
    default: price=0
        
    }
    
    let result :Double = price*width*height*length
    return cost(result, color)
}

func cost(_ result :Double,_ color :String) ->(Double,String){
    print(result)
    print(color)
    return (result,color)
}
area(externalWidth:22,externalHeight:1,externalLength:33,externalColor:"red")

*/
/*
var array :[String] = ["eeee","iiii","oooo"]

func appender(){
    let letter = "abcdefghijklmnopqrstuvwxyz"

    let letterType = type(of: letter)
    print(letterType)
    var characters = letter.count(4)

    /*

    for _ in (0...4) {
        let random = Int.random(in: 1..<10)
        print(random)
        var characters = letter.index(letter.startIndex,offsetBy:random)
        let  str = String(repeating: "\(characters)", count: 5)

        let a = "aaa"+"\(str)"
        
        array.append(a)
        print (array)
    }
*/

}

appender()

*/

let coord1: (x: Int, y: Int, z: Int) = (0,0,0)

struct Points{
    // is a blue print
    let x: Int
    let y: Int
    let z: Int

    
}


// instance of the struct
let coord2 = Points(x: 1, y: 2, z: 3)
coord2.z

let x1 = 0
let y1 = 0

let coordinate1: (xx: Int, yy: Int) = (4,8)
coordinate1.xx
coordinate1.yy

struct Point {
    let x: Int
    let y: Int
    
    init(x: Int,y:Int){
          self.x = x
         self.y = y
    }
        
    
    /// Returns the surrounding points in range of
    /// the current one
    func points(inRange range: Int = 1) -> [Point] {
        var results = [Point]()
        
        let lowerBoundOfXRange = x - range
        let upperBoundOfXRange = x + range
        
        let lowerBoundOfYRange = y - range
        let upperBoundOfYRange = y + range
        
        for xCoordinate in lowerBoundOfXRange...upperBoundOfXRange {
            for yCoordinate in lowerBoundOfYRange...upperBoundOfYRange {
                let coordinatePoint = Point(x: xCoordinate, y: yCoordinate)
                results.append(coordinatePoint)
            }
        }
        
        return results
    }
}

let coordinatePoint = Point(x: 0, y: 0)

coordinatePoint.x
coordinatePoint.points()

















/*
 struct RGBColor {
 let red: Double
 let green: Double
 let blue: Double
 let alpha: Double
 
 let description: String
 
 // Add your code below
 init(red: Double, green: Double, blue: Double, alpha: Double) {
 
 self.red = red
 self.green = green
 self.blue = blue
 self.alpha = alpha
 self.description = ("red: \(red), green: \(green), blue: \(blue), alpha: \(alpha)")
 
 }
 
 }
 */




















































