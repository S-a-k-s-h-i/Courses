export default 
interface pointSchema{
     x:number,
     y:number
}

class Point{
   constructor(p:pointSchema){

   }

    draw(){
        //
    }
    getDistance(){
        //
    }
}

let p1 = {
    x:12,
    y:23
}
const point1 = new Point(p1)