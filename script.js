let count = 0;

function setName() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    const counter = document.getElementById("counter");

    if (name) {
        greeting.textContent = "Hello, " + name + " 🚀";
    } else {
        greeting.textContent = "Hello, Guest 😎";
    }

    count = 0;
    counter.textContent = count;
}

function increaseCounter() {
    count++;
    const counter = document.getElementById("counter");
    counter.textContent = count;

    counter.style.transform = "scale(1.2)";
    setTimeout(() => {
        counter.style.transform = "scale(1)";
    }, 150);
}

function resetCounter() {
    count = 0;
    const counter = document.getElementById("counter");
    counter.textContent = count;

    counter.style.transform = "scale(0.8)";
    setTimeout(() => {
        counter.style.transform = "scale(1)";
    }, 150);
}
