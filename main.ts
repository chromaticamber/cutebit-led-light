cuteBot.forward()
basic.forever(function () {
    if (input.lightLevel() < 10) {
        CutebotPro.singleHeadlights(CutebotProRGBLight.RGBL, 255, 255, 255)
        CutebotPro.singleHeadlights(CutebotProRGBLight.RGBL, 255, 255, 255)
    } else {
        CutebotPro.singleHeadlights(CutebotProRGBLight.RGBL, 0, 0, 0)
        CutebotPro.singleHeadlights(CutebotProRGBLight.RGBL, 0, 0, 0)
    }
    basic.pause(1000)
})
