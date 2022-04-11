
const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll' , checkBoxes)

checkBoxes()

function checkBoxes() {
    const trigger = (window.innerHeight / 6) * 3

    boxes.forEach( (box) => {
        const boxDOM = box.getBoundingClientRect().top;

        if(boxDOM < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}