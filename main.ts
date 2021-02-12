enum FlyOptions {
    Left,
    Right,
    Forward,
    Back,
    Up,
    Down,
}

enum FlipOptions {
    Left,
    Right,
    Forward,
    Back
}

enum TurnOptions {
    Counterclockwise,
    Clockwise
}

//% color="#000099" weight=10 icon="\uf17b" block="Tello"
namespace Tello {

    //% block color="#006600"
    export function takeoff() {
        serial.writeLine("takeoff")
    }

    //% block color="#006600"
    export function land() {
        serial.writeLine("land")
    }
	
	//% block color="#006600"
    export function emergency() {
        serial.writeLine("emergency")
    }

    //% block="Fly $choice for distance = $x cm" color="#000099"
    //% x.min=20 x.max=500 x.defl=50
    export function fly(choice: FlyOptions, x: number) {
        if (choice == 0)
            serial.writeLine("left:" + x)
        else if (choice == 1)
            serial.writeLine("right:" + x)
        else if (choice == 2)
            serial.writeLine("forward:" + x)
        else if (choice == 3)
            serial.writeLine("back:" + x)
        else if (choice == 4)
            serial.writeLine("up:" + x)
        else if (choice == 5)
            serial.writeLine("down:" + x)
    }

    //% block="Turn $choice $x degrees" color="#3399FF"
    //% x.min=1 x.max=360 x.defl=90
    export function turn(choice: TurnOptions, x: number) {
        if (choice == 0)
            serial.writeLine("ccw:" + x)
        else if (choice == 1)
            serial.writeLine("cw:" + x)
    }

    //% block="Set Speed to $x cm/s" color="#66CCFF"
    //% x.min=10 x.max=100 x.defl=30
    export function fly(x: number) {
        serial.writeLine("set_speed:" + x)
    }	
	
    //% block="Flip $choice" color="#FF9933"
    export function flip(choice: FlipOptions) {
        if (choice == 0)
            serial.writeLine("flip_left")
        else if (choice == 1)
            serial.writeLine("flip_right")
        else if (choice == 2)
            serial.writeLine("flip_forward")
        else if (choice == 3)
            serial.writeLine("flip_back")
    }
}
