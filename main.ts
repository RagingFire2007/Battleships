input.onGesture(Gesture.LogoUp, function () {
    if (ship_1_placed == 0) {
        if (ship_1_base_y < 4) {
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_y += 1
        }
    } else {
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            }
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (ship_1_placed == 0) {
        if (ship_1_base_x > 0) {
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_x += -1
        }
    } else {
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ship_1_placed == 0) {
        led.plotBrightness(ship_1_base_x, ship_1_base_y, 100)
        ship_1_placed = 1
    } else {
        led.setBrightness(25)
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            }
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (ship_1_placed == 0) {
        if (ship_1_base_x < 4) {
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_x += 1
        }
    } else {
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            }
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (ship_1_placed == 0) {
        if (ship_1_base_y > 0) {
            led.unplot(ship_1_base_x, ship_1_base_y)
            ship_1_base_y += -1
        }
    } else {
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            }
        }
    }
})
let ship_3_placed = 0
let ship_2_placed = 0
let ship_1_placed = 0
let ship_1_base_y = 0
let ship_1_base_x = 0
basic.clearScreen()
ship_1_base_x = 2
ship_1_base_y = 2
let ship_2_base_x = 0
let ship_2_base_y = 0
let ship_3_base_x = 0
let ship_3_base_y = 0
ship_1_placed = 0
ship_2_placed = 0
ship_3_placed = 0
led.setBrightness(25)
while (ship_1_placed == 0) {
    led.toggle(ship_1_base_x, ship_1_base_y)
    basic.pause(100)
}
while (ship_2_placed == 0) {
    let ship_2_rotation = 0
    if (ship_2_rotation == 0) {
        led.toggle(ship_2_base_x, ship_2_base_y)
        led.toggle(ship_2_base_x, ship_2_base_y - 1)
    } else {
        led.toggle(ship_2_base_x, ship_2_base_y)
        led.toggle(ship_2_base_x + 1, ship_2_base_y)
    }
    basic.pause(100)
    led.setBrightness(25)
}
basic.forever(function () {
	
})
