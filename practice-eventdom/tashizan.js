function tashizan() {
    const left = Number(document.getElementById("left").value);
    const right = Number(document.getElementById("right").value);

    const s = left + right;
    document.getElementById("answer").textContent = s;
}
document.getElementById("calc").addEventListener("click", tashizan);