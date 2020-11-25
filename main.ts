function doSomething (bok: number) {
    item = bok * bok
    basic.showNumber(item)
    doSomething(bok + 1)
}
let item = 0
doSomething(1)
