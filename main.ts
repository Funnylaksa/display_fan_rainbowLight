input.onButtonPressed(Button.A, function on_button_pressed_a() {
    //  fan on
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    //  fan off
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.No)
    basic.pause(100)
})
let w_moist = 10
let w_weight = 2
let w_temp = 3
let w_humid = 4
let w_wind = 5
let w_heater = -2
let x_moist = 10
let x_weight = 2
let x_temp = 3
let x_humid = 4
let x_wind = 5
let x_heater = 20
let colorbit_51bit = null
radio.setGroup(88)
radio.setGroup(90)
OLED12864_I2C.init(60)
basic.forever(function on_forever() {
    //  without heater 
    OLED12864_I2C.showString(0, 0, "Est Dry Time:", 1)
    let t0 = w_moist * x_moist + w_weight * x_weight + w_temp * x_temp + w_humid * x_humid + w_wind * x_wind
    let t0_hr = Math.idiv(t0, 60)
    let t0_min = t0 % 60
    let t0_str = "" + ("" + t0_hr) + "hr" + ("" + ("" + t0_min)) + "min"
    OLED12864_I2C.showString(1, 1, t0_str, 1)
    basic.pause(1000)
    //  with heater
    let t1 = t0 + w_heater * x_heater
    let t1_hr = Math.idiv(t1, 60)
    let t1_min = t1 % 60
    let t1_str = "" + ("" + t1_hr) + "hr" + ("" + ("" + t1_min)) + "min"
    OLED12864_I2C.showString(0, 2, "With Heater:", 1)
    OLED12864_I2C.showString(1, 3, t1_str, 1)
    basic.pause(5000)
    OLED12864_I2C.clear()
})
