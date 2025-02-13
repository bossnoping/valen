function showText() {
    document.getElementById("hiddenText").style.display = "block";
}

window.onload = () => {
    const sunflowers = document.querySelectorAll('.sunflower');
    sunflowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.classList.add('show');
        }, index * 500);
    });
};
