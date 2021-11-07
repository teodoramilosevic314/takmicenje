function kradja () {
    if (input.acceleration(Dimension.Strength) > 1034) {
        basic.showIcon(IconNames.Angry)
        for (let index = 0; index < 4; index++) {
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
    } else {
        basic.clearScreen()
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == sifra) {
        otkljucano = 1
    } else {
        greska += 1
    }
})
let otkljucano = 0
let sifra = ""
radio.setGroup(234)
sifra = ":)"
let greska = 0
otkljucano = 0
basic.forever(function () {
    if (otkljucano == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        kradja()
    }
})
