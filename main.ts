function kradja () {
    if (input.acceleration(Dimension.Strength) > 1034) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.clearScreen()
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == sifra) {
        otkljucano = 1
    } else {
        greska += 1
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
let sifra = ""
let otkljucano = 0
radio.setGroup(234)
let greska = 0
otkljucano = 0
sifra = ":)"
let blokiraj = 0
basic.forever(function () {
    if (blokiraj == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
        blokiraj = 0
    }
})
basic.forever(function () {
    if (otkljucano == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
        otkljucano = 0
    } else {
        kradja()
    }
})
basic.forever(function () {
    if (greska > 2) {
        blokiraj += 1
    }
})
