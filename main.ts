input.onButtonPressed(Button.A, function () {
    serial.writeLine("start fan")
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("stop fan")
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.No)
    basic.pause(100)
})
let colorbit_51bit: colorbit.Strip = null
OLED12864_I2C.init(60)
basic.forever(function () {
    serial.writeLine("rainbow light")
    colorbit_51bit = colorbit.initColorBit(DigitalPin.P8, BitColorMode.RGB)
    basic.showIcon(IconNames.SmallDiamond)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Orange))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Red))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Yellow))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Green))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Green))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Blue))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Indigo))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Violet))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Purple))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.White))
    basic.pause(500)
    colorbit_51bit.showColor(colorbit.colors(BitColors.Black))
})
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Est Dry Time:",
    1
    )
    OLED12864_I2C.showString(
    1,
    1,
    "3h 23min",
    1
    )
    basic.pause(1000)
    OLED12864_I2C.showString(
    0,
    2,
    "With Heater:",
    1
    )
    OLED12864_I2C.showString(
    1,
    3,
    "1h 23min",
    1
    )
    basic.pause(50000)
    OLED12864_I2C.clear()
})
