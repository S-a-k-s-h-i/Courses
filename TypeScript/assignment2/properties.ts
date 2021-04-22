class Point{
    constructor(private _x:number, private _y:number){
    }
    draw(){
        console.log(`_x: ${this._x} and Y: ${this._y}`)
    }
    get x(){
        return this._x
    }
    set x(value){
        if(value< 0){
            throw new Error('value cannot be less than 0')
        }
        this._x=value
    }
}

let p1 = new Point(2,3)
let x = p1.x    //read(get)
p1.x = 10       //write (set)
p1.draw()