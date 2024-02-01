let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-sopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});