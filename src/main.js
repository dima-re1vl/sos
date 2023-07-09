// slider (what_is_section)

const imgCollection = document.querySelectorAll('.what-img');
const arrow = document.querySelector('.what-right');
let imgNow = 0;
const circles = document.querySelectorAll('.circle');

arrow.addEventListener('click', () => {
    imgNow++;
    deleteActive();
    if (imgNow == 4) {
        imgNow = 0
    }
    addActive(imgNow);
})

circles.forEach(circle => {
    circle.addEventListener('click', e => {
        deleteActive();
        imgNow = +e.target.dataset.value;
        addActive(imgNow)
    })
})

function deleteActive() {
    imgCollection.forEach(x => {
        x.classList.remove('active')
    })

    circles.forEach(x => {
        x.classList.remove('active-circle')
    })

}

function addActive(x) {
    imgCollection[x].classList.add('active')
    circles[x].classList.add('active-circle')
}
