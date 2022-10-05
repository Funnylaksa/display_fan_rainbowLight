def on_button_pressed_a():
    # fan on
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    # fan off
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.NO)
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)


w_moist = 10
w_weight = 2
w_temp = 3
w_humid = 4
w_wind = 5
w_heater = -2

x_moist = 10
x_weight = 2
x_temp = 3
x_humid = 4
x_wind = 5
x_heater = 20

colorbit_51bit = None
radio.set_group(88)
radio.set_group(90)
OLED12864_I2C.init(60)

def on_forever():
    # without heater 
    OLED12864_I2C.show_string(0, 0, "Est Dry Time:", 1)
    t0 = w_moist * x_moist + w_weight * x_weight + w_temp * x_temp + w_humid * x_humid + w_wind * x_wind
    t0_hr = Math.idiv(t0, 60)
    t0_min = t0 % 60
    t0_str = "" + str(t0_hr) + "hr" + ("" + str(t0_min)) + "min"
    OLED12864_I2C.show_string(1, 1, t0_str, 1)
    basic.pause(1000)

    # with heater
    t1 = t0 + w_heater * x_heater
    t1_hr = Math.idiv(t1, 60)
    t1_min = t1 % 60
    t1_str = "" + str(t1_hr) + "hr" + ("" + str(t1_min)) + "min"
    OLED12864_I2C.show_string(0, 2, "With Heater:", 1)
    OLED12864_I2C.show_string(1, 3, t1_str, 1)
    basic.pause(5000)
    OLED12864_I2C.clear()
basic.forever(on_forever)
