let link1 = document.getElementById("Oprah")
let sub1 = document.getElementById("sub1")

link1.onclick = () => {

    if (sub1.classList.contains("show")) {
        sub1.classList.remove("show")
    } else {
        sub1.classList.add("show")
    }
    sub2.classList.remove("show")
    sub3.classList.remove("show")
    sub4.classList.remove("show")
    sub5.classList.remove("show")
}

let link2 = document.getElementById("Angela")
let sub2 = document.getElementById("sub2")

link2.onclick = () => {

    if (sub2.classList.contains("show")) {
        sub2.classList.remove("show")
    } else {
        sub2.classList.add("show")
    }
    sub1.classList.remove("show")
    sub3.classList.remove("show")
    sub4.classList.remove("show")
    sub5.classList.remove("show")
}

let link3 = document.getElementById("Kamala")
let sub3 = document.getElementById("sub3")

link3.onclick = () => {

    if (sub3.classList.contains("show")) {
        sub3.classList.remove("show")
    } else {
        sub3.classList.add("show")
    }
    sub1.classList.remove("show")
    sub2.classList.remove("show")
    sub4.classList.remove("show")
    sub5.classList.remove("show")
}

let link4 = document.getElementById("Eradicate")
let sub4 = document.getElementById("sub4")

link4.onclick = () => {

    if (sub4.classList.contains("show")) {
        sub4.classList.remove("show")
    } else {
        sub4.classList.add("show")
    }
    sub1.classList.remove("show")
    sub2.classList.remove("show")
    sub3.classList.remove("show")
    sub5.classList.remove("show")
}

let link5 = document.getElementById("roles and responsibilities")
let sub5 = document.getElementById("sub5")

link5.onclick = () => {

    if (sub5.classList.contains("show")) {
        sub5.classList.remove("show")
    } else {
        sub5.classList.add("show")
    }
    sub1.classList.remove("show")
    sub2.classList.remove("show")
    sub3.classList.remove("show")
    sub4.classList.remove("show")
}

const home = document.getElementById("home")
home.onclick= function() {
    window.scrollTo(0,0)
}

