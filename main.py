cuteBot.forward()

def on_forever():
    if input.light_level() < 10:
        CutebotPro.single_headlights(CutebotProRGBLight.RGBL, 255, 255, 255)
        CutebotPro.single_headlights(CutebotProRGBLight.RGBL, 255, 255, 255)
    else:
        CutebotPro.single_headlights(CutebotProRGBLight.RGBL, 0, 0, 0)
        CutebotPro.single_headlights(CutebotProRGBLight.RGBL, 0, 0, 0)
    basic.pause(1000)
basic.forever(on_forever)
