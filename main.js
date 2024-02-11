const targetDate = new Date('2024-04-03T00:00:00');

function updateCountdown() {
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("count_down").textContent = `${days}` + " days left";
}
updateCountdown();