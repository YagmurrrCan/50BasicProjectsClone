
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let currentActive = 1;

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

function update(){
    circles.forEach( (circle, index)  => {
        if(index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    console.log("act : ", actives.length, "circ : ", circles.length);
    console.log( (100 * (actives.length-1) / (circles.length-1) ) + "%");   // progressbarda aralıkları eşitledik ve yüzde olarak gösterdik

    progress.style.width = (100 * (actives.length-1) / (circles.length-1) ) + "%";  // BU ADIMDA NODE ARASINDAKI BAR RENGI EMPTYDEN FILL OLUR. Progressin styleına gider ve width değişir!

    /* Bu kısımda inactive olan prev butonu active hale geldi ve next butonu son nodea ulaşınca disable yapıldı*/
    if(currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}