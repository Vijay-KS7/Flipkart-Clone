let a = null;
let b = document.getElementById("horiz-scroll-left");
let c = document.getElementById("horiz-scroll-right");
function slide_left() {
    if (a == null) {
        a = document.getElementById("secondelecmove");
        a.style.transform = "translateX(-48%)";
        b.style.display = "none";
        c.style.display = "flex";
    }
}

function slide_right() {
    a.style.transform = "translateX(0)";
    a = null;
    c.style.display = "none";
    b.style.display = "flex";
}
let a1 = null;
let b1 = document.getElementById("horiz-scroll-left1");
let c1 = document.getElementById("horiz-scroll-right1");
function slide_left1() {
    if (a1 == null) {
        a1 = document.getElementById("secondelecmove1");
        a1.style.transform = "translateX(-35%)";
        b1.style.display = "none";
        c1.style.display = "flex";
    }
}

function slide_right1() {
    a1.style.transform = "translateX(0)";
    a1 = null;
    c1.style.display = "none";
    b1.style.display = "flex";
}
let a2 = null;
let b2 = document.getElementById("horiz-scroll-left2");
let c2 = document.getElementById("horiz-scroll-right2");
function slide_left2() {
    if (a2 == null) {
        a2 = document.getElementById("secondelecmove2");
        a2.style.transform = "translateX(-48%)";
        b2.style.display = "none";
        c2.style.display = "flex";
    }
}

function slide_right2() {
    a2.style.transform = "translateX(0)";
    a2 = null;
    c2.style.display = "none";
    b2.style.display = "flex";
}
let a3 = null;
let b3 = document.getElementById("horiz-scroll-left3");
let c3 = document.getElementById("horiz-scroll-right3");
function slide_left3() {
    if (a3 == null) {
        a3 = document.getElementById("secondelecmove3");
        a3.style.transform = "translateX(-35%)";
        b3.style.display = "none";
        c3.style.display = "flex";
    }
}

function slide_right3() {
    a3.style.transform = "translateX(0)";
    a3 = null;
    c3.style.display = "none";
    b3.style.display = "flex";
}
let a4 = null;
let b4 = document.getElementById("horiz-scroll-left4");
let c4 = document.getElementById("horiz-scroll-right4");
function slide_left4() {
    if (a4 == null) {
        a4 = document.getElementById("secondelecmove4");
        a4.style.transform = "translateX(-35%)";
        b4.style.display = "none";
        c4.style.display = "flex";
    }
}

function slide_right4() {
    a4.style.transform = "translateX(0)";
    a4 = null;
    c4.style.display = "none";
    b4.style.display = "flex";
}