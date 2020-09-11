input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # # # . #
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            # # . . #
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            # # . # #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # # #
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # # #
        . . # # .
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # . .
        . # . # .
        . . . . #
        `)
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . .
        `)
})
basic.forever(function () {
	
})
