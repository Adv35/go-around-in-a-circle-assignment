let R = 32
let Area = 22 / (7 * R ** 2)
let Perimeter = 2 * (22 / (7 * R))
serial.writeValue("Area", Area)
serial.writeValue("Perimeter", Perimeter)
basic.forever(function () {
	
})
