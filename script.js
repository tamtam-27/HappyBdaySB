const backrooms = [
    "room1.jpg", "room2.jpg", "room3.jpg", "room4.jpg", "room5.jpg", "room6.jpg", "room7.jpg"
]

let roomIdx = 0;
function nextbg() {
    const arrow = document.getElementById("arrow");
    const textbox = document.getElementById("vnText");
    const exitLink = document.getElementById("bingpot");
    roomIdx++;
    document.body.style.backgroundImage = `url('images/room${roomIdx}.jpg')`;
    if (roomIdx < backrooms.length) {
        arrow.style.display = "none";
        textbox.style.display = "block";
        const allTexts = textbox.querySelectorAll("p");
        allTexts.forEach(p => p.style.display = "none")
        const currText = document.getElementById(`text${roomIdx}`);
        if (currText) {
            currText.style.display = "block";
        }
    };
    if (roomIdx === backrooms.length) {
        exitLink.style.display = "block";
        arrow.style.display = "none"
    }
}

function closeText() {
    const textbox = document.getElementById("vnText");
    const arrow = document.getElementById("arrow");
    textbox.style.display = "none";
    arrow.style.display = "block";
    arrow.style.opacity = "1";
}

function lightOn() {
    nextbg();
    const complexAudio = document.getElementById("theComplex");
    const overlay = document.getElementById("darker");
    const switcher = document.getElementById("switch");
    complexAudio.play();
    switcher.style.opacity = "0";
    overlay.style.background = "transparent";
    overlay.style.pointerEvents = "None";
}

function linkSite1() {
    window.location.href = "intro.html";
}

function linkSite2() {
    window.location.href = "extra.html"
}

function bingpot() {
    document.getElementById("q1").addEventListener("input", function () {
        if (this.value.toLowerCase() === "bingpot") {
            countdownMeet();
            document.getElementById("countdown").style.display = "block";
            const link = document.getElementById("conti");
            link.innerText = "continue";
            link.href = "part2.html";
        };
    });
}


function fireworks() {
    if (typeof confetti !== 'function') {
        return;
    }

    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
};

function countdownMeet() {
    var endDate = new Date("Apr 18, 2026 12:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = endDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "I SEE U";
        }
    }, 1000);
};

window.onload = fireworks;