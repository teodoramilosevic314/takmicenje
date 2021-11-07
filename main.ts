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
basic.forever(function () {
    kradja()
})
