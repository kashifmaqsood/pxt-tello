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

enum DeviceTelemetryOptions {
    IP,
    SSID,
    Frequency,
    Signal    
}

enum DroneTelemetryOptions {    
    Battery,
    Temperature,
    Roll,
    Pitch,
    Yaw,
    Height,
    BarometerHeight,
    Speed,
    FlightTime
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

    //% block color="#FF0000"
    export function connect() {
        serial.writeLine("connect")
    }

    //% block="WiFi Connect -  SSID: $x Password: $y " color="#000099"    
    export function ConnectToWiFi(x: string, y: string) {
        serial.writeLine("wificonnect:" + x + ":" + y)
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
    export function set_speed(x: number) {
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
	
    //% block="Device Telemetry $choice" color="#0000ff"
    export function DeviceTelemetry(choice: DeviceTelemetryOptions) {
        if (choice == 0)
            serial.writeLine("telemetry:ip")
        else if (choice == 1)
            serial.writeLine("telemetry:ssid")
        else if (choice == 2)
            serial.writeLine("telemetry:freq")
        else if (choice == 3)
            serial.writeLine("telemetry:signal")	

        let d = ""

        for (let i = 1; i < 40000; i++) {
            d = serial.readLine()
            if (d == "") {
                control.waitMicros(50)
            } else {
                return d		 
            }
        }

	return d
    }
	
//% block="Drone Telemetry $choice" color="#FF0000"
    export function DroneTelemetry(choice: DroneTelemetryOptions) {        
	if (choice == 0)
            serial.writeLine("telemetry:battery")
	else if (choice == 1)
            serial.writeLine("telemetry:temp")	
	else if (choice == 2)
            serial.writeLine("telemetry:roll")
	else if (choice == 3)
            serial.writeLine("telemetry:pitch")
	else if (choice == 4)
            serial.writeLine("telemetry:yaw")
	else if (choice == 5)
            serial.writeLine("telemetry:height")
	else if (choice == 6)
            serial.writeLine("telemetry:baro_height")
	else if (choice == 7)
            serial.writeLine("telemetry:speed")
	else if (choice == 8)
            serial.writeLine("telemetry:flight_time")

        let d = ""

        for (let i = 1; i < 40000; i++) {
            d = serial.readLine()
            if (d == "") {
                control.waitMicros(50)
            } else {
                return d		 
            }
        }

	return d
    }
	
}
