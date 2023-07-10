// ................................................................................
// slider (what_is_section)
// ................................................................................

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

// ................................................................................
// slider info (features_section)
// ................................................................................

const blocks = document.querySelectorAll('.block');
const infos = document.querySelectorAll('.info');
const balls = document.querySelectorAll('.circle-features');
let idxFeatures = 0;

balls.forEach(item => {
    item.addEventListener('click', e => {
        deleteActiveFeatures();
        idxFeatures = +e.target.dataset.value;
        addActiveFeatures(idxFeatures);
    })
})

function deleteActiveFeatures() {
    blocks.forEach(x => x.classList.remove('active-title'));
    infos.forEach(x => x.classList.remove('active-info'));
    balls.forEach(x => x.classList.remove('active-features'));
}

function addActiveFeatures(idx) {
    blocks[idx].classList.add('active-title');
    infos[idx].classList.add('active-info');
    balls[idx].classList.add('active-features');
}

