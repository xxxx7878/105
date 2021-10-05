let cm = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    cm = pins.map(
    pins.pulseIn(DigitalPin.P1, PulseValue.High),
    0,
    46058,
    2,
    1000
    )
    basic.showNumber(cm)
})
