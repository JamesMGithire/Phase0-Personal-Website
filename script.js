let nomad = document.getElementById('nomadHr')
let aElements = this.document.getElementsByClassName("nav-item");
let rect0 = aElements[0].getBoundingClientRect()
nomad.style.left = `${rect0.left}px`;
nomad.style.width = `${rect0.width - 25}px`
// https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
window.addEventListener('scroll', () => {
    nomadFun();
    nomad.style.transition = "all 0.7s";
    nomad.style.left = (nomadFun());
});

function nomadFun() {
    // let nomad = document.getElementById('nomadHr');
    let element0 = document.querySelector('#page-top')
        .getBoundingClientRect();
    let element1 = document.querySelector('#my-services')
        .getBoundingClientRect();

    let aElements = this.document.getElementsByClassName("nav-item");
    let rect0 = aElements[0].getBoundingClientRect()
    let rect1 = aElements[1].getBoundingClientRect()
    nomad.style.left = `${rect0.left}px`
    // checking whether fully visible && position.bottom <= window.innerHeight
    // Get class section divs
    let secDivs = this.document.getElementsByClassName("section");
    try {
        for (el in secDivs) {
            if (secDivs[el].getBoundingClientRect().y <= (window.innerHeight / 2) && secDivs[el].getBoundingClientRect().y >= -(secDivs[el].getBoundingClientRect().height - 200)) {
                nomad.style.width = `${aElements[el].getBoundingClientRect().width - 20}px`
                return `${aElements[el].getBoundingClientRect().left}px`;
            }
        }
    }
    catch (err) {
        // Do nothing... Good boy.
    }
}
