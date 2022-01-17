input.onGesture(Gesture.TiltLeft, function () {
    if (ship_1_placed == 0) {
        if (ship_1_base_x > 0) {
            ship_1_base_x += -1
        }
    } else {
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            } else {
                if (ship_4_placed == 0) {
                	
                } else {
                    if (ship_5_placed == 0) {
                    	
                    }
                }
            }
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (ship_1_placed == 0) {
        if (ship_1_base_x < 4) {
            ship_1_base_x += 1
        }
    } else {
        if (ship_2_placed == 0) {
        	
        } else {
            if (ship_3_placed == 0) {
            	
            } else {
                if (ship_4_placed == 0) {
                	
                } else {
                    if (ship_5_placed == 0) {
                    	
                    }
                }
            }
        }
    }
})
let ship_5_placed = 0
let ship_4_placed = 0
let ship_3_placed = 0
let ship_2_placed = 0
let ship_1_placed = 0
let ship_1_base_x = 0
basic.clearScreen()
ship_1_base_x = 0
let ship_1_base_y = 0
let ship_2_base_x = 0
let ship_2_base_y = 0
let ship_3_base_x = 0
let ship_3_base_y = 0
let ship_4_base_x = 0
let ship_4_base_y = 0
let ship_5_base_x = 0
let ship_5_base_y = 0
while (ship_1_placed == 0) {
    led.plotBrightness(ship_1_base_x, ship_1_base_y, 30)
    basic.pause(100)
    led.plotBrightness(ship_1_base_x, ship_2_base_y, 0)
    basic.pause(100)
}
basic.forever(function () {
	
})
