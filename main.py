def on_button_pressed_a():
    if ship_1_placed == 0:
        pass
    else:
        if ship_2_placed == 0:
            pass
        else:
            if ship_3_placed == 0:
                pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    global ship_1_base_y
    if ship_1_placed == 0:
        if ship_1_base_y < 4:
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_y += 1
    else:
        if ship_2_placed == 0:
            pass
        else:
            if ship_3_placed == 0:
                pass
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    global ship_1_base_x
    if ship_1_placed == 0:
        if ship_1_base_x > 0:
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_x += -1
    else:
        if ship_2_placed == 0:
            pass
        else:
            if ship_3_placed == 0:
                pass
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    global ship_1_base_x
    if ship_1_placed == 0:
        if ship_1_base_x < 4:
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_x += 1
    else:
        if ship_2_placed == 0:
            pass
        else:
            if ship_3_placed == 0:
                pass
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    global ship_1_base_y
    if ship_1_placed == 0:
        if ship_1_base_y > 0:
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_y += -1
    else:
        if ship_2_placed == 0:
            pass
        else:
            if ship_3_placed == 0:
                pass
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

ship_3_placed = 0
ship_2_placed = 0
ship_1_placed = 0
ship_1_base_y = 0
ship_1_base_x = 0
basic.clear_screen()
ship_1_base_x = 2
ship_1_base_y = 2
ship_2_base_x = 0
ship_2_base_y = 0
ship_3_base_x = 0
ship_3_base_y = 0
ship_1_placed = 0
ship_2_placed = 0
ship_3_placed = 0
while ship_1_placed == 0:
    led.toggle(ship_1_base_x, ship_1_base_y)
    basic.pause(100)
    led.set_brightness(25)

def on_forever():
    pass
basic.forever(on_forever)
