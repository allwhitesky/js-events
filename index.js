window.addEventListener("click", function (event) {
    console.log("== The window was clicked")
    console.log("  -- event.target:", event.target)
    console.log("  -- event.currentTarget:", event.currentTarget)
})

function boxClickHandler(event) {
    console.log("== A box was clicked")
    console.log("  -- event.target:", event.target)
    console.log("  -- event.currentTarget:", event.currentTarget)
}

var boxes = document.getElementsByClassName("box")
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClickHandler)
}

function buttonClickHandler(event) {
    console.log("== A button was clicked")
    console.log("  -- event:", event)
    console.log("  -- event.target:", event.target)
    console.log("  -- event.currentTarget:", event.currentTarget)

    var box = event.currentTarget.parentNode
    box.classList.toggle("highlighted")

    event.stopPropagation()
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonClickHandler)
}

var link = document.getElementById("website-link")
link.addEventListener("click", function (event) {
    console.log("== The link was clicked")
    event.preventDefault()
})

function one() {
    return 1
}

function two() {
    return 2
}

function three() {
    return 3
}

function addThree(a, b, c) {
    return a + b + c
}

addThree(one(), two(), three())
addThree(1, 2, 3)
