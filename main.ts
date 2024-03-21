let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 3)
    if (numero == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (numero == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (numero == 3) {
        basic.showIcon(IconNames.Square)
    }
})
