basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        led.plot(4, 0)
    }
    basic.pause(1000)
})
