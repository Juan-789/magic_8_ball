// Picks a number between 0-2, when is two the program prints yes, when the program chooses 1, it prints no, and if it chooses something else, it will choose maybe.
input.onGesture(Gesture.Shake, function () {
    num = randint(0, 2)
    if (num == 2) {
        basic.showString("Yes")
    } else if (num == 1) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
})
// When the program starts it will ask you a question
let num = 0
basic.showString("Ask a question")
