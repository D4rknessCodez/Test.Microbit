def on_button_pressed_a():
    for index in range(2):
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # # # . #
            # . . . .
            . # . . .
            """)
        basic.show_leds("""
            # . . . .
            . . . . .
            # # . . #
            . . . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . #
            # # . # #
            . . . . #
            . . . . .
            """)
        basic.show_leds("""
            . . . . #
            . . . # .
            # . # # #
            . . . # .
            . . . . #
            """)
        basic.show_leds("""
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            """)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_leds("""
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . .
        """)
    basic.show_leds("""
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . #
        """)
    basic.show_leds("""
        # . . . .
        . # . . .
        . . . . .
        . . . # #
        . . . # #
        """)
    basic.show_leds("""
        # . . . .
        . . . . .
        . . # # #
        . . # # .
        . . # . #
        """)
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # . .
        . # . # .
        . . . . #
        """)
    basic.show_leds("""
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . .
        """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
