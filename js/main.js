// Select required elements
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

setInterval(clock, 1000);

function clock() {
    const date = new Date();

    const sec = date.getSeconds();
    const secRatio = ((sec / 60) * 360);
    second.style.transform = `rotate(${secRatio}deg)`;


    const min = date.getMinutes();
    const minRatio = ((min / 60) * 360);
    minute.style.transform = `rotate(${minRatio}deg)`;

    const hr = date.getHours();
    const hrRatio = ((hr / 12) * 360);
    hour.style.transform = `rotate(${hrRatio}deg)`;
}